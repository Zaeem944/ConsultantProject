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
              {/* <li>Price: PKR 25,000</li> */}
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
              <li>Fixed Timings</li>
            </ul>
          </div>
        </div>

        <div className="package">
          <h2>University Essays and Personal Statement Packages</h2>
          <div className="package-item">
            <h3>Personal Statement Plus Package</h3>
            <ul>
              <li>3 Sessions, 1 hour each</li>
              <li>Session 1: Brainstorming and crafting essay structure</li>
              <li>Session 2: First Draft Review</li>
              <li>Session 3: Second Draft Review + Edits</li>
              {/* <li>Price: PKR 2,500</li> */}
            </ul>
          </div>
          <div className="package-item">
            <h3>Premium Essay Package (1 Month)</h3>
            <ul>
              <li>Continuous and ongoing consultation support</li>
              <li>Covers all types of essays (Personal Statement, Extra Curricular, Supplemental)</li>
              <li>Unlimited draft review and edits</li>
              {/* <li>Price: PKR 10,000</li> */}
            </ul>
          </div>
        </div>

        <div className="package">
          <h2>University and Extra Curricular Consultation Packages</h2>
          <div className="package-item">
            <h3>One Time Consultation (LUMS)</h3>
            <ul>
              <li>Application strategies and academic major consultation</li>
              <li>Extra-curricular planning</li>
              <li>Overall profile improvement</li>
              <li>1-hour session</li>
              {/* <li>Price: PKR 1,500</li> */}
            </ul>
          </div>
          <div className="package-item">
            <h3>Premium University Package (1 Month)</h3>
            <ul>
              <li>Continuous and ongoing support</li>
              <li>Application strategies, academic major consultation, and profile improvement</li>
              <li>Unlimited draft reviews and edits</li>
              {/* <li>Price: PKR 15,000</li> */}
            </ul>
          </div>
        </div>
        <div className="package">
          <h2>Combined Packages</h2>
          <div className="package-item">
          <h3>Premium Essay  and Consultation Package (1 Month)</h3>
            <ul>
              <li>Continuous and ongoing consultation support</li>
              <li>Covers all types of essays (Personal Statement, Extra Curricular, Supplemental)</li>
              <li>Application strategies, academic major consultation, and profile improvement</li>
              <li>Unlimited draft review and edits</li>
              {/* <li>Price: PKR 10,000</li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
