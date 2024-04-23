import React from 'react'
import { Link } from 'react-router-dom'
function GreenButton({text,path}) {
  return (
    <Link to={path} className='bg-green-500 p-1 rounded-md flex items-center sm:w-1/5 w-full justify-center'>{text}</Link>
  )
}

export default GreenButton