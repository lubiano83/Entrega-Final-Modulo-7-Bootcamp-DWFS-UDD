import { Link } from "react-router-dom";
import useLodges from "../../hook/useLodges"
import Message from "../Message";
import Boton from "../Boton";

export default function YourLodges() {

    const { lodgeUserId, changeAvailable } = useLodges();

    try {
        return (
            <div className="w-full overflow-x-auto p-4">
                {
                    lodgeUserId && lodgeUserId.length > 0 ? (
                        <table className="text-amber-950 flex flex-col justify-center items-center">
                            <thead className="bg-amber-200">
                                <tr className="border">
                                    <th className="border border-amber-950 w-72 p-2">Imagen</th>
                                    <th className="border border-amber-950 w-52 p-2">Hotel</th>
                                    <th className="border border-amber-950 w-36 p-2">Piezas</th>
                                    <th className="border border-amber-950 w-36 p-2">Baños</th>
                                    <th className="border border-amber-950 w-36 p-2">Mt2</th>
                                    <th className="border border-amber-950 w-36 p-2">Wifi</th>
                                    <th className="border border-amber-950 w-36 p-2">Disponible</th>
                                    <th className="border border-amber-950 w-72 p-2">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    lodgeUserId.map(item => (
                                        <tr key={item._id} className="text-center bg-amber-100">
                                            <td className="border border-amber-950 w-72 p-2">
                                                <Link to="/">
                                                    {item.image.length > 0 ? (
                                                        <img src={item.image[0]} alt="imagen lodge" className="w-4 h-4 object-cover mx-auto" />
                                                    ) : (
                                                        <Message>Sin Imagen</Message>
                                                    )}
                                                </Link>
                                            </td>
                                            <td className="border border-amber-950 w-52 p-2">{item.hotel}</td>
                                            <td className="border border-amber-950 w-36 p-2">{item.bedroom}</td>
                                            <td className="border border-amber-950 w-36 p-2">{item.bathroom}</td>
                                            <td className="border border-amber-950 w-36 p-2">{item.size}</td>
                                            <td className="border border-amber-950 w-36 p-2">{item.wifi ? "Sí" : "No"}</td>
                                            <td className="border border-amber-950 w-36 p-2">
                                                <input type="checkbox" checked={item.available} onChange={() => changeAvailable(item._id, !item.available)} className="w-5 h-5" />
                                            </td>
                                            <td className="border border-amber-950 w-72 p-2">
                                                <div className="flex justify-center items-center gap-2">
                                                    <Link to={`/admin/lodges/${item._id}`}>
                                                        <Boton>Editar</Boton>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    ) : (
                        <Message>No hay cabañas disponibles...</Message>
                    )
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