/**
 * SGPA / CGPA Accuracy Tests
 *
 * Reads grades from marks.json, cross-verifies computed SGPA and CGPA
 * against the expected values stored in the same file.
 *
 * Two suites:
 *   1. Unit  – pure JS calculation, no browser needed
 *   2. E2E   – drives the real UI via Playwright
 */

import { test, expect, Page } from '@playwright/test';
import marksData from '../marks.json';
import subjectsData from '../src/data/subjects.json';

// ─── Types ────────────────────────────────────────────────────────────────────

interface SubjectCredit {
  name: string;
  credits: number;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getCredits(semesterNum: number, cycle?: string): SubjectCredit[] {
  const match = subjectsData.semesters.find((s: any) => {
    if (s.semester !== semesterNum) return false;
    if (cycle) return s.cycle?.toLowerCase() === cycle.toLowerCase();
    return !s.cycle;
  });
  return match ? match.subjects : [];
}

function computeSGPA(
  markSubjects: { name: string; grade_point: number }[],
  creditSubjects: SubjectCredit[]
) {
  let totalCredits = 0;
  let totalPoints = 0;
  for (const ms of markSubjects) {
    const cs = creditSubjects.find(
      (c) => c.name.toLowerCase() === ms.name.toLowerCase()
    );
    if (!cs) throw new Error(`No credit entry for "${ms.name}"`);
    totalCredits += cs.credits;
    totalPoints += cs.credits * ms.grade_point;
  }
  const sgpa =
    totalCredits > 0
      ? Math.round((totalPoints / totalCredits) * 100) / 100
      : 0;
  return { sgpa, totalCredits, totalPoints };
}

function toCycleLabel(cycle: string) {
  return cycle.toLowerCase() === 'physics' ? 'Physics Cycle' : 'Chemistry Cycle';
}

// ─── 1. Unit tests (no browser) ───────────────────────────────────────────────

test.describe('Unit: SGPA accuracy', () => {
  marksData.semesters.forEach((sem) => {
    const label = `Sem ${sem.semester}${sem.cycle ? ` (${sem.cycle})` : ''}`;
    test(`${label} – SGPA = ${sem.sgpa}`, () => {
      const credits = getCredits(sem.semester, sem.cycle);
      expect(credits.length, `No credits found for ${label}`).toBeGreaterThan(0);
      const { sgpa } = computeSGPA(sem.subjects, credits);
      expect(sgpa).toBe(sem.sgpa);
    });
  });
});

test.describe('Unit: CGPA accuracy', () => {
  test('cumulative CGPA matches marks.json after each semester', () => {
    let cumPoints = 0;
    let cumCredits = 0;
    for (const sem of marksData.semesters) {
      const credits = getCredits(sem.semester, sem.cycle);
      const { totalCredits, totalPoints } = computeSGPA(sem.subjects, credits);
      cumPoints += totalPoints;
      cumCredits += totalCredits;
      const cgpa = Math.round((cumPoints / cumCredits) * 100) / 100;
      expect(cgpa, `CGPA after sem ${sem.semester}`).toBeCloseTo(sem.cgpa, 1);
    }
  });
});

// ─── 2. E2E helpers ───────────────────────────────────────────────────────────

/**
 * Navigate to the home page and dismiss the warning modal.
 * Uses domcontentloaded (not networkidle) so it works with Next.js dev HMR.
 * Waits for the #schema select to confirm React has hydrated.
 */
async function gotoHome(page: Page) {
  await page.goto('/', { waitUntil: 'domcontentloaded' });

  // Wait for React to hydrate — the schema select is a reliable signal
  await page.locator('#schema').waitFor({ state: 'visible', timeout: 15000 });

  // Dismiss the modal
  const closeBtn = page.getByRole('button', { name: /I Understand, Continue/i });
  await closeBtn.waitFor({ state: 'visible', timeout: 10000 });
  await closeBtn.click();

  // Confirm modal is gone — the overlay has class modal-overlay
  await expect(page.locator('.modal-overlay')).toHaveCount(0, { timeout: 5000 });
}

/**
 * Select schema / dept / semester / cycle and wait for the subject table.
 */
async function selectSemester(page: Page, semNum: number, cycle?: string) {
  await page.selectOption('#schema', '2022');
  // Wait for department select to be enabled
  await expect(page.locator('#department')).not.toBeDisabled({ timeout: 3000 });
  await page.selectOption('#department', 'CSE');

  // Semester dropdown appears after dept selection
  await page.locator('#semester').waitFor({ state: 'visible', timeout: 5000 });
  await page.selectOption('#semester', String(semNum));

  if (cycle) {
    await page.locator('#cycle').waitFor({ state: 'visible', timeout: 5000 });
    await page.selectOption('#cycle', toCycleLabel(cycle));
  }

  // Wait for the subject table rows to appear
  await page.locator('table tbody tr').first().waitFor({ state: 'visible', timeout: 10000 });
}

/**
 * Fill every grade input by row index (1-based serial number in the first <td>).
 *
 * The subject name <td> contains TWO divs (desktop + mobile responsive copies),
 * so text-based matching produces doubled strings like
 * "Applied Mathematics IApplied Mathematics I" and anchored regexes fail.
 * Matching by the serial-number cell is reliable and unambiguous.
 */
async function fillGrades(
  page: Page,
  subjects: { name: string; grade_point: number }[],
  credits: SubjectCredit[]
) {
  // Build an ordered list: [{ rowIndex (1-based), grade_point }]
  // Row index = position of the subject in the credits array (same order as the table)
  for (const ms of subjects) {
    const rowIndex = credits.findIndex(
      (c) => c.name.toLowerCase() === ms.name.toLowerCase()
    );
    if (rowIndex === -1) throw new Error(`Credit entry missing for "${ms.name}"`);

    // Locate the <tr> whose first <td> text is exactly the 1-based serial number
    const serialNum = String(rowIndex + 1);
    const row = page.locator('tbody tr').filter({
      has: page.locator('td:first-child', { hasText: new RegExp(`^${serialNum}$`) }),
    });

    await row.waitFor({ state: 'visible', timeout: 5000 });
    const input = row.locator('input[type="number"]');
    await input.waitFor({ state: 'visible', timeout: 5000 });
    await input.clear();
    await input.fill(String(ms.grade_point));

    // Let React process the onChange before moving to the next input
    await page.waitForTimeout(50);
  }
}

// ─── 3. E2E: SGPA per semester ────────────────────────────────────────────────

test.describe('E2E: UI SGPA matches marks.json', () => {
  marksData.semesters.forEach((sem) => {
    const label = `Sem ${sem.semester}${sem.cycle ? ` (${sem.cycle})` : ''}`;

    test(`${label} – SGPA should be ${sem.sgpa}`, async ({ page }) => {
      const credits = getCredits(sem.semester, sem.cycle);

      await gotoHome(page);
      await selectSemester(page, sem.semester, sem.cycle);
      await fillGrades(page, sem.subjects, credits);

      await page.getByRole('button', { name: /Calculate SGPA/i }).click();

      const sgpaEl = page.locator('.display-4');
      await expect(sgpaEl).toBeVisible({ timeout: 5000 });
      const displayed = parseFloat((await sgpaEl.innerText()).trim());

      expect(displayed, `SGPA for ${label}`).toBe(sem.sgpa);
    });
  });
});

// ─── 4. E2E: CGPA after each semester ────────────────────────────────────────

test.describe('E2E: UI CGPA matches marks.json', () => {
  marksData.semesters.forEach((sem) => {
    const label = `Sem ${sem.semester}${sem.cycle ? ` (${sem.cycle})` : ''}`;

    test(`${label} – CGPA should be ${sem.cgpa}`, async ({ page }) => {
      const credits = getCredits(sem.semester, sem.cycle);

      await gotoHome(page);
      await selectSemester(page, sem.semester, sem.cycle);
      await fillGrades(page, sem.subjects, credits);

      // Calculate SGPA first (required before CGPA section appears)
      await page.getByRole('button', { name: /Calculate SGPA/i }).click();
      await expect(page.locator('.display-4')).toBeVisible({ timeout: 5000 });

      // CGPA calculator section — .mt-4.card is unique to the CGPA card
      const cgpaCard = page.locator('.mt-4.card', { hasText: 'CGPA Calculator' });
      await expect(cgpaCard).toBeVisible({ timeout: 5000 });

      // Fill ALL semesters 1..current so the CGPA is cumulative.
      // Each test is a fresh page so there is no prior calculatedResults state.
      for (const pastSem of marksData.semesters) {
        if (pastSem.semester > sem.semester) break;
        const pastCredits = getCredits(pastSem.semester, pastSem.cycle);
        const { totalCredits: pc, totalPoints: pp } = computeSGPA(pastSem.subjects, pastCredits);
        await cgpaCard.locator(`#points-${pastSem.semester}`).fill(String(pp));
        await cgpaCard.locator(`#credits-${pastSem.semester}`).fill(String(pc));
      }

      await cgpaCard.getByRole('button', { name: /Calculate CGPA/i }).click();

      const cgpaResult = cgpaCard.locator('.alert-success');
      await expect(cgpaResult).toBeVisible({ timeout: 5000 });

      const cgpaText = await cgpaResult.innerText();
      // Alert text: "Your CGPA is: 9.55" — extract the number after the colon
      const match = cgpaText.match(/Your CGPA is:\s*([\d.]+)/i);
      expect(match, `Could not parse CGPA from: "${cgpaText}"`).toBeTruthy();
      const displayedCgpa = parseFloat(match![1]);

      expect(displayedCgpa, `CGPA for ${label}`).toBeCloseTo(sem.cgpa, 1);
    });
  });
});
