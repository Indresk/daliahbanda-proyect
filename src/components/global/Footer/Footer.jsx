import { NavLink } from "react-router";

export default function Footer(){
    return(
        <footer className="dark:bg-black bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                
                <div className="flex flex-col items-start justify-between gap-y-12 pt-16 pb-6 lg:flex-row lg:items-center lg:py-16">
                    <NavLink to="/" className='w-15'><img className="black-icon" src="https://assets.daliahbanda.com/brand/logos/icon/logo-d-daliah-vector-v1.svg" alt="Logo de Daliah Banda" /></NavLink>
                    <div>Footer info</div>
                </div>
                <div className="flex flex-col items-center border-t border-gray-200 pt-8 pb-12 md:flex-row-reverse md:justify-between md:pt-6">
                    <div>
                        <h2>Contacto y redes oficiales</h2>
                    </div>
                    <ul className="text-sm">
                        <li>Correo: <a href="mailto:daliahbanda@gmail.com">daliahbanda@gmail.com</a></li>
                        <li>Instagram: @daliah_banda</li>
                        <li>Facebook: Daliah Banda</li>
                    </ul>
                </div>
            </div>
            
        </footer>
    )
}