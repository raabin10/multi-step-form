import React from 'react';

const Navigation = ({ currentStep, handleNext, handleBack, handleSubmit }) => {
  return (
    <div className="navigation-buttons">
      {currentStep > 1 && (
        <button className="btn btn-secondary" onClick={handleBack}>
          Back
        </button>
      )}
      {currentStep < 3 ? (
        <button className="btn btn-primary" onClick={handleNext}>
          Next
        </button>
      ) : (
        <button className="btn btn-success" onClick={handleSubmit}>
          Submit
        </button>
      )}
    </div>
  );
};

export default Navigation;
