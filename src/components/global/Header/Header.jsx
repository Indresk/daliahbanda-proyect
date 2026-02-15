import { Link, useLocation } from 'react-router-dom'
import { useEffect,useContext } from 'react'

import LiveBanner from './LiveBanner'
import { LiveContext } from '../../../context/LiveContext.jsx'
import {getLiveStatus} from '../../../../api/webhooks/kick/getSubscription.js'

export default function Header(){
    const {liveStatus,setLiveStatus} = useContext(LiveContext)

    const location = useLocation()

    useEffect(()=>{ 
        setLiveStatus(getLiveStatus())
    },[location.pathname])    

  
    return (
        <header className='bg-black'>
            {liveStatus&&<LiveBanner/>}
            <nav>
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                <Link to="/test" className={location.pathname === '/test' ? 'active' : ''}>Test</Link>
            </nav>
        </header>
    )
}