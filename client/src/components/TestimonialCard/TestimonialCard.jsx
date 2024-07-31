import React from "react"
import "./TestimonialCard.css"
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"
import author1_img from "../../assets/images/me.jpg"
const TestimonialCard = () => {
    return (
        <div className="testimonialcard">
            <div className="testimonialcard-text">
                <FormatQuoteIcon className="quotation-icon-start" />
                Working with devguru has been a game-changer for our business. Their expertise in web development
                transformed our outdated website into a modern, responsive platform that has significantly improved our user
                engagement. Their attention to detail and commitment to using the latest technology truly sets them apart.
                We couldn't be happier with the results!
                <FormatQuoteIcon className="quotation-icon-end" />
            </div>
            <div className="testimonialcard-author">
                <div className="testimonialcard-author-left">
                    <img src={author1_img} alt="testimonialcard-author-img" className="testimonialcard-author-img" />
                </div>
                <div className="testimonialcard-author-right">
                    <h4>Mohammed Niyas</h4>
                    <p>Mern stack web developer</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard
