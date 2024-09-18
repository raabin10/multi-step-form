import React from 'react';

const Step3 = ({ formData }) => {
  return (
    <div>
      <h2> Confirmation</h2>
      <div>
        <strong>Name:</strong> {formData.personalInfo.name}
      </div>
      <div>
        <strong>Email:</strong> {formData.personalInfo.email}
      </div>
      <div>
        <strong>Phone:</strong> {formData.personalInfo.phone}
      </div>
      <hr />
      <div>
        <strong>Address Line 1:</strong> {formData.addressInfo.address1}
      </div>
      <div>
        <strong>Address Line 2:</strong> {formData.addressInfo.address2}
      </div>
      <div>
        <strong>City:</strong> {formData.addressInfo.city}
      </div>
      <div>
        <strong>State:</strong> {formData.addressInfo.state}
      </div>
      <div>
        <strong>Zip Code:</strong> {formData.addressInfo.zip}
      </div>
    </div>
  );
};

export default Step3;
