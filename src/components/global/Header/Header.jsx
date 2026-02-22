import { NavLink, useLocation } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'

import LiveBanner from './LiveBanner'
import { LiveContext } from '../../../context/LiveContext.jsx'
import Button from '../../buttons/GeneralButton.jsx'
import { useBlockScroll } from '../../../hooks/useBlockScroll.js';
import './header.css'

export default function Header(){
    const {liveStatus} = useContext(LiveContext)
    const [dropdown,setDropdown] = useState(false)
    const location = useLocation();

    useBlockScroll(dropdown)


    useEffect(()=>{
        dropdown&&setDropdown(false);
    },[location])

    return (
        <header className='main-header dark:bg-black bg-white z-30'>
            {liveStatus&&<LiveBanner/>}
            <section className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative py-8'>
                <nav className='flex gap-4 justify-between items-center relative'>
                    <NavLink to="/" className="flex items-end w-10"><img className="black-icon basis-1" src="https://assets.daliahbanda.com/brand/logos/icon/logo-d-daliah-vector-v1.svg" alt="Logo de Daliah Banda" /><span className='flex flex-col text-base/3'>'aliah<small className='text-[10px] text-end'>banda</small></span></NavLink>

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
                    <div onClick={()=>setDropdown(false)} className={`header-dropdown h-[90vh] backdrop-blur-sm backdrop-brightness-50`}>
                        {/* OLD CLASSES: fixed inset-x-0 ${liveStatus?'top-[204px]':'top-[104px]'}*/}
                        <div className='bg-gray-300 dark:bg-gray-600 w-[90vw] m-auto overflow-hidden'>
                            <ul className='gap-1 flex flex-col p-4'>
                                <li><NavLink to="/albums" className={({isActive})=>isActive?"text-pink-500":''}>Discografía</NavLink></li>
                                <li><NavLink to="/latest" className={({isActive})=>isActive?"text-pink-500":''}>Últimos lanzamientos</NavLink></li>
                                <li><NavLink to="/news" className={({isActive})=>isActive?"text-pink-500":''}>Noticias</NavLink></li>
                                <li><NavLink to="/shop" className={({isActive})=>isActive?"text-pink-500":''}>Tienda</NavLink></li>
                            </ul>
                        </div>
                    </div>}
                </nav>
            </section>
        </header>
        
    )
}