import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const ProtectedRoute = () => {
    const { token, loading } = useContext(AuthContext)

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!token) return <Navigate to="/login" replace />

    return <Outlet />
};

export default ProtectedRoute;