import { Link } from "react-router-dom";
import useLodges from "../../hook/useLodges"
import Message from "../Message";
import Boton from "../Boton";
import SvgImage from "../SvgImage";

export default function YourLodges() {

    const { lodgesByUserId, changeAvailable, deleteAllImageFromLodge, deleteLodgeById } = useLodges();

    try {
        return (
            <div className="w-full overflow-x-auto p-4">
                {
                    lodgesByUserId && lodgesByUserId.length > 0 ? (
                        <table className="text-amber-950 flex flex-col justify-center items-center">
                            <thead className="bg-amber-200">
                                <tr className="border">
                                    <th className="border border-amber-950 w-40 p-2">Imagen</th>
                                    <th className="border border-amber-950 w-52 p-2">Hotel</th>
                                    <th className="border border-amber-950 w-28 p-2">Piezas</th>
                                    <th className="border border-amber-950 w-28 p-2">Baños</th>
                                    <th className="border border-amber-950 w-28 p-2">Mt2</th>
                                    <th className="border border-amber-950 w-28 p-2">Wifi</th>
                                    <th className="border border-amber-950 w-28 p-2">Alta</th>
                                    <th className="border border-amber-950 w-28 p-2">Media</th>
                                    <th className="border border-amber-950 w-28 p-2">Baja</th>
                                    <th className="border border-amber-950 w-36 p-2">Disponible</th>
                                    <th className="border border-amber-950 w-72 p-2">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    lodgesByUserId.map(item => (
                                        <tr key={item._id} className="text-center bg-amber-100">
                                            <td className="border border-amber-950 w-40 p-2 gap-1 text-xl">
                                                { item.image.length > 0 ? (
                                                    item.image.map( (img, index) => <Link key={index} to={img} target="_blank">{ index === 4 ? index+1 : `${index+1},` } </Link> )
                                                ) : (
                                                    "0"
                                                )}
                                            </td>
                                            <td className="border border-amber-950 w-52 p-2">{item.hotel}</td>
                                            <td className="border border-amber-950 w-28 p-2">{item.bedroom}</td>
                                            <td className="border border-amber-950 w-28 p-2">{item.bathroom}</td>
                                            <td className="border border-amber-950 w-28 p-2">{item.size}</td>
                                            <td className="border border-amber-950 w-28 p-2">{item.wifi ? "Sí" : "No"}</td>
                                            <td className="border border-amber-950 w-28 p-2">{item.season.high}</td>
                                            <td className="border border-amber-950 w-28 p-2">{item.season.medium}</td>
                                            <td className="border border-amber-950 w-28 p-2">{item.season.low}</td>
                                            <td className="border border-amber-950 w-36 p-2">
                                                <input type="checkbox" checked={item.available} onChange={() => changeAvailable(item._id, !item.available)} className="w-5 h-5" />
                                            </td>
                                            <td className="border border-amber-950 w-72 p-2">
                                                <div className="flex justify-center items-center gap-2">
                                                    <div className="relative group">
                                                        <Link to={`/admin/lodges/${item._id}`}>
                                                            <SvgImage src={"/edit-3-svgrepo-com.svg"} />
                                                        </Link>
                                                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-white text-amber-950 text-xs p-1 rounded-lg w-25">
                                                            Modificar Lodge
                                                        </span>
                                                    </div>
                                                    <div className="relative group">
                                                        <Link to={`/admin/lodges/image/${item._id}`}>
                                                            <SvgImage src={"/image-plus-svgrepo-com-green.svg"} />
                                                        </Link>
                                                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-white text-amber-950 text-xs p-1 rounded-md w-24">
                                                            Agregar Imagen
                                                        </span>
                                                    </div>
                                                    <div className="relative group">
                                                        <SvgImage src={"/image-square-xmark-svgrepo-com.svg"} fnc={() => deleteAllImageFromLodge(item._id)} />
                                                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-white text-amber-950 text-xs p-1 rounded-md w-25">
                                                            Borrar Imagenes
                                                        </span>
                                                    </div>
                                                    <div className="relative group">
                                                        <SvgImage src={"/cross-svgrepo-com-red.svg"} fnc={() => deleteLodgeById(item._id)} />
                                                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-white text-amber-950 text-xs p-1 rounded-md w-25">
                                                            Eliminar Lodge
                                                        </span>
                                                    </div>
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