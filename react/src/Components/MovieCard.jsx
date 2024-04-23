import React from 'react'
import { AiFillStar } from "react-icons/ai";

function MovieCard(props) {
  return (
        <div className="actor-card relative  lg:w-1/6 md:w-1/3 sm:w-full m-3 "> 
            <div className="upper rounded-md overflow-hidden"><img className='w-full hover:scale-150' style={{height:'300px',transition:'ease 0.5s'}} src={props.img} alt="" /></div>
            <div className="lower text-left ps-5 mt-3 absolute bottom-0 w-full " style={{backgroundColor:'#000000aa'}}>
              <div className='text-md'>{props.title}</div>
              <div className='text-md flex justify-between mt-1'>
                <div>{props.year}</div>
                
              </div>
            </div>
            <div className='m-2 absolute top-0 right-0 px-3 rounded-lg' style={{backgroundColor:'#000000aa'}}>{props.rating}<AiFillStar
                  style={{
                    color:'#e6e02d',
                    display:'inline',
                  }}
                /></div>
          </div>
  )
}

export default MovieCard