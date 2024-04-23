import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import MovieCard from '../Components/MovieCard';

function MovieList() {
  return (
    <div className="right w-full p-5 text-center">
    <div className='w-full'>
      <input type="text" name="" className='p-2 border-none outline-none bg-gray-600 md:w-1/3 sm:w-full'/>
      <button className='bg-red-600 p-2'><AiOutlineSearch className="inline text-lg"/>Search</button>
    </div>

    <div className='w-full mt-10 flex justify-center'>

        <div className="flex md:w-7/8 w-full justify-center  flex-wrap ">
        
        <MovieCard title='spider man' year='2003' rating='5' img='https://i.pinimg.com/originals/d4/ac/c8/d4acc863d31ab88d4a508976c22162de.jpg'/>
          
        </div>
    </div>
  </div>
  )
}

export default MovieList