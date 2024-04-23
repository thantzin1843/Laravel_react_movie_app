import React, { useEffect, useState } from 'react'
import axiosClient from '../../axiosClient';
import { AiOutlineSearch } from "react-icons/ai";
import ActorCard from '../Components/ActorCard';

function ActorList() {
  const [actors,setActors] = useState([]);
  const [ractors,setrActors] = useState([]);
  useEffect(()=>{
    axiosClient.get('/actor/list/user')
    .then((res)=>{
      setActors(res.data.actors)
      setrActors(res.data.actors)
    })
    .catch((e)=>{
      console.log(e)
    })
  },[])
  //search
  const Search = (text) =>{
    if(!(text.toLocaleLowerCase()=='')){
      const filterActors = actors.filter((a)=>{
        return a.name.toLocaleLowerCase().includes(text.toLocaleLowerCase());
    })
    setrActors(filterActors);
    }else{
      setrActors(actors);
    }
    
    }
  
  return (
    <div className="right w-full p-5 text-center">
    <div className='w-full'>
      <input onChange={(e)=>Search(e.target.value)} type="text" name=""   className='p-2 border-none outline-none bg-gray-600 md:w-1/3 sm:w-full'/>
      <button className='bg-red-600 p-2'><AiOutlineSearch className="inline text-lg"/>Search</button>
    </div>

    <div className='w-full mt-10'>

        <div className="flex w-full justify-center flex-wrap">
            {
              ractors.map((a)=>(
                 <ActorCard name={a.name} image={a.image}/>
              ))
            }
        </div>
    </div>
  </div>
  )
}

export default ActorList