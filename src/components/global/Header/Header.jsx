import { Link, useLocation } from 'react-router-dom'

import LiveBanner from '../LiveBanner/LiveBanner'

export default function Header(){
    const location = useLocation()
    let verification = false

  
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