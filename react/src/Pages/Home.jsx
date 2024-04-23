import React from 'react'
import Hero from '../Components/Hero'
import TopRated from '../Components/TopRated'
import About from '../Components/About'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div className='w-full'>
        <Hero/>
        <TopRated/>
        <About/>
        <Footer/>
    </div>
  )
}

export default Home