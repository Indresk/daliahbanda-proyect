import { NavLink } from 'react-router-dom'
import { useContext } from 'react'

import LiveBanner from './LiveBanner'
import { LiveContext } from '../../../context/LiveContext.jsx'

export default function Header(){
    const {liveStatus} = useContext(LiveContext)
  
    return (
        <header className='bg-black'>
            {liveStatus&&<LiveBanner/>}
            <section className='p-4'>
                <nav className='flex gap-4'>
                    <NavLink to="/" className={({isActive})=>isActive?"text-pink-500":"text-white"}>Home</NavLink>
                    <NavLink to="/albums" className={({isActive})=>isActive?"text-pink-500":"text-white"}>Albums</NavLink>
                </nav>
            </section>
        </header>
    )
}