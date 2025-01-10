import React, {useEffect, useState} from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';
import logo from '../../assets/edusity_assets/logo2.png'
import menu_icon from '../../assets/edusity_assets/menu-icon.png'

const Navbar = () => {

  const [sticky, setSticky] = React.useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  const [Menu, setMenu] = useState(false)

  const toggleMenu = () => {
    Menu? setMenu(false) : setMenu(true);
    
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul className={Menu ? '' : 'hide-mobile-menu'}>
        <li>
          <Link to="hero" smooth={true} duration={500} offset={0}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-150}>
            About
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} duration={500} offset={-300}>
            Program
          </Link>
        </li>
        <li>
          <Link to="packages" smooth={true} duration={500} offset={-150}>
            Packages
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} duration={500} offset={-250}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link className="btn" to="contact" smooth={true} duration={500} offset={-300}>Contact Us</Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  );
}

export default Navbar
