import React from 'react';
import { CalculationResult } from '../types';

interface SGPAResultProps {
  result: CalculationResult | null;
}

const SGPAResult: React.FC<SGPAResultProps> = ({ result }) => {
  if (!result) return null;

  return (
    <div className="mt-20 card">
      <div className="card-header">
        <div className="card-title">Your SGPA Result</div>
        <div className="card-options">
          <div className="pull-right">
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="text-center">
          <div className="mb-4">
            <div className="display-4 text-success font-weight-bold mb-2">
              {result.sgpa}
            </div>
            <div className="text-success font-weight-semibold text-uppercase">
              SGPA Score
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body text-center">
                  <div className="text-muted">Total Credits</div>
                  <div className="h3 font-weight-bold text-primary">{result.totalCredits}</div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body text-center">
                  <div className="text-muted">Total Points</div>
                  <div className="h3 font-weight-bold text-success">{result.totalPoints.toFixed(1)}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <div className="alert alert-info">
              <h6 className="alert-heading">Formula Used</h6>
              <code className="text-dark">
                SGPA = {result.totalPoints.toFixed(1)} ÷ {result.totalCredits} = {result.sgpa}
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SGPAResult; 