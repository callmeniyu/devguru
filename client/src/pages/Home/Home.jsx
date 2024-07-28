import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./Home.css"
import Hero from '../../components/Hero/Hero'
import Features from '../../components/Features/Features'
import Partners from '../../components/Partners/Partners'
import OurServices from '../../components/OurServices/OurServices'
const Home = () => {
  return (
      <div className='home'>
      <Navbar />
      <Hero />
      <Features />
      <Partners />
      <OurServices />
    </div>
  )
}

export default Home