import { NavLink, useLocation } from 'react-router-dom'
import { useEffect,useContext } from 'react'

import LiveBanner from './LiveBanner'
import { LiveContext } from '../../../context/LiveContext.jsx'
import {getLiveStatus} from '../../../../api/webhooks/kick/getSubscription.js'

export default function Header(){
    const {liveStatus,setLiveStatus} = useContext(LiveContext)

    const location = useLocation()

    useEffect(() => {
        const fetchStatus = async () => {
            const tStatus = await getLiveStatus();
            setLiveStatus(tStatus); 
        };
        fetchStatus();
    }, [location.pathname]); 
  
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