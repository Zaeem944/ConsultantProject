import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/edusity_assets/next-icon.png'
import back_icon from '../../assets/edusity_assets/back-icon.png'
import user_1 from '../../assets/edusity_assets/user-1.2.png'
import user_2 from '../../assets/edusity_assets/user-2.2.png'
import user_3 from '../../assets/edusity_assets/user-3.2.png'
import user_4 from '../../assets/edusity_assets/user-4.png'

const Testimonials = () => {

    const slider = useRef(null);

    let tx = 0;

    const slideForward = () => {
        if(tx > -25) {
            tx -= 25;
        } 
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if(tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }



  return (
    <div className='testimonials'>
      <img src={next_icon} alt=""  className='btn next-btn' onClick={slideForward}/>
      <img src={back_icon} alt=""  className='btn back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Muhammad Arslan Ali</h3>
                            <p> <b>University : </b>Florida International University</p>
                            <p> <b>School : </b>Beaconhouse Bahria Town</p>
                        </div>
                    </div>
                    <p>I am deeply grateful to Sir Bilal for his invaluable guidance and support in preparing me for college applications. His clear explanations, personalized teaching approach, and constant encouragement made a challenging process much more manageable. Thanks to his efforts, I was able to achieve a strong score, which played a significant role in helping me secure admission to my dream university, Florida International University (FIU). Your dedication to my success has been truly inspiring, and I cannot thank you enough for your effort and patience in guiding me through this journey.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Muhammad Haseeb Khan</h3>
                            <p> <b>University : </b>University of Texas, Arlington </p>
                            <p> <b>School : </b>Beaconhouse Defense Campus</p>
                            <p><b>SAT:</b> 1520 </p>
                        </div>
                    </div>
                    <p>I highly recommend Sir Bilal for SAT prep. His teaching style is both thorough and engaging, breaking down complex concepts in a way that’s easy to understand. He tailored his approach to my strengths and weaknesses, providing strategies that significantly improved my performance. Thanks to his guidance, I was able to achieve a 1520 on my SAT. His dedication and personalized approach, in not only in SAT, made college admissions and university essays made a real difference in my prep and my university acceptances.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Ayesha Jamal</h3>
                            <p> <b>University : </b>LUMS</p>
                            <p> <b>School : </b>International School Lahore</p>
                            <p><b>SAT:</b> 1500 </p>
                        </div>
                    </div>
                    <p>I had the privilege of being Bilal's first student, and his guidance truly transformed my SAT journey. Thanks to his personalized teaching methods, I achieved an impressive score above 1500, which opened doors to incredible opportunities. His teaching was highly adaptive and tailored perfectly to my learning style and pace, making even the most challenging concepts easy to grasp. Beyond the SAT, he was a true mentor, supporting me through the complex university admissions process, ultimately landing me into LUMS. His dedication and guidance make him an exceptional tutor for anyone aiming to achieve their academic and career goals.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>John Doe</h3>
                            <span>Student</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, exercitationem rem maiores molestias laudantium quae quasi ratione quaerat quo illum!</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
