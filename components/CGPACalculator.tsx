import React, { useState } from 'react';

interface CGPACalculatorProps {
  sgpa: number;
  semester: string;
}

const CGPACalculator: React.FC<CGPACalculatorProps> = ({ sgpa, semester }) => {
  const [prevCgpa, setPrevCgpa] = useState('');
  const [cgpa, setCgpa] = useState<number | null>(null);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    const prev = parseFloat(prevCgpa);
    if (isNaN(prev) || prev < 0 || prev > 10) {
      setError('Please enter a valid previous CGPA (0-10)');
      setCgpa(null);
      return;
    }
    setError('');
    let factor = 0;
    let divisor = 0;
    if (semester === '4') {
      factor = 3;
      divisor = 4;
    } else if (semester === '6') {
      factor = 5;
      divisor = 6;
    } else {
      setError('CGPA calculation is only available for 4th and 6th semesters.');
      setCgpa(null);
      return;
    }
    const calculatedCgpa = (prev * factor + sgpa) / divisor;
    setCgpa(Number(calculatedCgpa.toFixed(3)));
  };

  return (
    <div>
      <div className="form-group">
        <label htmlFor="prevCgpa">Previous CGPA</label>
        <input
          type="number"
          step="0.01"
          min="0"
          max="10"
          id="prevCgpa"
          className="form-control"
          value={prevCgpa}
          onChange={e => setPrevCgpa(e.target.value)}
          placeholder="Enter your previous CGPA"
        />
      </div>
      <button className="btn btn-primary mt-2" onClick={handleCalculate}>
        Calculate CGPA
      </button>
      {error && <div className="alert alert-danger mt-2">{error}</div>}
      {cgpa !== null && !error && (
        <div className="alert alert-success mt-2">
          <strong>Your CGPA is: {cgpa}</strong>
        </div>
      )}
    </div>
  );
};

export default CGPACalculator; 