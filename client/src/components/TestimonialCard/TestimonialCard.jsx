import React, { useEffect } from "react"
import "./TestimonialCard.css"
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"
import author1_img from "../../assets/images/me.jpg"
const TestimonialCard = ({ data }) => {
    
    useEffect(() => {
        const preloadImages = (src) => {
                const img = new Image();
                img.src = src;
        };
    
        preloadImages(data.img);
    }, []);
    return (
        <div className="testimonialcard">
            <div className="testimonialcard-text">
                <FormatQuoteIcon className="quotation-icon-start" />
                {data.text}
                <FormatQuoteIcon className="quotation-icon-end" />
            </div>
            <div className="testimonialcard-author">
                <div className="testimonialcard-author-left">
                    <img src={data.img} alt="testimonialcard-author-img" className="testimonialcard-author-img" />
                </div>
                <div className="testimonialcard-author-right">
                    <h4>{ data.name }</h4>
                    <p>{ data.company}</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard
