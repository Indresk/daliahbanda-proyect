import { NavLink, useLocation } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'

import LiveBanner from './LiveBanner'
import { LiveContext } from '../../../context/LiveContext.jsx'
import DaliahIconVector from '../../../assets/DaliahIconVector.jsx'
import Button from '../../buttons/GeneralButton.jsx'
import { useOverlay } from '../../../hooks/BlurOverlay/useMainBlur.js';

export default function Header(){
    const {liveStatus} = useContext(LiveContext)
    const [dropdown,setDropdown] = useState(false)
    const location = useLocation();
    useOverlay(dropdown)

    useEffect(()=>{
        // async function closeTimer() {
        //     await new Promise((resolve)=>{setTimeout(()=>resolve(setDropdown(false)),500)})
        // }
        dropdown&&setDropdown(false);
    },[location])

    return (
        <header className='dark:bg-black bg-white z-30'>
            {liveStatus&&<LiveBanner/>}
            <section className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-50 py-8'>
                <nav className='flex gap-4 justify-between items-center relative '>
                    <NavLink to="/" className="flex items-end"><DaliahIconVector className="w-10 h-10" color='currentcolor'/><span className='flex flex-col text-base/3'>'aliah<small className='text-[10px] text-end'>banda</small></span></NavLink>

                    {/* LARGE */}
                    <ul className='gap-4 hidden md:flex items-center'>
                        <li><NavLink to="/albums" className={({isActive})=>isActive?"text-pink-500":''}>Discografía</NavLink></li>
                        <li><NavLink to="/latest" className={({isActive})=>isActive?"text-pink-500":''}>Últimos lanzamientos</NavLink></li>
                        <li><NavLink to="/news" className={({isActive})=>isActive?"text-pink-500":''}>Noticias</NavLink></li>
                        <li><NavLink to="/shop" className={({isActive})=>isActive?"text-pink-500":''}>Tienda</NavLink></li>
                    </ul>
                    <div className='flex gap-4 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>setDropdown(prev=>!prev)} className={`cursor-pointer md:hidden transition duration-300 ease-in-out ${dropdown&&"rotate-180"}`} width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 11l8 3l8 -3" /></svg>
                        <NavLink to="/login"><Button>Nuestra comunidad</Button></NavLink>
                    </div>

                    {/* SMALL */}
                    {dropdown&&
                    <div className='absolute inset-x-0 top-16 bg-gray-500 overflow-hidden'>
                        <ul className='gap-1 flex flex-col p-4'>
                            <li><NavLink to="/albums" className={({isActive})=>isActive?"text-pink-500":''}>Discografía</NavLink></li>
                            <li><NavLink to="/latest" className={({isActive})=>isActive?"text-pink-500":''}>Últimos lanzamientos</NavLink></li>
                            <li><NavLink to="/news" className={({isActive})=>isActive?"text-pink-500":''}>Noticias</NavLink></li>
                            <li><NavLink to="/shop" className={({isActive})=>isActive?"text-pink-500":''}>Tienda</NavLink></li>
                        </ul>
                    </div>}
                </nav>
            </section>
        </header>
    )
}