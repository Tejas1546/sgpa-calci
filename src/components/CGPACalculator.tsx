import React, { useState, useEffect } from 'react';
import { subjectData } from '../models/subjectData';
import { Subject } from '../models/types';

interface CGPACalculatorProps {
  sgpa: number;
  semester: string;
  currentTotalCredits: number;
  currentTotalPoints: number;
  calculatedResults: { [key: string]: { sgpa: number, credits: number, points: number } };
  schema: string;
  department: string;
}

const CGPACalculator: React.FC<CGPACalculatorProps> = ({ 
  sgpa, 
  semester, 
  currentTotalCredits, 
  currentTotalPoints, 
  calculatedResults,
  schema,
  department
}) => {
  const [semesterPoints, setSemesterPoints] = useState<{ [key: string]: string }>({});
  const [semesterCredits, setSemesterCredits] = useState<{ [key: string]: string }>({});
  const [cgpa, setCgpa] = useState<number | null>(null);
  const [error, setError] = useState('');

  const currentSemesterNum = parseInt(semester);
  const totalSemesters = currentSemesterNum;

  const getDefaultCredits = (schema: string, dept: string, semStr: string): number => {
    if (!schema || !dept || !subjectData[schema] || !subjectData[schema][dept] || !subjectData[schema][dept][semStr]) {
      return 20; // fallback if data is missing
    }
    const semData = subjectData[schema][dept][semStr] as any;
    let subjects: Subject[] = [];
    if (Array.isArray(semData)) {
      subjects = semData;
    } else {
      const keys = Object.keys(semData);
      if (keys.length > 0) {
        subjects = semData[keys[0]];
      }
    }
    return subjects.reduce((sum, subj) => sum + subj.credits, 0);
  };

  // Auto-fill current semester Points and previous calculated Points values
  useEffect(() => {
    if (currentSemesterNum >= 1 && currentSemesterNum <= 8) {
      const newPoints = { ...semesterPoints };
      const newCredits = { ...semesterCredits };
      
      // Auto-fill current semester Points AND Credits (only if calculated)
      if (currentTotalCredits > 0) {
        newPoints[semester] = currentTotalPoints.toFixed(1);
        newCredits[semester] = currentTotalCredits.toString();
      }
      
      // Auto-fill previous semester Points and Default Credits
      for (let i = 1; i < currentSemesterNum; i++) {
        const semKey = i.toString();
        
        const calcRes = calculatedResults && calculatedResults[semKey];
        // Fill default credits if not explicitly modified
        if (!newCredits[semKey]) {
          if (calcRes && calcRes.credits > 0) {
            newCredits[semKey] = calcRes.credits.toString();
          } else {
            newCredits[semKey] = getDefaultCredits(schema, department, semKey).toString();
          }
        }
        
        // Fill Points if calculated
        if (calcRes && calcRes.credits > 0 && !newPoints[semKey]) {
          newPoints[semKey] = calcRes.points.toFixed(1);
        }
      }
      
      setSemesterPoints(newPoints);
      setSemesterCredits(newCredits);
    }
  }, [sgpa, semester, currentSemesterNum, currentTotalCredits, currentTotalPoints, calculatedResults, schema, department]);

  const handlePointsChange = (sem: string, value: string) => {
    setSemesterPoints(prev => ({
      ...prev,
      [sem]: value
    }));
  };

  const handleCreditsChange = (sem: string, value: string) => {
    setSemesterCredits(prev => ({
      ...prev,
      [sem]: value
    }));
  };

  const handleCalculate = () => {
    let totalPoints = 0;
    let totalCredits = 0;
    
    for (let i = 1; i <= totalSemesters; i++) {
      const semKey = i.toString();
      const pointsValue = parseFloat(semesterPoints[semKey] || '0');
      const creditsValue = parseFloat(semesterCredits[semKey] || '0');
      
      if (isNaN(creditsValue) || creditsValue <= 0) {
        setError(`Please enter valid total credits for Semester ${i} (> 0)`);
        setCgpa(null);
        return;
      }

      const maxPoints = creditsValue * 10;
      if (isNaN(pointsValue) || pointsValue < 0 || pointsValue > maxPoints) {
        setError(`Please enter valid total grade points for Semester ${i} (0 to ${maxPoints})`);
        setCgpa(null);
        return;
      }

      totalPoints += pointsValue;
      totalCredits += creditsValue;
    }
    
    if (totalCredits === 0) {
      setError('Total credits evaluate to zero');
      setCgpa(null);
      return;
    }
    
    setError('');
    const calculatedCgpa = totalPoints / totalCredits;
    setCgpa(Number(calculatedCgpa.toFixed(3)));
  };

  const handleClearMemory = () => {
    setSemesterPoints({});
    setSemesterCredits({});
    setCgpa(null);
    setError('');
  };

  const renderSemesterInputs = () => {
    const inputs = [];
    
    for (let i = 1; i <= totalSemesters; i++) {
      const semKey = i.toString();
      const isCurrentSemester = i === currentSemesterNum;
      const isFromPreviousCalculation = calculatedResults && calculatedResults[semKey] && i < currentSemesterNum;
      
      let labelText = `Semester ${i}`;
      if (isCurrentSemester) {
        labelText += ' (Current - Auto-filled)';
      } else if (isFromPreviousCalculation) {
        labelText += ' (Previous Calculation)';
      }
      
      const currentCredits = parseFloat(semesterCredits[semKey] || '0');
      const maxPointsAllowed = currentCredits > 0 ? currentCredits * 10 : 200; // default safe fallback if no credits yet
      
      inputs.push(
        <React.Fragment key={i}>
          <div className="form-group mt-3">
            <label>
              {labelText}
            </label>
            <div className="row">
              <div className="col-md-6 mb-2">
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  max={maxPointsAllowed}
                  id={`points-${i}`}
                  className="form-control"
                  value={semesterPoints[semKey] || ''}
                  onChange={e => handlePointsChange(semKey, e.target.value)}
                  placeholder={`Points (Max: ${maxPointsAllowed})`}
                  style={isFromPreviousCalculation ? { backgroundColor: '#f8f9fa' } : {}}
                />
                <small className="form-text text-muted">Total Grade Points</small>
              </div>
              <div className="col-md-6 mb-2">
                <input
                  type="number"
                  step="0.5"
                  min="1"
                  id={`credits-${i}`}
                  className="form-control"
                  value={semesterCredits[semKey] || ''}
                  onChange={e => handleCreditsChange(semKey, e.target.value)}
                  placeholder={`Credits (Sem ${i})`}
                  style={isFromPreviousCalculation ? { backgroundColor: '#f8f9fa' } : {}}
                />
                <small className="form-text text-muted">Total Credits</small>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
    
    return inputs;
  };

  return (
    <div>
      <div className="alert alert-info">
        <strong>CGPA Calculation:</strong> Formula used is EXACT Total Points divided by Total Credits. You can manually enter or edit your total grade points below.
      </div>
      
      {renderSemesterInputs()}
      
      <button className="btn btn-primary mt-3" onClick={handleCalculate}>
        Calculate CGPA
      </button>
      
      <button className="btn btn-warning mt-3 ml-2" onClick={handleClearMemory}>
        Clear Memory
      </button>
      
      {error && <div className="alert alert-danger mt-2">{error}</div>}
      
      {cgpa !== null && !error && (
        <div className="alert alert-success mt-2">
          <strong>Your CGPA is: {cgpa}</strong>
          <br />
          <small className="text-muted">
            Based on {totalSemesters} semester{totalSemesters > 1 ? 's' : ''} (Weighted by Total Credits)
          </small>
        </div>
      )}
    </div>
  );
};

export default CGPACalculator;