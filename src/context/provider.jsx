import AuthProvider from "./AuthContext";
import LiveProvider from "./LiveContext";
export default function Provider({children}){
    return(
        <AuthProvider>
            <LiveProvider>
                {children}
            </LiveProvider>
        </AuthProvider>
    )
}