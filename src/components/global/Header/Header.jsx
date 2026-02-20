import { NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'

import LiveBanner from './LiveBanner'
import { LiveContext } from '../../../context/LiveContext.jsx'
import DaliahIconVector from '../../../assets/DaliahIconVector.jsx'
import Button from '../../buttons/GeneralButton.jsx'

export default function Header(){
    const {liveStatus} = useContext(LiveContext)
    const [dropdown,setDropdown] = useState(false)
  
    return (
        <header className='bg-black'>
            {liveStatus&&<LiveBanner/>}
            <section className='p-4'>
                <nav className='flex gap-4 justify-between items-center relative '>
                    <NavLink to="/" className="flex items-end"><DaliahIconVector className="w-10 h-10" color={'#fff'}/><span className='flex flex-col text-base/3'>'aliah<small className='text-[10px] text-end'>banda</small></span></NavLink>
                    {/* SMALL */}
                    
                    {/* LARGE */}
                    <ul className='gap-4 hidden md:flex items-center'>
                        <li><NavLink to="/albums" className={({isActive})=>isActive?"text-pink-500":"text-white"}>Discografía</NavLink></li>
                        <li><NavLink to="/latest" className={({isActive})=>isActive?"text-pink-500":"text-white"}>Últimos lanzamientos</NavLink></li>
                        <li><NavLink to="/news" className={({isActive})=>isActive?"text-pink-500":"text-white"}>Noticias</NavLink></li>
                        <li><NavLink to="/shop" className={({isActive})=>isActive?"text-pink-500":"text-white"}>Tienda</NavLink></li>
                    </ul>
                    <div className='flex gap-4 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>setDropdown(prev=>!prev)} className={`cursor-pointer md:hidden ${dropdown&&"rotate-180"}`} width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 11l8 3l8 -3" /></svg>
                        <NavLink to="/login"><Button>Nuestra comunidad</Button></NavLink>
                    </div>
                    {dropdown&&
                    <div className='absolute inset-x-0 top-16 bg-gray-300'>
                        <ul className='gap-1 flex flex-col p-4'>
                            <li><NavLink to="/albums" className={({isActive})=>isActive?"text-pink-500":"text-black"}>Discografía</NavLink></li>
                            <li><NavLink to="/latest" className={({isActive})=>isActive?"text-pink-500":"text-black"}>Últimos lanzamientos</NavLink></li>
                            <li><NavLink to="/news" className={({isActive})=>isActive?"text-pink-500":"text-black"}>Noticias</NavLink></li>
                            <li><NavLink to="/shop" className={({isActive})=>isActive?"text-pink-500":"text-black"}>Tienda</NavLink></li>
                        </ul>
                    </div>}
                </nav>
            </section>
            <hr className='mx-8 '/>
        </header>
    )
}