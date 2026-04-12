import { useParams } from "react-router"

export default function FilterView(){
    const {filtername}=useParams()
    return(
        <><p>filterview {filtername}</p></>
    )    
}