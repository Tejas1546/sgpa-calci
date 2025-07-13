import { SubjectWithGrade, CalculationResult } from '../models/types';

export const calculateSGPA = (subjects: SubjectWithGrade[]): CalculationResult => {
  let totalCredits = 0;
  let totalPoints = 0;

  subjects.forEach(subject => {
    totalCredits += subject.credits;
    totalPoints += subject.credits * subject.grade;
  });

  const sgpa = totalCredits > 0 ? totalPoints / totalCredits : 0;

  return {
    sgpa: Math.round(sgpa * 100) / 100, // Round to 2 decimal places
    totalCredits,
    totalPoints
  };
};

export const validateGrade = (grade: number): boolean => {
  return Number.isInteger(grade) && grade >= 0 && grade <= 10;
}; 