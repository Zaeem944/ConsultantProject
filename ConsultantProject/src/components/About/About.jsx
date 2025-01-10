import React from 'react'
import './About.css'
import about_img from '../../assets/edusity_assets/about.png'

const About = () => {
  return (
    <div className='about' >
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
        </div>
        <div className="about-right">
            <h2>ABOUT US</h2>
            <p>We’re a team of individuals from all over the world who’ve cracked the code to university success and have joined hands to give back to the community.
            With top-notch performance in O/A Levels, admissions, and university life, we know firsthand how tough the journey can be without the right guidance. Also, We’ve been there—facing expensive, one-size-fits-all services on one hand and unhelpful, generic advice on the other. That’s why we’ve come together to provide affordable, personalized support tailored to your unique needs. Whether it’s admissions, academics, or building a killer profile, we’re here to help you level up and achieve your goals with confidence.</p>

            <h3>Our Vision</h3>
            <p>To empower students everywhere with the knowledge, tools, and confidence to excel and create a brighter future.</p>

            <h3>Our Mission</h3>
            <p>To simplify the academic journey of young and talented individual by offering personalized, affordable guidance that helps students achieve their fullest potential.</p>

            <h3>Our Values</h3>
            <ol>
              <li><b>Personalization : </b> Every student’s journey is unique, and so is our approach.</li>
              <li><b>Accessibility : </b>Quality guidance should never break the bank.</li>
              <li><b>Excellence : </b>Delivering nothing short of the best support and advice.
              </li>
              <li><b>Empowerment : </b>Inspiring confidence and success in every step.</li>
              <li><b>Community : </b>Giving back by sharing knowledge and experiences.</li>

            </ol>
            

        </div>
      
    </div>
  )
}

export default About
