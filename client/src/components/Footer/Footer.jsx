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
                    <Link><EmailIcon /></Link>
                    <Link><LinkedInIcon /></Link>
                    <Link><InstagramIcon /></Link>
                    <Link><WhatsAppIcon /></Link>
                    <Link><PhoneIcon /></Link>
                </div>
            </div>
            <div className="footer-right">
                <ul className="footer-right-col1">
                    <li>
                        <h4>devguru</h4>
                    </li>
                    <li><Link>About us</Link></li>
                    <li><Link>Testimonials</Link></li>
                    <li><Link>Work Process</Link></li>
                    <li><Link>Contact Us</Link></li>
                    <li><Link>Privacy & Policy</Link></li>
                </ul>
                <ul className="footer-right-col2">
                    <li>
                        <h4>services</h4>
                    </li>
                    <li><Link>Web Development</Link></li>
                    <li><Link>Mobile App</Link></li>
                    <li><Link>Figma Design</Link></li>
                    <li><Link>Videography</Link></li>
                    <li><Link>Digital posters</Link></li>
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
