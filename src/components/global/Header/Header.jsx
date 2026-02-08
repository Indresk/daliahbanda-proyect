import { Link, useLocation } from 'react-router-dom'

export default function Header(){
    const location = useLocation()
  
    return (
        <header className='w-[100vw] bg-black'>
            <nav>
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                <Link to="/test" className={location.pathname === '/test' ? 'active' : ''}>Test</Link>
            </nav>
        </header>
    )
}