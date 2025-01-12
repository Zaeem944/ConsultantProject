import React from 'react';
import './Registration.css';

const Registration = () => {
  const handleButtonClick = () => {
    window.open(
      'https://docs.google.com/forms/d/1CttSJzz50a2QX-YgTeU5YycP-zCoIHrnMG4Gh6zLSgU/edit',
      '_blank'
    );
  };

  return (
    <div className="registration-container">
      <h2>Register Now</h2>
      <p>Take the next step towards your academic success! Click below to fill out our registration form and join the journey to excellence.</p>
      <button onClick={handleButtonClick} className="registration-button">
        Register Here
      </button>
    </div>
  );
};

export default Registration;
