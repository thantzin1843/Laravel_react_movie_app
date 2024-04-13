import React from 'react'
import Datepicker from 'flowbite-datepicker/Datepicker';

function ActorCreate() {
  return (
    <form action="" class="max-w-sm mx-auto border p-5 rounded-xl" style={{backgroundColor:'#ffffff33'}}>
      <div class="w-full px-3 mt-5">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
        Actor Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
    <div class="w-full px-3 mt-5">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
       Nationality
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
    <div class="w-full px-3 mt-5">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
       Date of birth
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="date" placeholder="Doe"/>
    </div>

    <button type="submit" className=' mt-5 p-2 ms-3 bg-gradient-to-r from-blue-700 to-blue-500 rounded-md'>Create Actor</button>

    </form>
  )
}

export default ActorCreate