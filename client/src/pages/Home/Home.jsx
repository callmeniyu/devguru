import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./Home.css"
import Hero from '../../components/Hero/Hero'
import Features from '../../components/Features/Features'
import Partners from '../../components/Partners/Partners'
import OurServices from '../../components/OurServices/OurServices'
import Technologies from '../../components/Technologies/Technologies'
import WorkProcess from '../../components/WorkProcess/WorkProcess'
import Team  from "../../components/Team/Team"
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
    </div>
  )
}

export default Home