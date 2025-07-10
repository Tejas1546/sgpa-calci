import React from 'react';
import { Subject, SubjectWithGrade } from '../types';

interface SubjectTableProps {
  subjects: Subject[];
  grades: { [key: string]: number };
  onGradeChange: (subjectName: string, grade: number) => void;
}

const SubjectTable: React.FC<SubjectTableProps> = ({ subjects, grades, onGradeChange }) => {
  return (
    <div className="mt-20">
      <div className="table-responsive">
        <table className="table table-hover table-striped table-bordered w-100" style={{ tableLayout: 'fixed' }}>
          <thead>
            <tr>
              <th style={{ width: '8%', textAlign: 'center' }}>SL</th>
              <th style={{ width: '45%', textAlign: 'left' }}>Subject Name</th>
              <th style={{ width: '12%', textAlign: 'center' }}>Credits</th>
              <th style={{ width: '20%', textAlign: 'center' }}>Grade (0-10)</th>
              <th style={{ width: '15%', textAlign: 'center' }}>Points</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject, index) => {
              const grade = grades[subject.name] || 0;
              const points = subject.credits * grade;
              
              return (
                <tr key={index}>
                  <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                    {index + 1}
                  </td>
                  <td style={{ textAlign: 'left', verticalAlign: 'middle' }}>
                    <div className="hidden md:block font-weight-semibold" style={{ wordBreak: 'break-word' }}>
                      {subject.name}
                    </div>
                    <div className="block md:hidden font-weight-semibold" style={{ wordBreak: 'break-word' }}>
                      {(() => {
                        const maxLen = 20;
                        if (subject.name.length <= maxLen) return subject.name;
                        const breakIndex = subject.name.lastIndexOf(' ', maxLen);
                        if (breakIndex === -1) return subject.name;
                        return <>
                          {subject.name.slice(0, breakIndex)}<br />
                          {subject.name.slice(breakIndex + 1)}
                        </>;
                      })()}
                    </div>
                  </td>
                  <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                    <span className="badge badge-primary" style={{ display: 'inline-block', minWidth: '30px' }}>{subject.credits}</span>
                  </td>
                  <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                    <input
                      type="number"
                      min="0"
                      max="10"
                      step="1"
                      value={grade === 0 ? '' : grade}
                      onChange={(e) => {
                        const value = parseInt(e.target.value);
                        if (e.target.value === '') {
                          onGradeChange(subject.name, 0);
                        } else if (!isNaN(value) && value >= 0 && value <= 10) {
                          onGradeChange(subject.name, value);
                        }
                      }}
                      onFocus={(e) => {
                        if (e.target.value === '0') {
                          e.target.value = '';
                        }
                      }}
                      className="form-control form-control-sm mx-auto block w-20 md:w-28"
                      placeholder="0"
                    />
                  </td>
                  <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                    <span className="text-success font-weight-semibold">
                      {points.toFixed(1)}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      <div className="row mt-3">
        <div className="col-md-6">
          <div className="alert alert-light">
            <strong>Total Credits:</strong> 
            <span className="badge badge-primary ml-2">
              {subjects.reduce((sum, subject) => sum + subject.credits, 0)}
            </span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="alert alert-light">
            <strong>Total Points:</strong> 
            <span className="badge badge-success ml-2">
              {subjects.reduce((sum, subject) => sum + (subject.credits * (grades[subject.name] || 0)), 0).toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectTable; 