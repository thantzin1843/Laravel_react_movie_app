import React from 'react'

function CategoryCreate() {
  return (
    <form class="max-w-sm mx-auto border p-5 rounded-xl" style={{backgroundColor:'#ffffff33'}}>
        <div class="mb-5">
            <label for="base-input" class="block mb-2 text-sm font-medium text-white">Category Name</label>
            <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter category name'/>
        </div>
        <button className='p-2 bg-gradient-to-r from-blue-700 to-blue-500 rounded-md'>Create Category</button>
    </form>

  )
}

export default CategoryCreate