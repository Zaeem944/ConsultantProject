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
        <div className="program" onClick={() => openPopup('Say goodbye to overpriced, outdated, and boring SAT prep! At Zaraya Education, we redefine SAT preparation with affordable, precise, and personalized training designed just for YOU. No more unstructured large classes or irrelevant reading material—our expert instructors deliver targeted strategies to help you ace every section. Every student is unique, and so is our approach. Get tailored lessons, cutting-edge resources, and the tools to unlock your potential without breaking the bank. Your SAT success story starts here!')}>          
          <img src={program_1} alt="" />
          <div className="caption">
            <img src={program_icon_1} alt="" id='different' />
            <p>Admission Tests</p>
          </div>
          <span className="tooltip">Click For More Info</span>
        </div>

        <div className="program" onClick={() => openPopup('Tired of rushed reviews and sky-high fees for university essay help? At Zaraya, we provide specialized one-to-one guidance to craft the perfect personal statement and supplemental essays like "Why Us," extracurriculars, and major-specific essays. No fluff, no time wasted—just focused, personalized support to make your application stand out. Plus, with our affordable pay-as-you-go option, you\'re in control every step of the way. Whether it’s your first essay or your final draft, we’ll ensure it’s polished, compelling, and uniquely YOU. Let’s get you into your dream school—your success is our priority!')}>          
          <img src={program_2} alt="" />
          <div className="caption">
            <img src={program_icon_2} alt="" />
            <p>University Essays</p>
          </div>
          <span className="tooltip">Click For More Info</span>
        </div>

        <div className="program" onClick={() => openPopup('Feeling lost about which academic path to choose or how to stand out in your university application? We’ve been there—and now we’re here to help! At Zaraya, our experienced counselors, who’ve been through the same journey, guide you to pick the right academic discipline for your goals and craft a standout application. We specialize in helping you ace the Awards & Honors and Extracurriculars sections—often overlooked but crucial for admissions. With personalized advice tailored to your profile, we’ll ensure you showcase your strengths in the most compelling way. Bridge the gap to your dream university with Zaraya—because your future deserves nothing less!')}>          
          <img src={program_3} alt="" />
          <div className="caption">
            <img src={program_icon_3} alt="" />
            <p>University Consultation/ Extra-curricular</p>
          </div>
          <span className="tooltip">Click For More Info</span>
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
