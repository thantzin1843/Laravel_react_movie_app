import React, { useRef } from 'react'

function AdminMovieCreate() {
  const titleRef = useRef();
  const ratingRef = useRef();
  const descriptionRef = useRef();
  const imageRef = useRef();
  const trailorRef = useRef();
  const yearRef = useRef();
  const timeRef = useRef();
  const productionRef = useRef();

  const Submit = (e) =>{
    e.preventDefault();
    const payload = {
      title:titleRef.current.value,
      rating:ratingRef.current.value,
      description:descriptionRef.current.value,
      image:imageRef.current.files[0],
      trailor:trailorRef.current.value,
      year:yearRef.current.value,
      time:timeRef.current.value,
      production:productionRef.current.value,
    }
    
  }
  return (
    <div>
        <form class="max-w-md mx-auto" onSubmit={Submit}>
        {/* year */}
            <label className='text-sm font-medium mt-5'>Movie Title</label>
            <input ref={titleRef} type="text" name="" className='mb-3 block p-2 w-full rounded text-black' id="" />
            {/* year */}
            <label className='text-sm font-medium mt-5'>Rating</label>
            <input ref={ratingRef} type="text" name="" className='mb-3 block p-2 w-full rounded text-black' id="" />
            <label for="message" class="block mb-2 text-sm font-medium text-white">Movie Description</label>
            <textarea id="message" ref={descriptionRef} rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
            {/* movie img */}
            <label class="mt-3 block mb-2 text-sm font-medium text-white " for="user_avatar">Trailor</label>
            <input ref={trailorRef} class="p-2 block w-full text-sm text-black text-black border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none " type="text"/>
            {/* trailor video */}
            <label class="mt-3 block mb-2 text-sm font-medium text-white " for="user_avatar">Upload file</label>
            <input ref={imageRef} class="mb-3 p-2 block w-full text-sm text-black text-black border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none " aria-describedby="user_avatar_help" id="user_avatar" type="file"/>
            {/* time last */}
            <label className='text-sm font-medium mt-5'>Time Last</label>
            <input ref={timeRef} type="text" name="" className=' mb-3 block p-2 w-full rounded text-black' id="" />
            {/* year */}
            <label className='text-sm font-medium mt-5'>Year</label>
            <input ref={yearRef} type="text" name="" className='mb-3 block p-2 w-full rounded text-black' id="" />
            {/* year */}
            <label className='text-sm font-medium mt-5'>Production</label>
            <input ref={productionRef} type="text" name="" className=' block p-2 w-full rounded text-black' id="" />
        
            <button className='mt-3 mb-5 p-2 bg-gradient-to-r from-blue-700 to-blue-500 rounded-md'>Create Category</button>
        </form>
    </div>
  )
}

export default AdminMovieCreate