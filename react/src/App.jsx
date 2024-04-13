
import { useContext, useState } from 'react'
import './App.css'
import { UserContext } from './Context/UserContextProvider'
import {Link, Outlet, useLocation} from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";
function App() {
const {user} = useContext(UserContext);
const [open,setOpen] = useState(false);
const [nav,setNav] = useState("flex flex-col text-center justify-center left w-1/5  nav");

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
    <div className='flex flex-col items-center justify-center relative'>
      <div className='sticky top-0 z-20 bg-violet-800 w-full'>
      <div className={nav} style={{minHeight:'100vh',backgroundColor:'#000000cc'}}>
        <div className='mt-10 sticky top-10 text-xl'>
        <div className={pathname=='/movie/list'?'mt-5 active' : 'mt-5'}><Link onClick={showMenu} to='/movie/list' className='hover:text-white'>Movies</Link></div>
        <div className={pathname=='/actor/list'?'mt-5 active' : 'mt-5'}><Link onClick={showMenu} to='/actor/list' className='hover:text-white'>Actors</Link></div>
        <div className='mt-5'><Link className='hover:text-white'>Production</Link></div>
        {/* <div className='mt-5'><Link>Profile</Link></div> */}
        <div className='mt-5'><button onClick={showMenu} className='bg-white text-black py-1 px-5 rounded-xl'>Close</button></div>
        </div>
      </div>
      </div>
      <div className={open ? 'hide' : 'block  w-full sticky top-5 pl-5'}><button onClick={showMenu}><AiOutlineMenu className='text-2xl'/></button></div>
      
     <Outlet/>
    </div>
  )
}

export default App
