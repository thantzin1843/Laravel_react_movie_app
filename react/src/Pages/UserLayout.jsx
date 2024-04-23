import React from 'react'
import { Outlet} from 'react-router-dom';
import Menu from '../Components/Menu';
function UserLayout() {
  return (
    <div>
        <Menu/>
        <div className='flex flex-col items-center justify-center relative'>
        <Outlet/>
        </div>
    </div>
  )
}

export default UserLayout