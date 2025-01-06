import React from 'react'
import './About.css'
import about_img from '../../assets/edusity_assets/about.png'
import play_icon from '../../assets/edusity_assets/play-icon.png'

const About = () => {
  return (
    <div className='about' >
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            {/* <img src={play_icon} alt="" className='play-icon'/> */}
        </div>
        <div className="about-right">
            <h3>ABOUT OUR CONSULTATIO FIRM</h3>
            <h2>Lorem ipsum dolor sit amet consectetur.
            </h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, accusamus dolor consequatur aliquam sequi eius dolores, quia reprehenderit porro molestias ex nisi odio dolorum iusto quaerat consequuntur ratione praesentium quo.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit vel ipsum tempora iure, impedit a temporibus unde placeat, mollitia sed corporis nesciunt porro ab possimus maiores, perspiciatis assumenda voluptas dicta doloremque provident consequatur obcaecati? Ipsam nisi eos omnis autem minus?</p>

        </div>
      
    </div>
  )
}

export default About
