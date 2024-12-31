import React from 'react'
import './Contact.css'

import msg_icon from '../../assets/edusity_assets/msg-icon.png'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, iure. Natus deleniti itaque in sit rem. Eaque saepe deleniti inventore.</p>
        <ul>
            <li>Phone: 123-456-7890</li>
            <li>Email: xxx@gmail.com </li>
        </ul>
      </div>
      <div className="contact-col"></div>
    </div>
  )
}

export default Contact
