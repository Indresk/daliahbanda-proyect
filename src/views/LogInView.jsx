import { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function LogInView() {
    const { logIn, token, loading } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [submitting, setSubmitting] = useState(false);

    if (!loading && token) {
        const redirectTo = location.state?.from?.pathname || "/test";
        navigate(redirectTo, { replace: true });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError(null);
        setSubmitting(true);

        try {
            await logIn({ email, password });

            const redirectTo = location.state?.from?.pathname || "/test";
            navigate(redirectTo, { replace: true });

        } catch (err) {
            setError("Credenciales inválidas o demasiados intentos.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="h-full flex justify-center items-center bg-gray-700">
            <form onSubmit={handleSubmit} className="flex flex-col p-8 bg-gray-900 rounded w-[320px] gap-4 text-white">
            <h2>Iniciar sesión</h2>

            {error && <p className="text-red-800 font-bold text-sm">{error}</p>}

            <label className="text-sm" htmlFor="email">Email</label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="p-2 rounded border-none bg-gray-700" />

            <label className="text-sm" htmlFor="password">Contraseña</label>
            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="p-2 rounded border-none bg-gray-700"/>

            <button
                type="submit"
                disabled={submitting}
                className="p-4 rounded border-none bg-pink-700 cursor-pointer"
            >
                {submitting ? "Ingresando..." : "Entrar"}
            </button>
            </form>
        </div>
    );
}
