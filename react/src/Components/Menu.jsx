import React from 'react'
import {Link,useLocation} from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
function Menu() {
const [nav,setNav] = useState("flex flex-col text-center justify-center left w-1/5  nav");
const [open,setOpen] = useState(false);
const showMenu = () =>{
  if(!open){
      setOpen(true);
      setNav(" text-center z-10 left w-full navbar");
  }else{
    setOpen(false);
     setNav(" text-center z-10 left w-full nav") ;
  }
}
const {pathname} = useLocation();
  return (
          <div className='sticky top-0 z-20  w-full'>
            <div className={nav} style={{minHeight:'100vh',backgroundColor:'#000000cc'}}>
            <div className='mt-10 sticky top-10 text-lg'>
            <div className={pathname=='/user/movie/list'?'mt-5 active' : 'mt-5'}><Link onClick={showMenu} to='/user/movie/list' className='hover:text-white'>Movies</Link></div>
            <div className={pathname=='/user/actor/list'?'mt-5 active' : 'mt-5'}><Link onClick={showMenu} to='/user/actor/list' className='hover:text-white'>Actors</Link></div>
            <div className='mt-5'><Link className='hover:text-white'>Production</Link></div>
            {/* <div className='mt-5'><Link>Profile</Link></div> */}
            <div className='mt-5'><button onClick={showMenu} className='bg-red-800 text-white  text-sm py-1 px-5'>Close</button></div>
            </div>
            </div>
            <div className={open ? 'hide' : 'block  w-full sticky top-5 mt-5 pl-5'}><button onClick={showMenu}><AiOutlineMenu className='text-2xl'/></button></div>
        </div> 
  )
}

export default Menu