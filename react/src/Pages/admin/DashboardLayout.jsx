import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { Link, Outlet, useLocation } from 'react-router-dom';
function DashboardLayout() {
    const {pathname} = useLocation();
    const [open,setOpen] = useState(false);
    const [nav,setNav] = useState("leftAdmin w-0 overflow-hidden sticky top-0")
    const showMenu = () =>{
        if(!open){
            setOpen(true);
            setNav('leftAdmin w-full sm:w-1/5 sticky top-0');
        }else{
            setOpen(false);
            setNav("leftAdmin w-0 overflow-hidden sticky top-0");
        }
    }
  return (
    <div className='flex flex-wrap'>
        <div className={nav} style={{backgroundColor:'#00000077',height:'100vh',textAlign:'center'}}>
            <div className="logo pt-5">
                Logo
            </div>
            <div className='mt-10'>
                <div className={pathname == '/admin/category/list' ? 'mt-7 active' :'mt-7'}><Link to='/admin/category/list' className='adminLinks'>Category</Link></div>
                <div className={pathname == '/admin/actor/list' ? 'mt-7 active' :'mt-7'}><Link to='/admin/actor/list' className='adminLinks'>Actors</Link></div>
                <div className={pathname == '/admin/movie/list' ? 'mt-7 active' :'mt-7'}><Link to='/admin/movie/list' className='adminLinks'>Movies</Link></div>
            </div>
        </div>
        <div className={open ? 'right w-4/5' : 'right w-full'}>
        <AiOutlineMenu onClick={showMenu} className='m-3 text-2xl'/>

        <Outlet/>
        </div>
    </div>
  )
}

export default DashboardLayout