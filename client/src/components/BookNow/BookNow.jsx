import React from "react"
import "./BookNow.css"
import booknow_img from "../../assets/images/intimate_us_img.png"
import { Link } from "react-router-dom"
import Button from "../Button/Button"

const BookNow = () => {
    return (
        <div className="booknow">
            <h2 className="section-header">You are a click away from us</h2>
            <div className="booknow-btns">
                <Button text="Book your slot now!" className="intimate-btn" />
                <Button text="Contact us now" className="black-btn intimate-btn" />
            </div>
            <p>We will connect with you soon!</p>
        </div>
    )
}

export default BookNow
