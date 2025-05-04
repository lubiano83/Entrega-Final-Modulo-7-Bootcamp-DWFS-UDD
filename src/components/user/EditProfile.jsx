import useAuth from "../../hook/useAuth";
import { Link, useNavigate } from "react-router-dom";
import Title from "../Title";
import Boton from "../Boton";
import ErrorMessage from "../ErrorMessage";

export default function EditProfile({ isDarkMode }) {

    const { updateUserById, first_name, setFirst_name, last_name, setLast_name, phone, setPhone, country, setCountry, state, setState, city, setCity, street, setStreet, number, setNumber } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const success = await updateUserById();
        if(success) return navigate("/profile");
    };

    try {
        return (
            <form onSubmit={handleSubmit} className={`${isDarkMode ? "bg-amber-100 shadow-amber-950" : "bg-green-100 shadow-green-950"} rounded-xl p-4 flex flex-col justify-center items-center gap-4 min-w-72 w-1/2 shadow-sm max-w-xl`}>
                    <Title isDarkMode={isDarkMode} >Editar Usuario:</Title>
                    <input type="text" name="first_name" value={first_name} onChange={(e) => setFirst_name(e.target.value)} placeholder="Ingresa tu nombre.." className={`border-2 ${isDarkMode ? "border-amber-950" : "border-green-950"} rounded-lg bg-white text-amber-950 px-2 py-1 w-full`} />
                    <input type="text" name="last_name" value={last_name} onChange={(e) => setLast_name(e.target.value)} placeholder="Ingresa tu apellido.." className={`border-2 ${isDarkMode ? "border-amber-950" : "border-green-950"} rounded-lg bg-white text-amber-950 px-2 py-1 w-full`} />
                    <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Ingresa tu celular.." className={`border-2 ${isDarkMode ? "border-amber-950" : "border-green-950"} rounded-lg bg-white text-amber-950 px-2 py-1 w-full`} />
                    <input type="text" name="country" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Ingresa tu pais.." className={`border-2 ${isDarkMode ? "border-amber-950" : "border-green-950"} rounded-lg bg-white text-amber-950 px-2 py-1 w-full`} />
                    <input type="text" name="state" value={state} onChange={(e) => setState(e.target.value)} placeholder="Ingresa tu region/estado.." className={`border-2 ${isDarkMode ? "border-amber-950" : "border-green-950"} rounded-lg bg-white text-amber-950 px-2 py-1 w-full`} />
                    <input type="text" name="city" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Ingresa tu ciudad.." className={`border-2 ${isDarkMode ? "border-amber-950" : "border-green-950"} rounded-lg bg-white text-amber-950 px-2 py-1 w-full`} />
                    <input type="text" name="street" value={street} onChange={(e) => setStreet(e.target.value)} placeholder="Ingresa tu calle.." className={`border-2 ${isDarkMode ? "border-amber-950" : "border-green-950"} rounded-lg bg-white text-amber-950 px-2 py-1 w-full`} />
                    <input type="text" name="number" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Numero de dirección.." className={`border-2 ${isDarkMode ? "border-amber-950" : "border-green-950"} rounded-lg bg-white text-amber-950 px-2 py-1 w-full`} />
                    <div className="flex justify-center items-center gap-2">
                    <Link to={"/profile"}>
                        <Boton isDarkMode={isDarkMode}>Volver</Boton>
                    </Link>
                    <Boton type="submit" isDarkMode={isDarkMode} >Modificar</Boton>
                </div>
            </form>
        )
    } catch (error) {
        return <ErrorMessage isDarkMode={isDarkMode} error={error} />
    }
};