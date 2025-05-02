import useAuth from "../../hook/useAuth";
import Title from "../Title";
import Boton from "../Boton";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../ErrorMessage";

export default function LoginForm({ isDarkMode }) {

    const { loginUser, email, setEmail, password, setPassword } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const success = await loginUser();
        if(success) return navigate("/");
    };

    try {
        return (
            <form onSubmit={handleSubmit} className={`${isDarkMode ? "bg-amber-100 shadow-amber-950" : "bg-green-100 shadow-green-950"} rounded-xl p-4 flex flex-col justify-center items-center gap-4 min-w-72 w-1/2 shadow-sm max-w-xl`}>
                <Title isDarkMode={isDarkMode} >Login:</Title>
                <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Ingresa tu email.." className={`border-2 ${isDarkMode ? "border-amber-950 text-amber-950" : "border-green-950 text-green-950"} rounded-lg bg-white px-2 py-1 w-full`} />
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Ingresa tu contraseña.." className={`border-2 ${isDarkMode ? "border-amber-950 text-amber-950" : "border-green-950 text-green-950"} rounded-lg bg-white px-2 py-1 w-full`} />
                <div className="flex justify-center items-center gap-2">
                    <Link isDarkMode={isDarkMode} to={"/register"}>
                        <Boton isDarkMode={isDarkMode} >Register</Boton>
                    </Link>
                    <Boton isDarkMode={isDarkMode} type="submit">Ingresar</Boton>
                </div>
            </form>
        )
    } catch (error) {
        return <ErrorMessage isDarkMode={isDarkMode} error={error} />
    }
};