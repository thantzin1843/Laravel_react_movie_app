import React from 'react'

function ActorCard({name,image}) {
  return (
    <div className="actor-card lg:w-1/5 md:w-1/3 sm:w-full m-5"> 
        <div className="upper rounded-3xl overflow-hidden" style={{height:'270px'}}><img className='w-full hover:scale-150' style={{height:'100%',transition:'ease 0.5s'}} src={`http://localhost:8000/storage/`+image} alt="" /></div>
        <div className="lower text-left">
        <div className='text-md mt-5 bg-gradient-to-b from-red-500 to-dark p-2 text-center rounded-lg'>{name}</div>
        </div>
    </div>
  )
}

export default ActorCard