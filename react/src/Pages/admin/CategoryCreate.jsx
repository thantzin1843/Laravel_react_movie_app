import React, { useRef } from 'react'
import axiosClient from '../../../axiosClient';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CategoryCreate() {

  const notify = (m) => toast.success(m);
  let nameRef = useRef();
  const createCategory = (e) =>{
    e.preventDefault();
    const payload={
      'name':nameRef.current.value,
    }
    axiosClient.post('/create/category',payload)
    .then((res)=>{
      nameRef.current.value = '';
      notify(res.data.message);

      // notify(res.data)
    })
    .catch((e)=>{
      console.log(e);
    })
  }
  return (
    <div>
      <ToastContainer />
      <form onSubmit={createCategory} class="max-w-sm mx-auto border p-5 rounded-xl" style={{backgroundColor:'#ffffff33'}}>
        <div class="mb-5">
            <label for="base-input" class="block mb-2 text-sm font-medium text-white">Category Name</label>
            <input ref={nameRef} type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter category name'/>
        </div>
        <button type='submit' className='p-2 bg-gradient-to-r from-blue-700 to-blue-500 rounded-md'>Create Category</button>
    </form>
    </div>

  )
}

export default CategoryCreate