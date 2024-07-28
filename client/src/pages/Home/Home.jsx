import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./Home.css"
import Hero from '../../components/Hero/Hero'
import Features from '../../components/Features/Features'
import Partners from '../../components/Partners/Partners'
const Home = () => {
  return (
      <div className='home'>
      <Navbar />
      <Hero />
      <Features />
      <Partners />
    </div>
  )
}

export default Home