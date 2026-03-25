import { Link } from "react-router";
import Button from "../../buttons/GeneralButton";

export default function AlbumsIndex(){
    return(
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1>Albums Daliah Banda</h1>
            
            <Link to="/albums/prueba"><Button>Prueba de BreadCrumb</Button></Link>
            <Link to="/albums/test"><Button>Prueba 2 de BreadCrumb</Button></Link>
        </div>
    )
}