import React from 'react'
import './Contact.css'

import msg_icon from '../../assets/edusity_assets/msg-icon.png'
import mail_icon from '../../assets/edusity_assets/mail-icon2.png'
import phone_icon from '../../assets/edusity_assets/phone-icon2.png'
// import location_icon from '../../assets/edusity_assets/location-icon.png'

import white_arrow from '../../assets/edusity_assets/white-arrow.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2b33bef7-3191-4dc3-8541-eb829eabd059");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <ul>
            <li><img src={phone_icon} alt="" />Phone: 0329 1599796</li>
            <li><img src={mail_icon} alt="" />Email: zarayaeducation@gmail.com </li>
        </ul>
      </div>
      <div className="contact-col">
        <h2>Send Your Queries</h2>
        <h2>We are just a message Away!</h2>
        <form onSubmit={onSubmit}>
          <label htmlFor="">Your Name</label>
          <input type="text" name='name' placeholder='Enter your name' required />
          <label htmlFor="">Your Phone number</label>
          <input type="tel" name='phone' placeholder='Enter your phone number' required />
          <label htmlFor="">Write your Mesage here</label>
          <textarea name="message" row="1" placeholder='Enter Your Message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
