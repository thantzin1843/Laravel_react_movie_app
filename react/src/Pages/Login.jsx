import React from 'react'
import { Link } from 'react-router-dom'
import logo from './../assets/logo1.png'
function Login() {
  return (
    <div className='w-full min-h-lvh flex justify-center items-center heroContainer'>
      <form action="" className='sm:w-1/3 w-4/5 pt-[10px] pb-5 px-[50px] rounded-lg' style={{backgroundColor:'#000000aa'}}>
      <div className='w-full flex justify-center'>
      <img src={logo} alt="" className='w-1/2 '/>
      </div>
      <div class="mb-5">
            <label for="base-input" class="block mb-2 text-sm font-medium text-white">Email</label>
            <input type="text" id="base-input" class="h-[50px] rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div class="mb-5">
            <label for="base-input" class="block mb-2 text-sm font-medium text-white">Password</label>
            <input type="password" id="base-input" class="h-[50px] rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div className="w-full text-center mt-[35px]">
        <button type='submit' className='w-1/2 m-auto p-2 bg-gradient-to-r from-blue-700 to-blue-500 rounded-md'>Login</button>
        </div>
        <div className='text-center mt-5'>Create an account ? <Link to='/signup' className='text-blue-500'>Signup</Link></div>
      </form>
    </div>
  )
}

export default Login