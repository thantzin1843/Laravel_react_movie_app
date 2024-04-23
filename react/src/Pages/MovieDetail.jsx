
import React from 'react'
import { useParams } from 'react-router-dom'
import { AiFillStar } from "react-icons/ai";

function MovieDetail() {
    const param = useParams();
    // console.log(id);
  return (
    <div className=' w-full min-h-lvh'>
        <div className='w-full md:w-1/2 p-10 md:p-20'>
            <div className='text-5xl font-bold'>
                Spider Man
            </div>
            <div className='text-5xl font-bold my-3'>No Way Home</div>
            <div className='flex'>
                <div className='me-3 bg-yellow-400 text-black w-1/5 text-center rounded-md'>IMDB</div>
                <div className='me-3'>|&nbsp;2007</div>
                <div className='me-3 flex justify-center items-center'>|&nbsp;Rating:5&nbsp;<AiFillStar color='yellow'/></div>
            </div>
            <p className='my-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                praesentium beatae temporibus, sequi nemo quaerat voluptatum
                 iure eveniet nisi velit aperiam. Eveniet !</p>
            <div>
                <button className='py-3 px-10 border text-red-600 border-red-600 me-2 rounded-md trailor ' >Watch Trailor</button>
                <button className='py-3 px-10 bg-red-600 me-2 rounded-md hover:bg-red-700 '>Save to WatchList</button>
            </div>
        </div>

        <div>

        </div>
    </div>
  )
}

export default MovieDetail