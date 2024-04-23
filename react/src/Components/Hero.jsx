import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlinePlayCircle } from "react-icons/ai";
import logo from './../assets/logo1.png'

function Hero() {
  return (
    <div className='heroContainer' >
        <div className="grayScale h-full">
            <div className="flex justify-between px-10 py-5 items-center container">
                <div className=''>
                <img src={logo} alt="" className='w-[100px] '/>
                </div>
                <div className='flex items-center'>
                     {/* <Dropdown/> */}
                <Link to='/login' className='bg-red-600 py-2 px-4 hover:bg-red-500 rounded-md'>Sign In</Link>
                </div>
            </div>
            <div className="flex justify-center  flex-wrap">
                <div className='md:w-1/3 w-3/4 flex flex-col justify-center'>
                    <div className='text-3xl md:text-5xl font-bold ' style={{lineHeight:'60px',letterSpacing:'0px'}}>
            Unlimited movies, TV shows, and more</div>
            <div className='mb-5 md:text-xl '>Watch anywhere. Cancel anytime.</div>
                </div>
                <div className='md:w-1/3 w-full h-full md:p-5 text-center' style={{height:'100%'}}>
                    <div className='w-full flex justify-center' style={{height:'350px'}}>
                    <img className='w-3/4 h-full ' src="https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"  alt="" />
                    </div>
                    <div>
                        <button className='bg-red-600 py-2 px-10 mt-1 md:mt-3 rounded-md  hover:bg-red-500 m-auto'><AiOutlinePlayCircle className='inline me-3 text-2xl'/><span>Watch Now !</span></button>
                    </div>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Hero