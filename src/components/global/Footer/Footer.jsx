import { NavLink } from "react-router";
import DaliahIconVector from "../../../assets/DaliahIconVector";

export default function Footer(){
    return(
        <footer className="bg-black">
            <hr className='mx-8 '/>
            <div className="p-4 flex justify-between">
                <NavLink to="/" className="flex items-end"><DaliahIconVector className="w-20 h-20" color={'#fff'}/><span className='flex flex-col text-base/3'>'aliah<small className='text-[10px] text-end'>banda</small></span></NavLink>
                <aside className="flex items-center gap-4">
                    <div>
                        <h2>Contacto y redes oficiales</h2>
                    </div>
                    <ul className="text-sm">
                        <li>Correo: <a href="mailto:daliahbanda@gmail.com">daliahbanda@gmail.com</a></li>
                        <li>Instagram: @daliah_banda</li>
                        <li>Facebook: Daliah Banda</li>
                    </ul>
                </aside>
            </div>
            
        </footer>
    )
}