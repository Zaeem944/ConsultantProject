import React from 'react'
import './Navbar.css'
import logo from '../../assets/edusity_assets/logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt="" className='logo'/>
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>Features</li>
        <li >Services</li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
