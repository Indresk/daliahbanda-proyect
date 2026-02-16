import { createContext, useEffect, useState } from "react";

export const LiveContext = createContext();

function LiveProvider({children}){
    const [liveStatus, setLiveStatus] = useState(false)

    useEffect(()=>{
        localStorage.setItem('liveStatus',liveStatus)
    },[liveStatus])

    return(
        <LiveContext.Provider value={{liveStatus:liveStatus,setLiveStatus:setLiveStatus}}>
            {children}
        </LiveContext.Provider>
    )
}

export default LiveProvider;