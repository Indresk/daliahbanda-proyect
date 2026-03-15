import { Link } from "react-router"

export default function ErrorView(){
    return(
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1>404 - Pagina no encontrada... <Link to={'/'} className="text-pink-500 underline">Click para volver.</Link></h1>
        </div>
    )
}