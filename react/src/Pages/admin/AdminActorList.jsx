import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axiosClient from '../../../axiosClient';
import { notifyProcess } from '../../Components/alert';
import { ToastContainer } from 'react-toastify';
function ActorList() {
    ////for pagination ////////////////
    // const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    /////////////
    const [actors,setActors] = useState([]);
    const fetchData = () =>{
        axiosClient.get(`/actor/list?page=${currentPage}`)
        .then((res)=>{
            // setActors(res.data.actors.data[0].name);
            // console.log(res.data.actors.last_page);
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

    const generateButton =()=>{
        const jsxElements = [];
        for (let i = 1; i <= totalPages; i++) {
        jsxElements.push(<button onClick={()=>setCurrentPage(i)} className='p-2 bg-white text-blue-600 mt-3 ms-1 rounded-md '>{i}</button>);
        }
        return jsxElements;
    }
  return (
    <div class="relative overflow-x-auto m-5">
        <ToastContainer/>
    <Link to='/admin/actor/create' className='bg-green-500 p-1 rounded-md flex items-center sm:w-1/5 w-full justify-center'>Create New Actor</Link>
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
           {/* <tr><td>{actors[0].name}</td></tr> */}
        </tbody>
    </table>

   {/* pagianation control */}
           <button onClick={()=>handlePageChange(currentPage-1)} disabled={currentPage===1} className='p-2 bg-white text-blue-600 mt-3 rounded-md '>Previous</button>
           
            {
            generateButton()
            }
            
           <button onClick={()=>handlePageChange(currentPage+1)} disabled={currentPage===totalPages} className='p-2 bg-white text-blue-600 mt-3 ms-1 rounded-md '>Next</button>
</div>
  )
}

export default ActorList