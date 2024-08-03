import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./Home.css"
import Hero from '../../components/Hero/Hero'
import Features from '../../components/Features/Features'
import Partners from '../../components/Partners/Partners'
import OurServices from '../../components/OurServices/OurServices'
import Technologies from '../../components/Technologies/Technologies'
import WorkProcess from '../../components/WorkProcess/WorkProcess'
import Team from "../../components/Team/Team"
import BookNow from "../../components/BookNow/BookNow"
import Testimonials from '../../components/Testimonials/Testimonials'
import Contact from '../../components/Contact/Contact'
import Footer from "../../components/Footer/Footer"
const Home = () => {
  return (
      <div className='home'>
      <Navbar />
      <Hero />
      <Features />
      <Partners />
      <OurServices />
      <Technologies />
      <WorkProcess />
      <Team />
      <BookNow />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home