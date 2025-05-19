import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import Boton from "../Boton";
import moment from "moment";
import Message from "../Message";
import useCapitalize from "../../hook/useCapitalize";
import ErrorMessage from "../ErrorMessage";

export default function ProfileData({ isDarkMode }) {

    const { user, logged } = useAuth();
    const { capitalize, capitalizeEachWord } = useCapitalize();

    if(!logged) {
        return (
            <div className="flex flex-col justify-center items-center gap-4">
                <Message isDarkMode={isDarkMode}>Primero debes iniciar sesion...</Message>
                <Link to={"/login"}>
                    <Boton isDarkMode={isDarkMode}>Login</Boton>
                </Link>
            </div>
        )
    };

    if(!user) return <Message isDarkMode={isDarkMode}>Cargando...</Message>

    try {
        return (
            <div className={`${isDarkMode ? "bg-amber-100 text-amber-950 shadow-amber-950" : "bg-green-100 text-green-950 shadow-green-950"} p-4 rounded-2xl flex flex-col flex-flow justify-center items-center w-1/4 min-w-72 gap-4 max-w-sm shadow-sm`}>
                <Link to={"/profile/image"} className="group relative w-full flex justify-center items-center bg-white aspect-square">
                    <div className={`w-full flex justify-center items-center aspect-square ${isDarkMode ? "bg-amber-700" : "bg-green-700"}`}>
                        <img src={user?.image ? user.image : "/user-circle-svgrepo-com-white.svg"} alt="Foto de perfil" className="cursor-pointer w-full"/>
                        <span className={`absolute inset-0 flex justify-center items-center ${isDarkMode ? "text-amber-950" : "text-green-950"} font-bold text-lg opacity-0 group-hover:opacity-80 bg-white bg-opacity-50 transition-opacity duration-300`}>Cambiar Imagen</span>
                    </div>
                </Link>
                <div className="flex flex-col gap-1">
                    <h3><strong>Id:</strong> { user._id }</h3>
                    <h3><strong>Nombre:</strong> { capitalizeEachWord(user.first_name) }</h3>
                    <h3><strong>Apellido:</strong> { capitalizeEachWord(user.last_name) }</h3>
                    <h3><strong>Email:</strong> { user.email }</h3>
                    <h3><strong>Telefono:</strong> { user.phone }</h3>
                    <h3><strong>Pais:</strong> { capitalize(user.address.country) }</h3>
                    <h3><strong>Region:</strong> { capitalize(user.address.state) }</h3>
                    <h3><strong>Ciudad:</strong> { capitalize(user.address.city) }</h3>
                    <h3><strong>Calle:</strong> { capitalize(user.address.street) }, { user.address.number }</h3>
                    <h3><strong>Role:</strong> { capitalize(user.role) }</h3>
                    <h3><strong>Plan:</strong> { capitalize(user.plan) }</h3>
                    <h3><strong>Creado:</strong> { moment(user.createdAt).format("DD/MM/YYYY") }</h3>
                    <h3><strong>Modificado:</strong> { moment(user.updatedAt).format("DD/MM/YYYY") }</h3>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <Link to={"/"}>
                        <Boton isDarkMode={isDarkMode} >Volver</Boton>
                    </Link>
                    <Link to={"/profile/edit"}>
                        <Boton isDarkMode={isDarkMode}>Editar</Boton>
                    </Link>
                </div>
            </div>
        )
    } catch (error) {
        return <ErrorMessage isDarkMode={isDarkMode} error={error} />
    }
};