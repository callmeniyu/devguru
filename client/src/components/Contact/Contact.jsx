import React from "react"
import Button from "../Button/Button"
import EmailIcon from "@mui/icons-material/Email"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import PhoneIcon from "@mui/icons-material/Phone"
import "./Contact.css"

const Contact = () => {
    return (
        <div className="contact">
            <h2 className="section-header">Let's Chat and Get Started</h2>
            <div className="contact-wrapper">
                <div className="contact-inputs">
                    <div className="contact-inputs-left">
                        <input type="text" name="name" placeholder="Name"/>
                        <input type="email" name="email" placeholder="Email"/>
                        <input type="text" name="phone" placeholder="Phone No"/>
                    </div>
                    <div className="contact-inputs-right">
                        <input type="text" name="poject_type" placeholder="Project Type"/>
                        <textarea name="project_description" id="" placeholder="Project Description"></textarea>
                    </div>
                </div>
                <Button text="Send" className="contact-send-btn"/>
                <div className="contact-icons">
                    <a href="mailto:getniyashere@gmail.com" className="contact-gmail">
                        <EmailIcon fontSize="large"/>
                        <p>devguru.solutions@gmail.com</p>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=+919745676150&text=Hey there!" className="contact-whatsapp">
                        <WhatsAppIcon fontSize="large"/>
                        <p>Whatsapp</p>
                    </a>
                    <div className="contact-phone">
                        <PhoneIcon fontSize="large"/>
                        <p>+91 9745676150</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
