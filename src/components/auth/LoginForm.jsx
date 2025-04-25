import useAuth from "../../hook/useAuth";
import Title from "../Title";
import Boton from "../Boton";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {

    const { loginUser, email, setEmail, password, setPassword } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        await loginUser();
        navigate("/lodges");
    };

    return (
        <form onSubmit={handleSubmit} className="bg-amber-100 rounded-xl p-4 flex flex-col justify-center items-center gap-4 min-w-72 w-1/2 shadow-sm shadow-amber-950 max-w-xl">
            <Title>Login:</Title>
            <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Ingresa tu email.." className="border-2 border-amber-950 rounded-lg bg-white text-amber-950 px-2 py-1 w-full" />
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Ingresa tu contraseña.." className="border-2 border-amber-950 rounded-lg bg-white text-amber-950 px-2 py-1 w-full" />
            <div className="flex justify-center items-center gap-2">
                <Link to={"/register"}>
                    <Boton>Register</Boton>
                </Link>
                <Boton type="submit">Ingresar</Boton>
            </div>
        </form>
    )
};