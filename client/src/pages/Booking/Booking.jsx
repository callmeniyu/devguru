import React from "react"
import Button from "../../components/Button/Button"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import "./Booking.css"
const Booking = () => {
    return (
        <div className="booking">
            <Navbar />
            <h2 className="section-header booking-header">Let's Start a Project Together</h2>
            <p>We guarantee to get back to you within a business day.</p>
            <div className="booking-container">
                <form className="booking-form">
                    <div className="booking-left">
                        <div>
                            <label htmlFor="">Name</label>
                            <input type="text" name="name" id="name" placeholder="Type your name" />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="Give your email" />
                        </div>
                        <div>
                            <label htmlFor="company">Company</label>
                            <input type="text" name="company" id="company" placeholder="What's your company's name" />
                        </div>
                    </div>
                    <div className="booking-right">
                        <div>
                            <label htmlFor="">Project Name</label>
                            <input type="text" name="project" id="project" placeholder="What is your project is about" />
                        </div>
                        <div>
                            <label htmlFor="project_description">Description</label>
                            <textarea
                                name="project_description"
                                id="project_description"
                                placeholder="Give brief of the project"
                            ></textarea>
                        </div>
                        <div>
                            <label htmlFor="project_reqs">Requirements</label>
                            <textarea name="project_reqs" id="project_reqs" placeholder="Project requirements"></textarea>
                        </div>
                        <div>
                            <label htmlFor="deadline">Deadline</label>
                            <input type="date" placeholder="Due date" id="deadline" name="deadline" className="booking-date" />
                        </div>
                    </div>
                </form>
                <Button text="Submit" className="booking-btn" />
            </div>
            {/* <Footer className="booking-footer"/> */}
        </div>
    )
}

export default Booking
