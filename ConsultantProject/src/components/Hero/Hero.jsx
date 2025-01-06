import React from 'react'
import './Hero.css'
import arrow from '../../assets/edusity_assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'> 
      <div className="hero-text">
        <h1>Ask Away !!!!</h1>
        <p>Ask our student councelors that will assits you in your college application journey</p>
        {/* <button className='btn features'>Get Started <img src={arrow} alt="" /></button> */}
      </div>
    </div>
  )
}

export default Hero
