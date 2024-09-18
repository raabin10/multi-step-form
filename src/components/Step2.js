import React from 'react';

const Step2 = ({ formData, setFormData, errors }) => {
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        addressInfo: { ...formData.addressInfo, [name]: value }, // Safely update addressInfo
      });
    };
  
    return (
      <div>
        <h2> Address Information</h2>
        <form>
          <div className="form-group">
            <label>Address Line 1:</label>
            <input
              type="text"
              name="address1"
              value={formData.addressInfo?.address1 || ''} // Safely access addressInfo.address1
              onChange={handleChange}
              className={`form-control ${errors.address1 ? 'is-invalid' : ''}`}
            />
            {errors.address1 && <div className="invalid-feedback">{errors.address1}</div>}
          </div>
          <div className="form-group">
            <label>Address Line 2:</label>
            <input
              type="text"
              name="address2"
              value={formData.addressInfo?.address2 || ''} // Safely access addressInfo.address2
              onChange={handleChange}
              className={`form-control ${errors.address2 ? 'is-invalid' : ''}`}
            />
            {errors.address2 && <div className="invalid-feedback">{errors.address2}</div>}
          </div>
          <div className="form-group">
            <label>City:</label>
            <input
              type="text"
              name="city"
              value={formData.addressInfo?.city || ''} // Safely access addressInfo.city
              onChange={handleChange}
              className={`form-control ${errors.city ? 'is-invalid' : ''}`}
            />
            {errors.city && <div className="invalid-feedback">{errors.city}</div>}
          </div>
          <div className="form-group">
            <label>State:</label>
            <input
              type="text"
              name="state"
              value={formData.addressInfo?.state || ''} // Safely access addressInfo.state
              onChange={handleChange}
              className={`form-control ${errors.state ? 'is-invalid' : ''}`}
            />
            {errors.state && <div className="invalid-feedback">{errors.state}</div>}
          </div>
          <div className="form-group">
            <label>Zip Code:</label>
            <input
              type="text"
              name="zip"
              value={formData.addressInfo?.zip || ''} // Safely access addressInfo.zip
              onChange={handleChange}
              className={`form-control ${errors.zip ? 'is-invalid' : ''}`}
            />
            {errors.zip && <div className="invalid-feedback">{errors.zip}</div>}
          </div>
        </form>
      </div>
    );
  };
  
  export default Step2;
  