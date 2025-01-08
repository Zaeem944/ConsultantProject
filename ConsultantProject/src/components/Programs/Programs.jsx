import React, { useState } from 'react';
import './Programs.css';
import program_1 from '../../assets/edusity_assets/program-1.2.png';
import program_2 from '../../assets/edusity_assets/program-2.png';
import program_3 from '../../assets/edusity_assets/program-3.png';
import program_icon_1 from '../../assets/edusity_assets/program-icon-1.2.png';
import program_icon_2 from '../../assets/edusity_assets/program-icon-2.png';
import program_icon_3 from '../../assets/edusity_assets/program-icon-3.png';

const Programs = () => {
  const [popup, setPopup] = useState({ isVisible: false, content: '' });

  const openPopup = (content) => {
    setPopup({ isVisible: true, content });
  };

  const closePopup = () => {
    setPopup({ isVisible: false, content: '' });
  };

  return (
    <div className={`programs-container ${popup.isVisible ? 'blur-background' : ''}`}>
      <div className='programs' id='program'>
        <div className="program" onClick={() => openPopup('Details about Admission Tests')}>
          <img src={program_1} alt="" />
          <div className="caption">
            <img src={program_icon_1} alt="" id='different' />
            <p>Admission Tests</p>
          </div>
        </div>
        <div className="program" onClick={() => openPopup('Details about University Essays')}>
          <img src={program_2} alt="" />
          <div className="caption">
            <img src={program_icon_2} alt="" />
            <p>University Essays</p>
          </div>
        </div>
        <div className="program" onClick={() => openPopup('Details about University Consultation and Extracurricular')}>
          <img src={program_3} alt="" />
          <div className="caption">
            <img src={program_icon_3} alt="" />
            <p>University Consultation/ Extra-curricular</p>
          </div>
        </div>
      </div>

      {popup.isVisible && (
        <div className="popup" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <p>{popup.content}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Programs;
