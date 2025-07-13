import React, { useState, useEffect } from 'react';

interface CGPACalculatorProps {
  sgpa: number;
  semester: string;
  currentTotalCredits: number;
  currentTotalPoints: number;
  calculatedSgpas: { [key: string]: number };
}

const CGPACalculator: React.FC<CGPACalculatorProps> = ({ sgpa, semester, currentTotalCredits, currentTotalPoints, calculatedSgpas }) => {
  const [semesterSgpas, setSemesterSgpas] = useState<{ [key: string]: string }>({});
  const [cgpa, setCgpa] = useState<number | null>(null);
  const [error, setError] = useState('');

  const currentSemesterNum = parseInt(semester);
  const totalSemesters = currentSemesterNum;

  // Auto-fill current semester SGPA and previous calculated SGPA values
  useEffect(() => {
    if (currentSemesterNum >= 1 && currentSemesterNum <= 8) {
      const newSgpas = { ...semesterSgpas };
      
      // Auto-fill current semester SGPA (only if it's greater than 0)
      if (sgpa > 0) {
        newSgpas[semester] = sgpa.toFixed(3);
      }
      
      // Auto-fill previous semester SGPA values from stored calculations
      for (let i = 1; i < currentSemesterNum; i++) {
        const semKey = i.toString();
        if (calculatedSgpas[semKey] && calculatedSgpas[semKey] > 0 && !newSgpas[semKey]) {
          newSgpas[semKey] = calculatedSgpas[semKey].toFixed(3);
        }
      }
      
      setSemesterSgpas(newSgpas);
    }
  }, [sgpa, semester, currentSemesterNum, calculatedSgpas]);

  const handleSgpaChange = (sem: string, value: string) => {
    setSemesterSgpas(prev => ({
      ...prev,
      [sem]: value
    }));
  };

  const handleCalculate = () => {
    const sgpaValues: number[] = [];
    
    // Collect all SGPA values
    for (let i = 1; i <= totalSemesters; i++) {
      const semKey = i.toString();
      const sgpaValue = parseFloat(semesterSgpas[semKey] || '0');
      
      if (isNaN(sgpaValue) || sgpaValue < 0 || sgpaValue > 10) {
        setError(`Please enter a valid SGPA for Semester ${i} (0-10)`);
        setCgpa(null);
        return;
      }
      
      sgpaValues.push(sgpaValue);
    }
    
    if (sgpaValues.length === 0) {
      setError('No SGPA values entered');
      setCgpa(null);
      return;
    }
    
    setError('');
    
    // Calculate CGPA: Average of all SGPA values
    const totalSgpa = sgpaValues.reduce((sum, val) => sum + val, 0);
    const calculatedCgpa = totalSgpa / sgpaValues.length;
    setCgpa(Number(calculatedCgpa.toFixed(3)));
  };

  const handleClearMemory = () => {
    setSemesterSgpas({});
    setCgpa(null);
    setError('');
  };

  const renderSemesterInputs = () => {
    const inputs = [];
    
    for (let i = 1; i <= totalSemesters; i++) {
      const semKey = i.toString();
      const isCurrentSemester = i === currentSemesterNum;
      const isFromPreviousCalculation = calculatedSgpas[semKey] && i < currentSemesterNum;
      
      // Debug logging
      console.log(`Semester ${i}:`, { isCurrentSemester, isFromPreviousCalculation, sgpa });
      
      // Construct label text explicitly
      let labelText = `Semester ${i} SGPA`;
      if (isCurrentSemester) {
        labelText += ' (Current - Auto-filled)';
      } else if (isFromPreviousCalculation) {
        labelText += ' (Previous Calculation)';
      }
      
      // Construct help text explicitly
      let helpText = '';
      if (isCurrentSemester) {
        helpText = 'Auto-filled from current calculation (you can edit this value)';
      } else if (isFromPreviousCalculation) {
        helpText = 'Auto-filled from previous calculation';
      }
      
      inputs.push(
        <React.Fragment key={i}>
          <div className="form-group mt-3">
            <label htmlFor={`sgpa-${i}`}>
              {labelText}
            </label>
            <input
              type="number"
              step="0.01"
              min="0"
              max="10"
              id={`sgpa-${i}`}
              className="form-control"
              value={semesterSgpas[semKey] || ''}
              onChange={e => handleSgpaChange(semKey, e.target.value)}
              placeholder={`Enter SGPA for Semester ${i}`}
              style={isFromPreviousCalculation ? { backgroundColor: '#f8f9fa' } : {}}
            />

            {isFromPreviousCalculation && (
              <small className="form-text text-success">
                {helpText}
              </small>
            )}
          </div>
        </React.Fragment>
      );
    }
    
    return inputs;
  };

  return (
    <div>
      <div className="alert alert-info">
        <strong>CGPA Calculation:</strong> Enter SGPA values for all semesters up to the current semester.
        The current semester SGPA is auto-filled from your calculation above.
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
            Based on {totalSemesters} semester{totalSemesters > 1 ? 's' : ''} (Average of all SGPA values)
          </small>
        </div>
      )}
    </div>
  );
};

export default CGPACalculator; 