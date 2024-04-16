import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import axiosClient from '../../../axiosClient';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CategoryList() {
    const [categories, setCategories] = useState([]);
///////////////////////////
    const [edit,setEdit] = useState(0); // to check edit button click or not
    const [updateName,setUpdateName] = useState('');
    const UpdateUIChange =(id,name)=>{
        setUpdateName(name);
        setEdit(id);
    }
    const Update = (id) =>{
        const payload = {
            'name':updateName,
        }
        axiosClient.post('/category/update/'+id,payload)
        .then((res)=>{
            notify(res.data.message);
            getCategories();
            setEdit(0);
        })
        .catch((e)=>{
            console.log(e);
        })

    }
    ////////////////////
    const notify = (m) => toast.success(m);
    //fetch data 
    const getCategories = () =>{
        axiosClient.get('/category/list')
        .then((res)=>{
            setCategories(res.data.category);
        })
        .catch((e)=>{
            console.log(e);
        })
    }
    useEffect(()=>{
        getCategories();
    },[])
    const Delete = (id)=>{
      let remainCate =   categories.filter((c)=>{
            return c.id != id;
        })
    setCategories(remainCate);
    axiosClient.get('/category/delete/'+id)
    .then((res)=>{
        notify(res.data.message);
    })
    .catch((e)=>{
        console.log(e);
    })
    }
  return (
    <div class="relative overflow-x-auto m-5">
        <ToastContainer/>
    <Link to='/admin/category/create' className='bg-green-500 p-1 rounded-md flex items-center sm:w-1/5 w-full justify-center'>Create New Category</Link>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 mt-5 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-400 text-white ">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Id
                </th>
                <th scope="col" class="px-6 py-3">
                   Category Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Operation
                </th>

            </tr>
        </thead>
        <tbody>
            {
                categories.map((c)=>(
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {c.id}
                    </th>
                    {edit==c.id ? <td class="px-6 py-4">
                        <input type="text" className='p-2 border-2 bg-gray-400 text-white' value={updateName} onChange={(e)=>setUpdateName(e.target.value)}/>
                    </td> : <td class="px-6 py-4">
                        {c.name}
                    </td>}
                    <td class="px-6 py-4">
                    {
                        edit !== c.id ? <button onClick={()=>UpdateUIChange(c.id,c.name)} className='py-1 px-2 bg-gray-700 rounded me-3 text-white hover:bg-gray-500'>Edit</button> 
                        :<button onClick={()=>Update(c.id)} className='py-1 px-2 bg-gray-700 rounded me-3 text-white hover:bg-gray-500'>Update</button>
                    }
                    <button onClick={()=>Delete(c.id)} className='py-1 px-2 bg-red-500 rounded me-3 text-white hover:bg-red-600'>Delete</button>
                    </td>
            </tr>
))
            }
            
        </tbody>
    </table>
</div>
  )
}

export default CategoryList