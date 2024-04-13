import React from 'react'
import { Link } from 'react-router-dom'
function ActorList() {
  return (
    <div class="relative overflow-x-auto m-5">
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
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcS0BoHXyTC6fiXdFd39tpPeIOMlurZorAPiD6QJwS2yZVzFQGKQq_padu4AaV6Rug9qf35tExpQkObaYLY" className='rounded-md' style={{width:'100px',height:'100px'}} alt="" />
                </th>
                <td class="px-6 py-4">
                    Comedy
                </td>
                <td class="px-6 py-4">
                    18-4-2003
                </td>
                <td class="px-6 py-4">
                <button className='py-1 px-2 bg-gray-700 rounded me-3 text-white hover:bg-gray-500'>Edit</button>
                <button className='py-1 px-2 bg-red-500 rounded me-3 text-white hover:bg-red-600'>Delete</button>
                </td>
            </tr>
            
        </tbody>
    </table>
</div>
  )
}

export default ActorList