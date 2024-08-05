import React from "react"
import "./Testimonials.css"
import { Carousel } from "react-responsive-3d-carousel"
import { testimonial } from "../../utils/data"
import TestimonialCard from "../TestimonialCard/TestimonialCard"
const Testimonials = () => {
    return (
        <div className="testimonials">
            <h3 className="section-header">What our clients say</h3>
            <Carousel
                className="testimonial-carousel"
                interval="4000"
                autoPlay={false}
                showIndicators={false}
                width="27.5rem"
                height="20rem"
                showStatus={false}
                arrowsWidth="2rem"
                arrowsHeight="2rem"
                arrowsDefaultColor="black"
                isArrowsShadow={false}
                selectable={true}
            >
                <TestimonialCard data={ testimonial[0]} />
                <TestimonialCard data={ testimonial[1]}/>
                <TestimonialCard data={ testimonial[2]}/>
                <TestimonialCard data={ testimonial[3]}/>
                <TestimonialCard data={ testimonial[4]}/>
            </Carousel>
        </div>
    )
}

export default Testimonials
