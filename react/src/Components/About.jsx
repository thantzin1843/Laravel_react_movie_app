import React from 'react'
import leftImg from '../assets/about.png'
function About() {
  return (
    <div className='flex max-h-lvh flex-wrap' style={{backgroundColor:'#0f2646'}}>
      <div className="leftAbout md:w-1/2 w-full flex flex-col justify-center items-center">
        <div className='px-3 md:p-0 text-xl md:text-3xl md:text-right text-center font-bold'>Your ultimate destination for top quality TV shows, movies, and more</div>
        <span className='px-3 md:p-0 mt-5 md:text-right text-center w-full'>A library of movies and tv shows you can watch anywhere</span>
      </div>
      <div className='rightAbout md:w-1/2 flex items-center justify-center '>
        <img src={leftImg} alt="" className='w-4/5'/>
      </div>
    </div>
  )
}

export default About