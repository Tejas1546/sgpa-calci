import React, { useState, useEffect } from 'react';
import { Department, Semester, SubBranch, Cycle } from '../types';
import SubjectTable from '../components/SubjectTable';
import SGPAResult from '../components/SGPAResult';
import { subjectData } from '../data/subjects';
import { calculateSGPA } from '../utils/calculator';
import { Subject, SubjectWithGrade, CalculationResult } from '../types';
import { FontAwesomeIcon, icons } from '../utils/icons';
import CGPACalculator from '../components/CGPACalculator';

const HomePage: React.FC = () => {
  const [semester, setSemester] = useState<Semester | ''>('');
  const [department, setDepartment] = useState<Department | ''>('');
  const [subBranch, setSubBranch] = useState<SubBranch | ''>('');
  const [cycle, setCycle] = useState<Cycle | ''>('');
  const [showSemesterDropdown, setShowSemesterDropdown] = useState(false);
  const [showSubBranchDropdown, setShowSubBranchDropdown] = useState(false);
  const [showCycleDropdown, setShowCycleDropdown] = useState(false);
  const [showWarningModal, setShowWarningModal] = useState(true);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [grades, setGrades] = useState<{ [key: string]: number }>({});
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [showCalculator, setShowCalculator] = useState(false);
  const [calculatedSgpas, setCalculatedSgpas] = useState<{ [key: string]: number }>({});
  const [schema, setSchema] = useState<string>('');


  useEffect(() => {
    // Show semester dropdown when department is selected
    if (department) {
      setShowSemesterDropdown(true);
    } else {
      setShowSemesterDropdown(false);
      setShowSubBranchDropdown(false);
      setShowCycleDropdown(false);
    }
  }, [department]);

  useEffect(() => {
    // Show cycle dropdown for 1st and 2nd semesters
    if (semester === '1' || semester === '2') {
      setShowCycleDropdown(true);
    } else {
      setShowCycleDropdown(false);
      setCycle('');
    }
  }, [semester]);

  useEffect(() => {
    // Show sub-branch dropdown only for 2022 schema, ISE department, and 6th semester
    if (schema === '2022' && department === 'ISE' && showSemesterDropdown && semester === '6') {
      setShowSubBranchDropdown(true);
    } else {
      setShowSubBranchDropdown(false);
    }
  }, [schema, department, showSemesterDropdown, semester]);

  useEffect(() => {
    // Load subjects when all selections are complete
    if (schema && department && semester) {
      if (semester === '1' || semester === '2') {
        // For 1st and 2nd semesters, wait for cycle selection
        if (cycle) {
          loadSubjectsForSelection(schema, department, semester, '', cycle);
        }
      } else if (department === 'ISE') {
        if (schema === '2022') {
          if (semester === '6') {
            // For 2022 ISE 6th sem, wait for sub-branch selection
            if (subBranch) {
              loadSubjectsForSelection(schema, department, semester, subBranch, '');
            }
          } else if (semester === '4') {
            // For 2022 ISE 4th sem, load subjects immediately with subBranch 'ISE'
            loadSubjectsForSelection(schema, department, semester, 'ISE', '');
          }
        } else {
          // For 2024 ISE, ignore sub-branch and just load as array
          loadSubjectsForSelection(schema, department, semester, '', '');
        }
      } else {
        // For other departments, load immediately after semester selection
        loadSubjectsForSelection(schema, department, semester, '', '');
      }
    }
  }, [schema, department, semester, subBranch, cycle]);

  const loadSubjectsForSelection = (schema: string, dept: Department, sem: Semester, subBr: string, cyc: string) => {
    try {
      let subjectList: Subject[] = [];
      if (!subjectData[schema] || !subjectData[schema][dept]) {
        setSubjects([]);
        setGrades({});
        setResult(null);
        setShowCalculator(false);
        return;
      }
      
      if (sem === '1' || sem === '2') {
        // For 1st and 2nd semesters, use cycle
        const cycleData = subjectData[schema][dept][sem] as { [key: string]: Subject[] };
        subjectList = cycleData && cycleData[cyc] ? cycleData[cyc] : [];
      } else if (dept === 'CSE' || dept === 'ECE' || dept === 'EEE' || dept === 'ME' || dept === 'CE') {
        subjectList = subjectData[schema][dept][sem] as Subject[];
      } else if (dept === 'ISE') {
        if (schema === '2022') {
          const iseData = subjectData[schema][dept][sem] as { [key: string]: Subject[] };
          subjectList = iseData && iseData[subBr] ? iseData[subBr] : [];
        } else {
          // For 2024, treat as array
          subjectList = subjectData[schema][dept][sem] as Subject[];
        }
      }
      
      // Ensure subjectList is always an array
      if (!Array.isArray(subjectList)) {
        subjectList = [];
      }
      setSubjects(subjectList);
      // Initialize grades with 0
      const initialGrades: { [key: string]: number } = {};
      subjectList.forEach(subject => {
        initialGrades[subject.name] = 0;
      });
      setGrades(initialGrades);
      setResult(null);
      setShowCalculator(true);
    } catch (error) {
      console.error('Error loading subjects:', error);
    }
  };

  const handleDepartmentChange = (selectedDepartment: Department) => {
    setDepartment(selectedDepartment);
    setShowSemesterDropdown(false);
    setShowSubBranchDropdown(false);
    setShowCycleDropdown(false);
    setSemester(''); // Reset semester
    setSubBranch(''); // Reset sub-branch
    setCycle(''); // Reset cycle
    setShowCalculator(false);
    setSubjects([]);
    setGrades({});
    setResult(null);
  };

  const handleSemesterChange = (selectedSemester: Semester) => {
    setSemester(selectedSemester);
    setCycle(''); // Reset cycle when semester changes
    // Don't hide calculator, just update subjects
    if (department) {
      if (selectedSemester === '1' || selectedSemester === '2') {
        // For 1st and 2nd semesters, wait for cycle selection
        if (cycle) {
          loadSubjectsForSelection(schema, department, selectedSemester, '', cycle);
        }
      } else if (department === 'ISE') {
        if (schema === '2022') {
          // For ISE, wait for sub-branch selection
          if (subBranch) {
            loadSubjectsForSelection(schema, department, selectedSemester, subBranch, '');
          }
        } else {
          // For CSE, load immediately
          loadSubjectsForSelection(schema, department, selectedSemester, '', '');
        }
      } else {
        // For CSE, load immediately
        loadSubjectsForSelection(schema, department, selectedSemester, '', '');
      }
    }
  };

  const handleCycleChange = (selectedCycle: Cycle) => {
    setCycle(selectedCycle);
    // Don't hide calculator, just update subjects
    if (department && semester) {
      loadSubjectsForSelection(schema, department, semester, '', selectedCycle);
    }
  };

  const handleSubBranchChange = (selectedSubBranch: SubBranch) => {
    setSubBranch(selectedSubBranch);
    // Don't hide calculator, just update subjects
    if (department && semester) {
      loadSubjectsForSelection(schema, department, semester, selectedSubBranch, '');
    }
  };

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
    
    // Store the calculated SGPA for the current semester
    setCalculatedSgpas(prev => ({
      ...prev,
      [semester]: calculationResult.sgpa
    }));
  };

  const handleReset = () => {
    const resetGrades: { [key: string]: number } = {};
    subjects.forEach(subject => {
      resetGrades[subject.name] = 0;
    });
    setGrades(resetGrades);
    setResult(null);
  };

  const handleSchemaChange = (selectedSchema: string) => {
    setSchema(selectedSchema);
    setDepartment('');
    setSemester('');
    setSubBranch('');
    setCycle('');
    setShowSemesterDropdown(false);
    setShowSubBranchDropdown(false);
    setShowCycleDropdown(false);
    setShowCalculator(false);
    setSubjects([]);
    setGrades({});
    setResult(null);
  };

  const closeWarningModal = () => {
    setShowWarningModal(false);
  };

  return (
    <div className="app">
      {/* Warning Notice Modal */}
      {showWarningModal && (
        <div className="modal-overlay" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div className="modal-content" style={{
            backgroundColor: '#e74c3c',
            borderRadius: '8px',
            padding: '30px',
            maxWidth: '500px',
            width: '90%',
            position: 'relative',
            color: 'white',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
          }}>
            {/* Cross button at top right */}
            <button 
              type="button" 
              onClick={closeWarningModal}
              style={{
                position: 'absolute',
                top: '15px',
                right: '20px',
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '24px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              ×
            </button>

            {/* Content */}
            <div className="text-center mb-4">
              <FontAwesomeIcon 
                icon={icons.exclamationTriangle} 
                style={{ width: '48px', height: '48px', color: 'white', marginBottom: '20px' }} 
              />
              <h4 style={{ color: 'white', marginBottom: '20px' }}>Important Notice</h4>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h5 style={{ color: 'white', marginBottom: '15px' }}>Sahyadri College of Engineering & Management</h5>
              <p style={{ color: 'white', fontSize: '16px', lineHeight: '1.6' }}>
                This SGPA Calculator is specifically designed for students of <strong>Sahyadri College of Engineering & Management</strong>.
              </p>
              <div style={{ 
                backgroundColor: 'rgba(255,255,255,0.1)', 
                padding: '15px', 
                borderRadius: '5px', 
                marginTop: '15px',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <strong>⚠️ Important:</strong> The subject lists and credit distributions are based on Sahyadri's curriculum. 
                Students from other colleges are <strong>strongly advised not to use</strong> this calculator as it may not reflect their institution's grading system.
              </div>
            </div>

            {/* Close button at bottom right */}
            <div style={{ textAlign: 'right' }}>
              <button 
                type="button" 
                className="btn btn-light"
                onClick={closeWarningModal}
                style={{
                  backgroundColor: 'white',
                  color: '#e74c3c',
                  border: 'none',
                  padding: '10px 25px',
                  borderRadius: '5px',
                  fontWeight: 'bold',
                  fontSize: '16px'
                }}
              >
                I Understand, Continue
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="app-content">
        <div className="section">
          <div className="col-lg-12">
            <div className="mt-20 card">
              <div className="card-header">
                <div className="card-title flex items-center gap-2">
                  <FontAwesomeIcon icon={icons.graduationCap} className="text-blue-600" />
                  SGPA Calculator
                </div>
                <div className="card-options">
                  <div className="pull-right">
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="schema" className="form-label">
                        Schema
                      </label>
                      <select
                        id="schema"
                        value={schema}
                        onChange={(e) => handleSchemaChange(e.target.value)}
                        className="form-control"
                      >
                        <option value="">Select Schema</option>
                        <option value="2022">2022 Schema</option>
                        <option value="2024">2024 Schema</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="department" className="form-label">
                        Department
                      </label>
                      <select
                        id="department"
                        value={department}
                        onChange={(e) => handleDepartmentChange(e.target.value as Department)}
                        className="form-control"
                        disabled={!schema}
                      >
                        <option value="">Select Department</option>
                        <option value="CSE">Computer Science Engineering (CSE)</option>
                        <option value="ISE">Information Science Engineering (ISE)</option>
                        <option value="ECE">Electronics and Communication Engineering (ECE)</option>
                        <option value="MRE">Mechanical and Robotics Engineering (MRE)</option>
                      </select>
                    </div>
                  </div>

                  {showSemesterDropdown && (
                    <div className="col-md-4">
                      <div className="form-group">
                        <label htmlFor="semester" className="form-label">
                          Semester
                        </label>
                        <select
                          id="semester"
                          value={semester}
                          onChange={(e) => handleSemesterChange(e.target.value as Semester)}
                          className="form-control"
                        >
                          <option value="">Select Semester</option>
                          <option value="1">Semester 1</option>
                          <option value="2">Semester 2</option>
                          <option value="3">Semester 3</option>
                          <option value="4">Semester 4</option>
                          <option value="5">Semester 5</option>
                          <option value="6">Semester 6</option>
                          <option value="7">Semester 7</option>
                          <option value="8">Semester 8</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {showCycleDropdown && (
                    <div className="col-md-4">
                      <div className="form-group">
                        <label htmlFor="cycle" className="form-label">
                          Cycle
                        </label>
                        <select
                          id="cycle"
                          value={cycle}
                          onChange={(e) => handleCycleChange(e.target.value as Cycle)}
                          className="form-control"
                        >
                          <option value="">Select Cycle</option>
                          <option value="Physics Cycle">Physics Cycle</option>
                          <option value="Chemistry Cycle">Chemistry Cycle</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {showSubBranchDropdown && (
                    <div className="col-md-4">
                      <div className="form-group">
                        <label htmlFor="subBranch" className="form-label">
                          Sub-Branch
                        </label>
                        <select
                          id="subBranch"
                          value={subBranch}
                          onChange={(e) => handleSubBranchChange(e.target.value as SubBranch)}
                          className="form-control"
                        >
                          <option value="">Select Sub-Branch</option>
                          <option value="ISE">Information Science (ISE)</option>
                          <option value="DS">Data Science (DS)</option>
                        </select>
                      </div>
                    </div>
                  )}
                </div>

                {/* Calculator Section */}
                {showCalculator && (
                  <div className="mt-4">
                    {/* Header Card */}
                    <div className="mt-20 card">
                      <div className="card-header">
                        <div className="card-title">
                          {department} - Semester {semester}
                          {department === 'ISE' && semester === '6' && subBranch && ` (${subBranch})`}
                        </div>
                        <div className="card-options">
                          <div className="pull-right">
                            <button
                              onClick={handleReset}
                              className="btn btn-secondary btn-sm mr-2"
                            >
                              <FontAwesomeIcon icon={icons.times} className="mr-1" />
                              Reset Grades
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <p className="text-center mb-0" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2c3e50' }}>
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
                        <FontAwesomeIcon icon={icons.calculator} className="mr-2" />
                        Calculate SGPA
                      </button>
                    </div>

                    {/* Result */}
                    {result && (
                      <>
                        <div className="mt-4">
                          <SGPAResult result={result} />
                        </div>
                        {/* CGPA Calculator Section */}
                        <div className="mt-4 card">
                          <div className="card-header">
                            <div className="card-title">CGPA Calculator</div>
                          </div>
                          <div className="card-body">
                            <CGPACalculator 
                              sgpa={result.sgpa} 
                              semester={semester} 
                              currentTotalCredits={result.totalCredits}
                              currentTotalPoints={result.totalPoints}
                              calculatedSgpas={calculatedSgpas}
                            />
                          </div>
                        </div>
                      </>
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
                            <li><strong>CGPA Calculator:</strong> After calculating SGPA, use the CGPA Calculator to find your cumulative GPA</li>
                            <li><strong>Auto-fill Feature:</strong> Previous semester SGPA values are automatically filled from your previous calculations</li>
                            <li><strong>Manual Entry:</strong> You can manually enter SGPA values for semesters you haven't calculated yet</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 