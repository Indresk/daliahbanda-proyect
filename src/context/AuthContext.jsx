import { createContext ,useState } from "react";

export const AuthContext = createContext();

function AuthProvider({children}){
    const [token, setToken] = useState(null)

    return(
        <AuthContext.Provider value={{token:token,setToken:setToken}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;