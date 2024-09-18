import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Navigation from './Navigation';

const Form = ({ formData, setFormData }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    if (validateStep()) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    if (validateStep()) {
      alert('Form submitted successfully!');
      localStorage.removeItem('formData');
    }
  };

  const validateStep = () => {
    let validationErrors = {};
    const { personalInfo, addressInfo } = formData;

    if (currentStep === 1) {
      if (!personalInfo.name) validationErrors.name = 'Name is required';
      if (!personalInfo.email || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(personalInfo.email)) {
        validationErrors.email = 'Valid email is required';
      }
      if (!personalInfo.phone || !/^\d{10}$/.test(personalInfo.phone)) {
        validationErrors.phone = 'Phone number is required (10 digits)';
      }
    } else if (currentStep === 2) {
      if (!addressInfo.address1) validationErrors.address1 = 'Address Line 1 is required';
      if (!addressInfo.city) validationErrors.city = 'City is required';
      if (!addressInfo.state) validationErrors.state = 'State is required';
      if (!addressInfo.zip || !/^\d{5}$/.test(addressInfo.zip)) {
        validationErrors.zip = 'Valid zip code is required';
      }
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  return (
    <>
      {currentStep === 1 && <Step1 formData={formData} setFormData={setFormData} errors={errors} />}
      {currentStep === 2 && <Step2 formData={formData} setFormData={setFormData} errors={errors} />}
      {currentStep === 3 && <Step3 formData={formData} />}
      <Navigation
        currentStep={currentStep}
        handleNext={handleNext}
        handleBack={handleBack}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default Form;
