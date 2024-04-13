import React from 'react'

function AdminMovieCreate() {
  return (
    <div>
        <form class="max-w-md mx-auto">
        {/* year */}
            <label className='text-sm font-medium mt-5'>Movie Title</label>
            <input type="text" name="" className='mb-3 block p-2 w-full rounded text-black' id="" />
            {/* year */}
            <label className='text-sm font-medium mt-5'>Rating</label>
            <input type="text" name="" className='mb-3 block p-2 w-full rounded text-black' id="" />
            <label for="message" class="block mb-2 text-sm font-medium text-white">Movie Description</label>
            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
            {/* movie img */}
            <label class="mt-3 block mb-2 text-sm font-medium text-white " for="user_avatar">Upload file</label>
            <input class="p-2 block w-full text-sm text-black text-black border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none " aria-describedby="user_avatar_help" id="user_avatar" type="file"/>
            {/* trailor video */}
            <label class="mt-3 block mb-2 text-sm font-medium text-white " for="user_avatar">Upload file</label>
            <input class="mb-3 p-2 block w-full text-sm text-black text-black border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none " aria-describedby="user_avatar_help" id="user_avatar" type="file"/>
            {/* time last */}
            <label className='text-sm font-medium mt-5'>Time Last</label>
            <input type="text" name="" className=' mb-3 block p-2 w-full rounded text-black' id="" />
            {/* year */}
            <label className='text-sm font-medium mt-5'>Year</label>
            <input type="text" name="" className='mb-3 block p-2 w-full rounded text-black' id="" />
            {/* year */}
            <label className='text-sm font-medium mt-5'>Production</label>
            <input type="text" name="" className=' block p-2 w-full rounded text-black' id="" />
        
            <button className='mt-3 mb-5 p-2 bg-gradient-to-r from-blue-700 to-blue-500 rounded-md'>Create Category</button>
        </form>
    </div>
  )
}

export default AdminMovieCreate