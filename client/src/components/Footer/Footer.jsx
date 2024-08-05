import React from "react"
import "./Footer.css"
import Logo from "../Logo/Logo"
import EmailIcon from "@mui/icons-material/Email"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import InstagramIcon from "@mui/icons-material/Instagram"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import PhoneIcon from "@mui/icons-material/Phone"
import { Link } from "react-router-dom"


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-left">
                <Logo />
                <p>
                    devguru's mission is to provide a technology bridge that leads to prosperity in business for everyone
                    from the solopreneur with big dreams to the household name large-corporation.
                </p>
                <div className="footer-social-icons">
                    <a href="mailto:getniyashere@gmail.com"><EmailIcon /></a>
                    <Link><LinkedInIcon /></Link>
                    <Link><InstagramIcon /></Link>
                    <a href="https://api.whatsapp.com/send?phone=+919745676150&text=Hey there!"><WhatsAppIcon /></a>
                    <Link><PhoneIcon /></Link>
                </div>
            </div>
            <div className="footer-right">
                <ul className="footer-right-col1">
                    <li>
                        <h4>devguru</h4>
                    </li>
                    <li><Link to="/abc">About us</Link></li>
                    <li><Link to="/abc">Testimonials</Link></li>
                    <li><Link to="/abc">Work Process</Link></li>
                    <li><Link to="/abc">Contact Us</Link></li>
                    <li><Link to="/abc">Privacy & Policy</Link></li>
                </ul>
                <ul className="footer-right-col2">
                    <li>
                        <h4>services</h4>
                    </li>
                    <li><Link to="/abc">Web Development</Link></li>
                    <li><Link to="/abc">Frontend Development</Link></li>
                    <li><Link to="/abc">UI/UX Design</Link></li>
                    <li><Link to="/abc">Mobile App Development</Link></li>
                    <li><Link to="/abc">SaaS Sevices</Link></li>
                    <li><Link to="/abc">Backend Development</Link></li>
                </ul>
                <ul className="footer-right-col3">
                    <p>©{new Date().getFullYear()} devguru. All rights reserved</p>
                    <p>
                        DevGuru Solutions, 3rd Floor, Vantage Plaza, Koramangala 6th Block, Bengaluru, Karnataka 560095,
                        India
                    </p>
                </ul>
            </div>
        </div>
    )
}

export default Footer
