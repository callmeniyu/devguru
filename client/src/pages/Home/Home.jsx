import React, { useEffect, useRef, useState } from "react"
import Navbar from "../../components/Navbar/Navbar"
import "./Home.css"
import Hero from "../../components/Hero/Hero"
import Features from "../../components/Features/Features"
import Partners from "../../components/Partners/Partners"
import OurServices from "../../components/OurServices/OurServices"
import Technologies from "../../components/Technologies/Technologies"
import WorkProcess from "../../components/WorkProcess/WorkProcess"
import Team from "../../components/Team/Team"
import BookNow from "../../components/BookNow/BookNow"
import Testimonials from "../../components/Testimonials/Testimonials"
import Contact from "../../components/Contact/Contact"
import Footer from "../../components/Footer/Footer"
import RiseLoader from "react-spinners/RiseLoader"

const Home = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2500)
    })
    return (
        <>
            {loading ? (
                <div className="loader-div">
                    <RiseLoader loading={loading} data-testid="loader" color="#614EFA" className="loader" />
                </div>
            ) : (
                <div className="home">
                    <Navbar id="navbar" />
                    <Hero id="hero" />
                    <Features id="features" />
                    <Partners id="partners" />
                    <OurServices id="services" />
                    <Technologies id="technologies  " />
                    <WorkProcess id="workprocess" />
                    <Team id="team" />
                    <BookNow id="booknow" />
                    <Testimonials id="testimonials" />
                    <Contact id="footer" />
                    <Footer />
                </div>
            )}
        </>
    )
}

export default Home
