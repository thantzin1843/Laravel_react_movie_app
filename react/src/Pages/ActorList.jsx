import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

function ActorList() {
  return (
    <div className="right w-full p-5 text-center">
    <div className='w-full'>
      <input type="text" name=""   className='p-2 border-none outline-none bg-gray-600 md:w-1/3 sm:w-full'/>
      <button className='bg-red-600 p-2'><AiOutlineSearch className="inline text-lg"/>Search</button>
    </div>

    <div className='w-full mt-10'>

        <div className="flex w-full justify-center flex-wrap">
            <div className="actor-card lg:w-1/5 md:w-1/3 sm:w-full m-5"> 
            <div className="upper rounded-3xl overflow-hidden"><img className='w-full hover:scale-150' style={{height:'250px',transition:'ease 0.5s'}} src="https://hips.hearstapps.com/hmg-prod/images/tom-holland-min-647db236c5e3d.jpg?crop=0.320xw:0.479xh;0.329xw,0.0336xh&resize=1200:*" alt="" /></div>
            <div className="lower text-left">
              <div className='text-xl text-center'>Tom Holland</div>
            </div>
            </div>
            <div className="actor-card lg:w-1/5 md:w-1/3 sm:w-full m-5"> 
            <div className="upper rounded-3xl overflow-hidden"><img className='w-full hover:scale-150' style={{height:'250px',transition:'ease 0.5s'}} src="https://hips.hearstapps.com/hmg-prod/images/tom-holland-min-647db236c5e3d.jpg?crop=0.320xw:0.479xh;0.329xw,0.0336xh&resize=1200:*" alt="" /></div>
            <div className="lower text-left">
              <div className='text-xl text-center'>Tom Holland</div>
            </div>
            </div>
            <div className="actor-card lg:w-1/5 md:w-1/3 sm:w-full m-5"> 
            <div className="upper rounded-3xl overflow-hidden"><img className='w-full hover:scale-150' style={{height:'250px',transition:'ease 0.5s'}} src="https://hips.hearstapps.com/hmg-prod/images/tom-holland-min-647db236c5e3d.jpg?crop=0.320xw:0.479xh;0.329xw,0.0336xh&resize=1200:*" alt="" /></div>
            <div className="lower text-left">
              <div className='text-xl text-center'>Tom Holland</div>
            </div>
            </div>
            <div className="actor-card lg:w-1/5 md:w-1/3 sm:w-full m-5"> 
            <div className="upper rounded-3xl overflow-hidden"><img className='w-full hover:scale-150' style={{height:'250px',transition:'ease 0.5s'}} src="https://hips.hearstapps.com/hmg-prod/images/tom-holland-min-647db236c5e3d.jpg?crop=0.320xw:0.479xh;0.329xw,0.0336xh&resize=1200:*" alt="" /></div>
            <div className="lower text-left">
              <div className='text-xl text-center'>Tom Holland</div>
            </div>
            </div>
            <div className="actor-card lg:w-1/5 md:w-1/3 sm:w-full m-5"> 
            <div className="upper rounded-3xl overflow-hidden"><img className='w-full hover:scale-150' style={{height:'250px',transition:'ease 0.5s'}} src="https://hips.hearstapps.com/hmg-prod/images/tom-holland-min-647db236c5e3d.jpg?crop=0.320xw:0.479xh;0.329xw,0.0336xh&resize=1200:*" alt="" /></div>
            <div className="lower text-left">
              <div className='text-xl text-center'>Tom Holland</div>
            </div>
            </div>
            <div className="actor-card lg:w-1/5 md:w-1/3 sm:w-full m-5"> 
            <div className="upper rounded-3xl overflow-hidden"><img className='w-full hover:scale-150' style={{height:'250px',transition:'ease 0.5s'}} src="https://hips.hearstapps.com/hmg-prod/images/tom-holland-min-647db236c5e3d.jpg?crop=0.320xw:0.479xh;0.329xw,0.0336xh&resize=1200:*" alt="" /></div>
            <div className="lower text-left">
              <div className='text-xl text-center'>Tom Holland</div>
            </div>
            </div>
          
            

        </div>
    </div>
  </div>
  )
}

export default ActorList