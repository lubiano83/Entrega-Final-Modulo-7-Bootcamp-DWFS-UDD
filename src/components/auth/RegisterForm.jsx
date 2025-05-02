import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import Boton from "../Boton";
import Title from "../Title";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../ErrorMessage";

export default function Register() {
    const { registerUser, first_name, setFirst_name, last_name, setLast_name, phone, setPhone, email, setEmail, password, setPassword, country, setCountry, state, setState, city, setCity, street, setStreet, number, setNumber } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const success = await registerUser();
        if(success) return navigate("/login");
    };

    try {
        return (
            <form onSubmit={handleSubmit} className="bg-amber-100 rounded-xl p-4 flex flex-col justify-center items-center gap-4 min-w-72 w-1/2 shadow-sm shadow-amber-950 max-w-xl">
                <Title>Register:</Title>
                <input type="text" name="first_name" value={first_name} onChange={(e) => setFirst_name(e.target.value)} placeholder="Ingresa tu nombre.." className="border-2 border-amber-950 rounded-lg bg-white text-amber-950 px-2 py-1 w-full" />
                <input type="text" name="last_name" value={last_name} onChange={(e) => setLast_name(e.target.value)} placeholder="Ingresa tu apellido.." className="border-2 border-amber-950 rounded-lg bg-white text-amber-950 px-2 py-1 w-full" />
                <input type="text" name="country" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Ingresa tu pais.." className="border-2 border-amber-950 rounded-lg bg-white text-amber-950 px-2 py-1 w-full" />
                <input type="text" name="state" value={state} onChange={(e) => setState(e.target.value)} placeholder="Ingresa tu region/estado.." className="border-2 border-amber-950 rounded-lg bg-white text-amber-950 px-2 py-1 w-full" />
                <input type="text" name="city" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Ingresa tu ciudad.." className="border-2 border-amber-950 rounded-lg bg-white text-amber-950 px-2 py-1 w-full" />
                <input type="text" name="street" value={street} onChange={(e) => setStreet(e.target.value)} placeholder="Ingresa tu calle.." className="border-2 border-amber-950 rounded-lg bg-white text-amber-950 px-2 py-1 w-full" />
                <input type="text" name="number" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Ingresa tu numero.." className="border-2 border-amber-950 rounded-lg bg-white text-amber-950 px-2 py-1 w-full" />
                <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Ingresa tu telefono.." className="border-2 border-amber-950 rounded-lg bg-white text-amber-950 px-2 py-1 w-full" />
                <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Ingresa tu email.." className="border-2 border-amber-950 rounded-lg bg-white text-amber-950 px-2 py-1 w-full" />
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Ingresa tu contraseña.." className="border-2 border-amber-950 rounded-lg bg-white text-amber-950 px-2 py-1 w-full" />
                <div className="flex justify-center items-center gap-2">
                    <Link to={"/login"}>
                        <Boton>Login</Boton>
                    </Link>
                    <Boton type="submit">Registrar</Boton>
                </div>
            </form>
        );
    } catch (error) {
        return <ErrorMessage error={error} />
    }
}