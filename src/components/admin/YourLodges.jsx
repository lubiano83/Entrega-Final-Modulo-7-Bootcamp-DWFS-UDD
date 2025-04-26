import { Link } from "react-router-dom";
import useLodges from "../../hook/useLodges"
import Message from "../Message";
import Boton from "../Boton";

export default function YourLodges() {

    const { lodgeUserId, changeAvailable } = useLodges();

    try {
        return (
            <div className="flex justify-center items-center gap-8 w-full h-full flex-wrap">
                {
                    lodgeUserId && lodgeUserId.length > 0 ? (
                        lodgeUserId.map(item => (
                            <div key={item._id} className={`flex flex-col justify-center items-center gap-4 bg-amber-100 rounded-xl p-4 w-1/4 min-w-72 max-w-lg shadow-sm shadow-amber-950`}>
                                <Link to={"/"} className="aspect-square w-full bg-white flex justify-center items-center">
                                    {item.image.length > 0 ? (
                                        <img src={item.image[0]} alt="imagen lodge" className="w-full bg-white aspect-square object-cover"/>
                                    ) : (
                                        <Message>Sin Imagen..</Message>
                                    )}
                                </Link>
                                <div className="flex flex-col justify-evenly items-center w-full gap-2">
                                    <h3 className="text-xl italic underline"><strong>{ item.hotel }</strong></h3>
                                    <div className="flex justify-center items-center gap-1"><strong>Disponible:</strong>
                                        <input type="checkbox" checked={item.available} onChange={() => changeAvailable(item._id, !item.available)} className="w-5 h-5" />
                                    </div>
                                    <div className="flex justify-center items-center gap-2">
                                        <Link to={`/lodges/${item._id}`}>
                                            <Boton>Ver</Boton>
                                        </Link>
                                        <Link to={`/admin/lodges/${item._id}`}>
                                            <Boton>Modificar</Boton>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : <Message>No hay cabañas disponibles...</Message>
                }
            </div>
        )
    } catch (error) {
        console.log(error.message);
        return (
            <div className="flex flex-col justify-center items-center gap-4">
                <Message>Ups, hubo un Error...</Message>
                <Link to={"/admin"}>
                    <Boton>Volver</Boton>
                </Link>
            </div>
        )
    }
};