import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('formData');
    return savedData ? JSON.parse(savedData) : {
      personalInfo: { name: '', email: '', phone: '' }, // Ensure this is initialized
      addressInfo: { address1: '', address2: '', city: '', state: '', zip: '' },
    };
  });

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  return (
    <div className="App">
      <div className="container">
        <Form formData={formData} setFormData={setFormData} />
      </div>
    </div>
  );
}

export default App;
