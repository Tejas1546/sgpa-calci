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

export type Department = 'CSE' | 'ISE' | 'ECE' | 'MRE';
export type Semester = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
export type SubBranch = 'DS' | 'ISE';
export type Cycle = 'Physics Cycle' | 'Chemistry Cycle'; 