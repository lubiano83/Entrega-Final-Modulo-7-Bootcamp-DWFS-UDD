import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import Boton from "../Boton";
import moment from "moment";
import Message from "../Message";

export default function ProfileData() {

    const { user } = useAuth();

    try {
        return (
            <>
                { user ? (
                    <div className="bg-amber-300 p-8 rounded-2xl text-amber-950 flex flex-col flex-flow justify-center items-center w-1/4 min-w-72 gap-4">
                        <Link to={"/profile/image"}>
                            <div className="w-full flex justify-center items-center bg-white aspect-square">
                                <img src={user.image} alt="Foto de perfil" className="cursor-pointer"/>
                            </div>
                        </Link>
                        <div>
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
                            <h3><strong>Creado:</strong> { moment(user.createdAt).format("DD/MM/YYYY") }</h3>
                            <h3><strong>Modificado:</strong> { moment(user.updatedAt).format("DD/MM/YYYY") }</h3>
                            <h3><strong>Reservations:</strong> { user.reservations.length === 0 ? "Sin revervas" : user.reservations }</h3>
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