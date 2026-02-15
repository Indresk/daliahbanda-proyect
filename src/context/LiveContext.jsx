import { createContext, useState } from "react";

export const LiveContext = createContext();

function LiveProvider({children}){
    const [liveStatus, setLiveStatus] = useState(false)

    return(
        <LiveContext.Provider value={{liveStatus:liveStatus,setLiveStatus:setLiveStatus}}>
            {children}
        </LiveContext.Provider>
    )
}

export default LiveProvider;