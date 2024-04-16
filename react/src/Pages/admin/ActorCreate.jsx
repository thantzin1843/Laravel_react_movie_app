import React, { useRef } from 'react'
import axiosClient from '../../../axiosClient';
import { notifyProcess } from '../../Components/alert';
import { ToastContainer } from 'react-toastify';

function ActorCreate() {
  const nameRef = useRef();
  const imageRef = useRef();
  const nationRef = useRef();
  const dobRef = useRef();

  const Submit = (e)=>{
    e.preventDefault();
    const payload = {
      'name':nameRef.current.value,
      'image':imageRef.current.files[0],
      'nation':nationRef.current.value,
      'dob':dobRef.current.value,
    }
    axiosClient.post('/create/actor',payload,{
      headers:{'Content-Type':'multipart/form-data'}
    })
    .then((res)=>{
      notifyProcess(res.data.message);
      nameRef.current.value = '';
      imageRef.current.files[0] =null;
      nationRef.current.value = '';
      dobRef.current.value = null;
    }).catch((e)=>{
      console.log(e)
    })
  }

  return (
    <div>
      <ToastContainer/>
      <form onSubmit={Submit} action="" class="max-w-sm mx-auto border p-5 rounded-xl" style={{backgroundColor:'#ffffff33'}}>
      
      <div class="w-full px-3 mt-5">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
        Actor Image
      </label>
      <input ref={imageRef} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="file" placeholder="Doe"/>
    </div>
      <div class="w-full px-3 mt-5">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
        Actor Name
      </label>
      <input ref={nameRef} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
    <div class="w-full px-3 mt-5">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
       Nationality
      </label>
      <input ref={nationRef} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
    <div class="w-full px-3 mt-5">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
       Date of birth
      </label>
      <input ref={dobRef} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="date" placeholder="Doe"/>
    </div>

    <button type="submit" className=' mt-5 p-2 ms-3 bg-gradient-to-r from-blue-700 to-blue-500 rounded-md'>Create Actor</button>

    </form>
    </div>
  )
}

export default ActorCreate