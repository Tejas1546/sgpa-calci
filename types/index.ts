export interface Subject {
  name: string;
  credits: number;
}

export interface SubjectWithGrade extends Subject {
  grade: number;
}

export interface CalculationResult {
  sgpa: number;
  totalCredits: number;
  totalPoints: number;
}

export type Department = 'CSE' | 'ISE' | 'ECE';
export type Semester = '4' | '6';
export type SubBranch = 'DS' | 'ISE'; 