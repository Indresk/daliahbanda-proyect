import { createContext, useEffect, useState } from "react";
import { getGeneralData } from "../services/firebase";

export const LiveContext = createContext();

function LiveProvider({children}){
    const [liveStatus, setLiveStatus] = useState(false)

    useEffect(()=>{
        async function fetchStatus(){
            setLiveStatus(await getGeneralData("live-public","status"))
            // setLiveStatus(true)
        }
        fetchStatus();
    },[])

    return(
        <LiveContext.Provider value={{liveStatus:liveStatus,setLiveStatus:setLiveStatus}}>
            {children}
        </LiveContext.Provider>
    )
}

export default LiveProvider;