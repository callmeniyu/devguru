import React, { useState } from 'react'
import "./Navbar.css"
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-scroll"; 

const Navbar = () => {
  const [menuToggled, setmMenuToggled] = useState(false)
  return (
    <div className={`navbar ${menuToggled ? "menu-navbar-on" : "" }`}>
        <Logo />
        <ul className={`navbar-items ${menuToggled ? "menu-items-on" : "menu-items-off"  }`}>
            <li><Link className='navbar-item' to="features" smooth={true} duration={100}>Features</Link><hr /></li>
            <li><Link className='navbar-item' to="partners" smooth={true} duration={100}>Partners</Link><hr /></li>
            <li><Link className='navbar-item' to="services" smooth={true} duration={100}>Services</Link><hr /></li>
            <li><Link className='navbar-item' to="team" smooth={true} duration={100}>Team</Link><hr /></li>
            <li><Link className='navbar-item' to="workprocess" smooth={true} duration={100}>Work Process</Link><hr /></li>
        </ul>
      <Button className={`navbar-btn ${menuToggled ? "menu-btn-on" : "menu-btn-off"  }`} text="Book Now!" to="contact"/>
      <MenuIcon fontSize='large' className={`navbar-menu-icon ${menuToggled ? "menu-icon-on" : ""  }`} onClick={ ()=>setmMenuToggled(prev => !prev)} />
    </div>
  )
}

export default Navbar