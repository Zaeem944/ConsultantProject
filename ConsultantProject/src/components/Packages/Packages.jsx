import React from 'react';
import './Packages.css';

const Packages = () => {
  return (
    <div className="packages-container" id="packages">
      <h1 className="packages-title">Our Packages</h1>
      <div className="packages">
        <div className="package">
          <h2>SAT Preparation Packages</h2>
          <div className="package-item">
            <h3>Premium SAT Package (1 Month)</h3>
            <ul>
              <li>Includes core concepts and strategies (English + Math Section)</li>
              <li>In-depth practice questions from past exams/papers</li>
              <li>4 classes per week, 1 hour each</li>
              <li>Flexible Weekend/Weekday Timings</li>
              <li>Personalized 1:1 classes</li>
              <li>Detailed Notes, Books, Past Exams</li>
              <li><b>New Year Discounted Price:</b> PKR 24,999</li>
            </ul>
          </div>
          <div className="package-item">
            <h3>SAT Plus Packages (Budget Option)</h3>
            <ul>
              <li>5:1 Student to Instructor Ratio</li>
              {/* <li>Group Discount Price: PKR 15,000 for 1 month</li> */}
              <li>Includes core concepts and strategies (English + Math Section)</li>
              <li>In-depth practice questions from past exams/papers</li>
              <li>4 classes per week, 1 hour each</li>
              <li>Detailed Notes, Books, Past Exams</li>
              <li>Fixed Timings</li>
              <li><b>New Year Discounted Price:</b> PKR 14,999</li>
            </ul>
          </div>
        </div>

        <div className="package">
          <h2>University Essays and Personal Statement Packages</h2>
          <div className="package-item">
            <h3>Personal Statement/Individual Essay Plus Package</h3>
            <ul>
              <li>3 Sessions, 1 hour each</li>
              <li>Session 1: How to brainstorm and craft the perfect essay structure</li>
              <li>Session 2: First Draft Review</li>
              <li>Session 3: Second Draft Review + Edits</li>
              <li><b>New Year Discounted Price:</b> PKR 4,999</li>
            </ul>
          </div>
          <div className="package-item">
            <h3>Premium Essay Package (1 Month)</h3>
            <ul>
              <li>Continuous and ongoing consultation support</li>
              <li>Covers all types of essays (Personal Statement, Extra Curricular, Supplemental)</li>
              <li>Triple Sessions Individually for each essay</li>
              <li><b>New Year Discounted Price:</b> PKR 8,499</li>
            </ul>
          </div>
        </div>

        <div className="package">
          <h2>University and Extra Curricular Consultation Packages</h2>
          <div className="package-item">
            <h3>One Time Consultation (LUMS)</h3>
            <ul>
              <li>Application strategies and academic major consultation</li>
              <li>How to stand out through your extracurriculars and awards</li>
              <li>Overall profile review and suggestions</li>
              <li>1-hour session</li>
              <li><b>New Year Discounted Price:</b> PKR 3,499</li>
            </ul>
          </div>
        </div>
        <div className="package">
          <h2>Combined Packages</h2>
          <div className="package-item">
          <h3>Premium Consultation Package (1 Month)</h3>
            <ul>
              <li>Continuous and ongoing support</li>
              <li>Application strategies, academic major consultation, and profile improvement</li>
              <li>How to stand out through your extracurriculars and awards</li>
              <li>Covers all types of essays (Personal Statement, Extra Curricular, Supplemental)</li>
              <li>Triple Sessions Individually for each essay (Session 1: How to brainstorm and craft the perfect essay structure, Session 2: First Draft Review, Session 3: Updated Draft Review + Final Edits)</li>
              <li><b>New Year Discounted Price:</b> PKR 9,999</li>
            </ul>
          </div>
          <div className="package-item">
            <h3>Premium University Package (2 Month)</h3>
            <ul>
              <li>Complete SAT Prep (English + Math Section)</li>
              <li>Includes core concepts and strategies</li>
              <li>Includes in-depth practice questions from past exams/past papers </li>
              <li>4 classes per week, 1 hour each, Flexible Weekend/Weekday Timings</li>
              <li>Personalized 1:1 classes</li>
              <li>Continuous and Ongoing Support throughout the application process</li>
              <li>Application strategies, academic major consultation, and profile improvement</li>
              <li>How to stand out through your extracurriculars and awards</li>
              <li>Covers all types of Essays: Personal Statement + Extra Curricular + Supplemental/Why Us/Why Academic Programmed</li>
              <li>Triple Sessions Individually for each essay (Session 1: How to brainstorm and craft the perfect essay structure Session 2: First Draft Review Session 3: Updated Draft Review + Final Edits)</li>
              <li><b>New Year Discounted Price:</b> PKR 49,999</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
