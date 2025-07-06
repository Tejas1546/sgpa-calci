import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import feather from 'feather-icons';
import SubjectTable from '../components/SubjectTable';
import SGPAResult from '../components/SGPAResult';
import { subjectData } from '../data/subjects';
import { calculateSGPA } from '../utils/calculator';
import { Subject, SubjectWithGrade, CalculationResult, Department, Semester, SubBranch } from '../types';

const CalculatorPage: React.FC = () => {
  const router = useRouter();
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [grades, setGrades] = useState<{ [key: string]: number }>({});
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    feather.replace();
  }, []);

  // Get parameters from URL query
  const semester = (router.query.semester as Semester) || '6';
  const department = (router.query.department as Department) || 'CSE';
  const subBranch = (router.query.subBranch as SubBranch) || 'ISE';

  useEffect(() => {
    // Load subjects based on selection
    const loadSubjects = () => {
      try {
        let subjectList: Subject[] = [];
        
        if (department === 'CSE') {
          subjectList = subjectData.CSE[semester] as Subject[];
        } else if (department === 'ISE') {
          const iseData = subjectData.ISE[semester] as { [key: string]: Subject[] };
          subjectList = iseData[subBranch] || [];
        }

        setSubjects(subjectList);
        
        // Initialize grades with 0
        const initialGrades: { [key: string]: number } = {};
        subjectList.forEach(subject => {
          initialGrades[subject.name] = 0;
        });
        setGrades(initialGrades);
        setResult(null);
      } catch (error) {
        console.error('Error loading subjects:', error);
      } finally {
        setLoading(false);
      }
    };

    if (router.isReady) {
      loadSubjects();
    }
  }, [router.isReady, semester, department, subBranch]);

  const handleGradeChange = (subjectName: string, grade: number) => {
    setGrades(prev => ({
      ...prev,
      [subjectName]: grade
    }));
  };

  const handleCalculate = () => {
    const subjectsWithGrades: SubjectWithGrade[] = subjects.map(subject => ({
      ...subject,
      grade: grades[subject.name] || 0
    }));

    const calculationResult = calculateSGPA(subjectsWithGrades);
    setResult(calculationResult);
  };

  const handleReset = () => {
    const resetGrades: { [key: string]: number } = {};
    subjects.forEach(subject => {
      resetGrades[subject.name] = 0;
    });
    setGrades(resetGrades);
    setResult(null);
  };

  const handleBackToSelection = () => {
    router.push('/');
  };

  if (loading) {
    return (
      <div className="app">
        <div className="app-content">
          <div className="section">
            <div className="col-lg-12">
              <div className="mt-20 card">
                <div className="card-body text-center">
                  <div className="spinner-border text-primary mb-3" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                  <p className="text-muted">Loading subjects...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="app-content">
        <div className="section">
          <div className="col-lg-12">
            {/* Header Card */}
            <div className="mt-20 card">
              <div className="card-header">
                <div className="card-title">
                  {department} - Semester {semester}
                  {department === 'ISE' && ` (${subBranch})`}
                </div>
                <div className="card-options">
                  <div className="pull-right">
                    <button
                      onClick={handleReset}
                      className="btn btn-secondary btn-sm mr-2"
                    >
                      <i data-feather="refresh-cw" className="mr-1"></i>
                      Reset Grades
                    </button>
                    <button
                      onClick={handleBackToSelection}
                      className="btn btn-primary btn-sm"
                    >
                      <i data-feather="arrow-left" className="mr-1"></i>
                      Back to Selection
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <p className="text-center mb-0" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4e73df' }}>
                  Enter your grades to calculate your SGPA
                </p>
              </div>
            </div>

            {/* Subject Table */}
            <SubjectTable
              subjects={subjects}
              grades={grades}
              onGradeChange={handleGradeChange}
            />

            {/* Calculate Button */}
            <div className="text-center mt-4">
              <button
                onClick={handleCalculate}
                className="btn btn-success btn-lg"
              >
                <i data-feather="calculator" className="mr-2"></i>
                Calculate SGPA
              </button>
            </div>

            {/* Result */}
            {result && (
              <div className="mt-4">
                <SGPAResult result={result} />
              </div>
            )}

            {/* Instructions */}
            <div className="mt-20 card">
              <div className="card-header">
                <div className="card-title">Instructions</div>
              </div>
              <div className="card-body">
                <div className="alert alert-info">
                  <ul className="mb-0">
                    <li>Enter your grades for each subject using the 0-10 scale</li>
                    <li>Grades should be whole numbers between 0 and 10</li>
                    <li>Examples: 8, 7, 9, 6, 10</li>
                    <li>Click "Calculate SGPA" to see your result</li>
                    <li>Use "Reset Grades" to clear all inputs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage; 