import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import Boton from "../Boton";
import moment from "moment";
import Message from "../Message";

export default function ProfileData() {

    const { user, logged } = useAuth();

    try {
        return (
            <>
                { logged ? (
                    <>
                        { user ? (
                            <div className="bg-amber-100 p-4 rounded-2xl text-amber-950 flex flex-col flex-flow justify-center items-center w-1/4 min-w-72 gap-4 max-w-sm shadow-sm shadow-amber-950">
                                <Link to={"/profile/image"} className="group relative w-full flex justify-center items-center bg-white aspect-square">
                                    <div className="w-full flex justify-center items-center aspect-square bg-amber-700">
                                        <img src={user?.image ? user.image : "/user-circle-svgrepo-com-white.svg"} alt="Foto de perfil" className="cursor-pointer w-full"/>
                                        <span className="absolute inset-0 flex justify-center items-center text-amber-950 font-bold text-lg opacity-0 group-hover:opacity-80 bg-white bg-opacity-50 transition-opacity duration-300">Cambiar Imagen</span>
                                    </div>
                                </Link>
                                <div className="flex flex-col gap-1">
                                    <h3><strong>Id:</strong> { user._id }</h3>
                                    <h3><strong>Nombre:</strong> { user.first_name }</h3>
                                    <h3><strong>Apellido:</strong> { user.last_name }</h3>
                                    <h3><strong>Email:</strong> { user.email }</h3>
                                    <h3><strong>Telefono:</strong> { user.phone }</h3>
                                    <h3><strong>Pais:</strong> { user.address.country }</h3>
                                    <h3><strong>Region:</strong> { user.address.state }</h3>
                                    <h3><strong>Ciudad:</strong> { user.address.city }</h3>
                                    <h3><strong>Calle:</strong> { user.address.street }, { user.address.number }</h3>
                                    <h3><strong>Role:</strong> { user.role }</h3>
                                    <h3><strong>Plan:</strong> { user.plan }</h3>
                                    <h3><strong>Creado:</strong> { moment(user.createdAt).format("DD/MM/YYYY") }</h3>
                                    <h3><strong>Modificado:</strong> { moment(user.updatedAt).format("DD/MM/YYYY") }</h3>
                                </div>
                                <div className="flex justify-center items-center gap-2">
                                    <Link to={"/"}>
                                        <Boton>Volver</Boton>
                                    </Link>
                                    <Link to={"/profile/edit"}>
                                        <Boton>Editar</Boton>
                                    </Link>
                                </div>
                            </div>
                        ) : <Message>Cargando...</Message> }
                    </>
                ) : <div className="flex flex-col justify-center items-center gap-4">
                        <Message>Primero debes iniciar sesion...</Message>
                        <Link to={"/login"}>
                            <Boton>Login</Boton>
                        </Link>
                    </div> }
                </>
        )
    } catch (error) {
        console.log(error.message);
        return (
            <div className="flex flex-col justify-center items-center gap-4">
                <Message>Ups, hubo un Error...</Message>
                <Link to={"/"}>
                    <Boton>Volver</Boton>
                </Link>
            </div>
        )
    }
};