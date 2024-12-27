import React from 'react'
import './Navbar.css'
import logo from '../../assets/edusity_assets/logo.png'

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="" />
      <ul>
        <li>Home</li>
        <li>Prgram</li>
        <li>Features</li>
        <li>Services</li>
        <li>About Us</li>
      </ul>
    </nav>
  )
}

export default Navbar
