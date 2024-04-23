import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axiosClient from '../../../axiosClient';
import { notifyProcess } from '../../Components/alert';
import { ToastContainer } from 'react-toastify';
import Pagination from '../../Components/Pagination';
import GreenButton from '../../Components/GreenButton';
function ActorList() {
    ////for pagination ////////////////
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    /////////////
    const [actors,setActors] = useState([]);
    const fetchData = () =>{
        axiosClient.get(`/actor/list?page=${currentPage}`)
        .then((res)=>{
            setActors(res.data.actors.data);
            setTotalPages(res.data.actors.last_page);
        })
        .catch((e)=>console.log(e))
    }
    //////////
    const handlePageChange = (page) => {
        setCurrentPage(page);
      };
    //////////////
    useEffect(()=>{
        fetchData();
    },[currentPage])

    const Delete = (id) =>{
        const remainActors = actors.filter((a)=>{
            return a.id !== id;
        })
        setActors(remainActors);
        axiosClient.get('/actor/delete/'+id)
        .then((res)=>notifyProcess(res.data.message))
        .catch((e)=>console.log(e));
        fetchData();
        
    }

  return (
    <div class="relative overflow-x-auto m-3">
        <ToastContainer/>
    <GreenButton text='Create New Actor' path='/admin/actor/create'/>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 mt-5 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-400 text-white ">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Image
                </th>
                <th scope="col" class="px-6 py-3">
                   Name
                </th>
                <th scope="col" class="px-6 py-3">
                   DOB
                </th>
                <th scope="col" class="px-6 py-3">
                    Operation
                </th>

            </tr>
        </thead>
        <tbody>
           {
            actors.map((a)=>{
               return <tr key={a.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img src={'http://127.0.0.1:8000/storage/'+a.image} className='rounded-md' style={{width:'100px',height:'100px'}} alt="" />
                </th>
                <td class="px-6 py-4">
                    {a.name}
                </td>
                <td class="px-6 py-4">
                    {a.dob}
                </td>
                <td class="px-6 py-4">
                <button className='py-1 px-2 bg-gray-700 rounded me-3 text-white hover:bg-gray-500'>Edit</button>
                <button onClick={()=>Delete(a.id)} className='py-1 px-2 bg-red-500 rounded me-3 text-white hover:bg-red-600'>Delete</button>
                </td>
            </tr>
                })
           }

        </tbody>
    </table>

   {/* pagianation control */}
        <Pagination handlePageChange={handlePageChange} currentPage={currentPage} 
        totalPages={totalPages} setCurrentPage={setCurrentPage}/>
</div>
  )
}

export default ActorList