import { Link, useLocation } from 'react-router-dom'

import LiveBanner from '../LiveBanner/LiveBanner'
import {getSubscription} from '../../../../api/webhooks/kick/getSubscription.js'
import { useEffect,useState } from 'react'

export default function Header(){
    const location = useLocation()

    const [verification,setVerification] = useState(false)

    useEffect(()=>{ 
        setVerification(getSubscription())
    },[location.pathname])    

  
    return (
        <header className='bg-black'>
            {verification&&<LiveBanner/>}
            <nav>
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                <Link to="/test" className={location.pathname === '/test' ? 'active' : ''}>Test</Link>
            </nav>
        </header>
    )
}