import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

function MovieList() {
  return (
    <div className="right w-full p-5 text-center">
    <div className='w-full'>
      <input type="text" name=""   className='p-2 border-none outline-none bg-gray-600 md:w-1/3 sm:w-full'/>
      <button className='bg-red-600 p-2'><AiOutlineSearch className="inline text-lg"/>Search</button>
    </div>

    <div className='w-full mt-10'>

        <div className="flex w-full justify-center flex-wrap">
        <div className="actor-card lg:w-1/5 md:w-1/3 sm:w-full m-3"> 
            <div className="upper rounded-3xl overflow-hidden"><img className='w-full hover:scale-150' style={{height:'350px',transition:'ease 0.5s'}} src="https://i.pinimg.com/originals/d4/ac/c8/d4acc863d31ab88d4a508976c22162de.jpg" alt="" /></div>
            <div className="lower text-left ps-5">
              <div className='text-xl'>Spider Man 3</div>
              <div className='text-md flex justify-between mt-1'>
                <div>2007</div>
                <div className='me-5'>5<AiFillStar
                  style={{
                    color:'#e6e02d',
                    display:'inline'
                  }}
                /></div>
              </div>
            </div>
          </div>
          <div className="actor-card lg:w-1/5 md:w-1/3 sm:w-full m-3"> 
            <div className="upper rounded-3xl overflow-hidden"><img className='w-full hover:scale-150' style={{height:'350px',transition:'ease 0.5s'}} src="https://i.pinimg.com/originals/d4/ac/c8/d4acc863d31ab88d4a508976c22162de.jpg" alt="" /></div>
            <div className="lower text-left ps-5">
              <div className='text-xl'>Spider Man 3</div>
              <div className='text-md flex justify-between mt-1'>
                <div>2007</div>
                <div className='me-5'>5<AiFillStar
                  style={{
                    color:'#e6e02d',
                    display:'inline'
                  }}
                /></div>
              </div>
            </div>
          </div>
          
          <div className="actor-card lg:w-1/5 md:w-1/3 sm:w-full m-3"> 
            <div className="upper rounded-3xl overflow-hidden"><img className='w-full hover:scale-150' style={{height:'350px',transition:'ease 0.5s'}} src="https://i.pinimg.com/originals/d4/ac/c8/d4acc863d31ab88d4a508976c22162de.jpg" alt="" /></div>
            <div className="lower text-left ps-5">
              <div className='text-xl'>Spider Man 3</div>
              <div className='text-md flex justify-between mt-1'>
                <div>2007</div>
                <div className='me-5'>5<AiFillStar
                  style={{
                    color:'#e6e02d',
                    display:'inline'
                  }}
                /></div>
              </div>
            </div>
          </div>
          <div className="actor-card lg:w-1/5 md:w-1/3 sm:w-full m-3"> 
            <div className="upper rounded-3xl overflow-hidden"><img className='w-full hover:scale-150' style={{height:'350px',transition:'ease 0.5s'}} src="https://i.pinimg.com/originals/d4/ac/c8/d4acc863d31ab88d4a508976c22162de.jpg" alt="" /></div>
            <div className="lower text-left ps-5">
              <div className='text-xl'>Spider Man 3</div>
              <div className='text-md flex justify-between mt-1'>
                <div>2007</div>
                <div className='me-5'>5<AiFillStar
                  style={{
                    color:'#e6e02d',
                    display:'inline'
                  }}
                /></div>
              </div>
            </div>
          </div>
          <div className="actor-card lg:w-1/5 md:w-1/3 sm:w-full m-3"> 
            <div className="upper rounded-3xl overflow-hidden"><img className='w-full hover:scale-150' style={{height:'350px',transition:'ease 0.5s'}} src="https://i.pinimg.com/originals/d4/ac/c8/d4acc863d31ab88d4a508976c22162de.jpg" alt="" /></div>
            <div className="lower text-left ps-5">
              <div className='text-xl'>Spider Man 3</div>
              <div className='text-md flex justify-between mt-1'>
                <div>2007</div>
                <div className='me-5'>5<AiFillStar
                  style={{
                    color:'#e6e02d',
                    display:'inline'
                  }}
                /></div>
              </div>
            </div>
          </div>

        </div>
    </div>
  </div>
  )
}

export default MovieList