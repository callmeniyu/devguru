import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "./Navbar.css"
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import MenuIcon from '@mui/icons-material/Menu';
import {motion} from "framer-motion"

const Navbar = () => {
  const [menuToggled, setmMenuToggled] = useState(false)
  return (
    <div className={`navbar ${menuToggled ? "menu-navbar-on" : "" }`}>
        <Logo/>
        <ul className={`navbar-items ${menuToggled ? "menu-items-on" : "menu-items-off"  }`}>
            <li><Link className='navbar-item' to="/features">Features</Link><hr /></li>
            <li><Link className='navbar-item' to="/partners">Partners</Link><hr /></li>
            <li><Link className='navbar-item' to="/services">Services</Link><hr /></li>
            <li><Link className='navbar-item' to="/team">Team</Link><hr /></li>
            <li><Link className='navbar-item' to="/workprocess">Work Process</Link><hr /></li>
        </ul>
      <Button className={`navbar-btn ${menuToggled ? "menu-btn-on" : "menu-btn-off"  }`} text="Book Now!"/>
      <MenuIcon fontSize='large' className={`navbar-menu-icon ${menuToggled ? "menu-icon-on" : ""  }`} onClick={ ()=>setmMenuToggled(prev => !prev)} />
    </div>
  )
}

export default Navbar