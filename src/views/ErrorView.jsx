import { Link } from "react-router"

export default function ErrorView(){
    return(
        <>
            <h1>404 - Pagina no encontrada... <Link to={'/'} className="text-pink-500 underline">Click para volver.</Link></h1>
        </>
    )
}