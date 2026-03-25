import { Outlet } from "react-router";
import BreadCrumb from "../components/views/Albums/BreadCrumb";

export default function AlbumsView(){
    return(
        <div className="flex h-full">
            <BreadCrumb/>
            <Outlet/>
        </div>
    )
}