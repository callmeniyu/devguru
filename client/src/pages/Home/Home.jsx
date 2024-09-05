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
import Helmet from "react-helmet";


const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home - DevGuru</title>
                <link rel="canonical" href="https://devgurusolutions.tech/" />
                <meta property="og:title" content="devguru - Web-Based Solutions" />
                <meta
                    property="og:description"
                    content="Offering top-notch web development, frontend, backend, and Figma design services."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://devgurusolutions.tech/" />
                <meta property="og:image" content="https://devgurusolutions.tech/images/og-image.jpg" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Devguru - Web-Based Solutions" />
                <meta
                    name="twitter:description"
                    content="Offering top-notch web development, frontend, backend, and Figma design services."
                />
                <meta name="twitter:image" content="https://devgurusolutions.tech/images/twitter-card-image.jpg" />

                <Helmet>
        <title>Home - DevGuru</title>
        <link rel="canonical" href="https://devgurusolutions.tech/" />

        {/* Schema Markup: JSON-LD for Organization  */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "devguru",
            "url": "https://devgurusolutions.tech/",
            "logo": "https://devgurusolutions.tech/components/Logo/Logo.jsx",
            "sameAs": [
              "https://www.facebook.com/devguru",
              "https://www.linkedin.com/company/devguru",
              "https://twitter.com/devguru"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-800-123-4567",
              "contactType": "Customer Service"
            }
          }
          `}
        </script>
      </Helmet>
            </Helmet>
            <div className="home">
                    <Navbar id="navbar" />
                    <Hero id="hero" />
                    <Features id="features" />
                    <Partners id="partners" />
                    <OurServices id="services" />
                    <Technologies id="technologies" />
                    <WorkProcess id="workprocess" />
                    <Team id="team" />
                    <BookNow id="booknow" />
                    <Testimonials id="testimonials" />
                    <Contact id="contact" />
                    <Footer />
                </div>
        </>
    )
}

export default Home
