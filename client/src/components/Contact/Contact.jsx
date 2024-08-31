import React, { useRef, useState } from "react"
import EmailIcon from "@mui/icons-material/Email"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import PhoneIcon from "@mui/icons-material/Phone"
import emailjs from "@emailjs/browser"
import CloseIcon from "@mui/icons-material/Close"
import "./Contact.css"
import { Alert } from "@mui/material"

const Contact = () => {
    const [alertResponse, setAlertResponse] = useState(null)
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs
            .sendForm("service_q11xi7k", "template_ryjbzfw", form.current, {
                publicKey: "n0xsaWw-zwMZOjvH9",
            })
            .then(
                () => {
                    console.log("SUCCESS!")
                    setAlertResponse("success")
                },
                (error) => {
                    console.log("FAILED...", error.text)
                    setAlertResponse("failed")
                }
            )
    }

    return (
        <div className="contact">
            <h2 className="section-header">Let's Chat and Get Started</h2>
            <form ref={form} onSubmit={sendEmail} className="contact-wrapper">
                <div className="contact-inputs">
                    <div className="contact-inputs-left">
                        <input type="text" name="from_name" placeholder="Name" />
                        <input type="email" name="from_email" placeholder="Email" />
                        <input type="text" name="phone_no" placeholder="Phone No" />
                    </div>
                    <div className="contact-inputs-right">
                        <input type="text" name="poject_type" placeholder="Project Type" />
                        <textarea name="project_description" id="" placeholder="Project Description"></textarea>
                    </div>
                </div>
                <button type="submit" className="contact-send-btn">
                    Send
                </button>
                <div className="contact-icons">
                    <a href="mailto:getniyashere@gmail.com" className="contact-gmail">
                        <EmailIcon fontSize="large" />
                        <p>devguru.solutions@gmail.com</p>
                    </a>
                    <a
                        href="https://api.whatsapp.com/send?phone=+919745676150&text=Hey there!"
                        className="contact-whatsapp"
                    >
                        <WhatsAppIcon fontSize="large" />
                        <p>Whatsapp</p>
                    </a>
                    <div className="contact-phone">
                        <PhoneIcon fontSize="large" />
                        <p>+91 9745676150</p>
                    </div>
                </div>
            </form>
            <div className={`contact-alert-div ${alertResponse == "success" ? "contact-alert-on" : ""}`}>
                <Alert variant="filled" severity="success" className="contact-alert">
                    Your message has succesfully sent.
                <CloseIcon onClick={ ()=>setAlertResponse("")} className="contact-success-close-icon"/>
                </Alert>
            </div>
        </div>
    )
}

export default Contact
