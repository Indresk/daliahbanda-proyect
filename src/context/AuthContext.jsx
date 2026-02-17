import { createContext ,useState, useEffect,useMemo } from "react";
import { createApiClient } from "../services/apiClient";

export const AuthContext = createContext();
const BackURL = import.meta.env.VITE_BACK_URL

function AuthProvider({children}){
    const [token, setToken] = useState(null);
    const [isLogged,setLogged] = useState(false)
    const [loading, setLoading] = useState(true);
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        refreshToken();
        setIsHydrated(true);
    }, []);

    async function logIn(credentials){
    setLoading(true)
    const res = await fetch(`${BackURL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(credentials),
    });

    if (!res.ok) throw new Error("Login failed");
    const data = await res.json();
    setToken(data.accessToken);
    setLogged(true)
    setLoading(false);
    }

    async function refreshToken(){
        setLoading(true)
        try {
            const res = await fetch(`${BackURL}/auth/refresh`, {
                method: "POST",
                credentials: "include",
            });

            if (!res.ok) {
                setToken(null);
                setLoading(false);
                return;
            }

            const data = await res.json();
            setLogged(true)
            setToken(data.accessToken);
        } catch {
            setToken(null);
            setLogged(false)
        } finally {
            setLoading(false);
        }
    };

    async function logOut(){
        setLoading(true)
        await fetch("/auth/logout", {
        method: "POST",
        credentials: "include",
        });
        setToken(null);
        setLogged(false)
        setLoading(false);
    };

    const apiFetch = useMemo(() => {
        return createApiClient(()=> token,refreshToken,logOut);
    }, [token]);    

    return(
        <AuthContext.Provider value={{logged:isLogged,logIn:logIn,logOut:logOut,loading:loading,apiFetch:apiFetch,isHydrated:isHydrated}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;