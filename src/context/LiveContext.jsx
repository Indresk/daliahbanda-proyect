import { createContext, useState } from "react";
import {getLiveStatus} from '../../api/webhooks/kick/getSubscription.js'

export const LiveContext = createContext();

function LiveProvider({children}){
    const [liveStatus, setLiveStatus] = useState(getLiveStatus())

    return(
        <LiveContext.Provider value={{liveStatus:liveStatus,setLiveStatus:setLiveStatus}}>
            {children}
        </LiveContext.Provider>
    )
}

export default LiveProvider;