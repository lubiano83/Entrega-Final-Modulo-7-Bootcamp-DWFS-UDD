import { Link } from "react-router-dom";
import useLodges from "../../hook/useLodges"
import Message from "../Message";
import SvgImage from "../SvgImage";
import Title from "../Title";
import ErrorMessage from "../ErrorMessage";

export default function YourLodges({ isDarkMode }) {

    const { lodgesByUserId, changeAvailable, deleteAllImageFromLodge, deleteLodgeById, changeWifi } = useLodges();

    console.log(lodgesByUserId)

    if(!lodgesByUserId) {
        return <Message isDarkMode={isDarkMode} >Cargando...</Message>
    };

    if(lodgesByUserId.length === 0) {
        return <Message isDarkMode={isDarkMode} >No hay cabañas disponibles...</Message>
    };

    try {
        return (
            <div className="flex flex-col justify-center items-center gap-4">
                <Message isDarkMode={isDarkMode} className="flex xl:hidden">Vista no disponible en dispositivos moviles..</Message>
                <Title isDarkMode={isDarkMode} className={"hidden xl:flex"} >Tablero:</Title>
                <table className={`${isDarkMode ? "text-amber-950 shadow-amber-950" : "text-green-950 shadow-green-950"} hidden xl:flex flex-col justify-center items-center shadow-sm`}>
                    <thead className={`${isDarkMode ? "bg-amber-200" : "bg-green-200"}`}>
                        <tr className="border">
                            <th className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-37 p-2`}>Imagen (5 max)</th>
                            <th className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-48 p-2`}>Nombre Cabaña</th>
                            <th className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-18 p-2`}>Piezas</th>
                            <th className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-18 p-2`}>Baños</th>
                            <th className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-15 p-2`}>Mt2</th>
                            <th className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-24 p-2`}>Personas</th>
                            <th className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-16 p-2`}>Wifi</th>
                            <th className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-19 p-2`}>T/Alta</th>
                            <th className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-22 p-2`}>T/Media</th>
                            <th className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-19 p-2`}>T/Baja</th>
                            <th className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-27 p-2`}>Disponible</th>
                            <th className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-40 p-2`}>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            lodgesByUserId.map(item => (
                                <tr key={item._id} className={`text-center ${isDarkMode ? "bg-amber-100" : "bg-green-100"}`}>
                                    <td className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-37 p-2 gap-1 text-xl`}>
                                        { item.image.length > 0 ? (
                                            item.image.map( (img, index) => <Link key={index} to={img} target="_blank">{ index === 4 ? index+1 : `${index+1},` } </Link> )
                                        ) : (
                                            "0"
                                        )}
                                    </td>
                                    <td className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-48 p-2 truncate max-w-[12rem]`}>{item.hotel}</td>
                                    <td className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-18 p-2`}>{item.bedroom}</td>
                                    <td className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-18 p-2`}>{item.bathroom}</td>
                                    <td className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-15 p-2`}>{item.size}</td>
                                    <td className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-24 p-2`}>{item.capacity}</td>
                                    <td className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-16 p-2`}>
                                        <input type="checkbox" checked={item.wifi} onChange={() => changeWifi(item._id, !item.wifi)} className="w-5 h-5" />
                                    </td>
                                    <td className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-19 p-2`}>${item.season.high}</td>
                                    <td className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-22 p-2`}>${item.season.medium}</td>
                                    <td className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-19 p-2`}>${item.season.low}</td>
                                    <td className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-27 p-2`}>
                                        <input type="checkbox" checked={item.available} onChange={() => changeAvailable(item._id, !item.available)} className="w-5 h-5" />
                                    </td>
                                    <td className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-40 p-2`}>
                                        <div className="flex justify-center items-center gap-2">
                                            <div className="relative group">
                                                <Link to={`/admin/lodges/${item._id}`}>
                                                    <SvgImage src={"/edit-3-svgrepo-com.svg"} />
                                                </Link>
                                                <span className={`absolute -top-8 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-white ${isDarkMode ? "text-amber-950" : "text-green-950"} text-xs p-1 rounded-lg w-25`}>
                                                    Modificar Lodge
                                                </span>
                                            </div>
                                            <div className="relative group">
                                                <Link to={`/admin/lodges/image/${item._id}`}>
                                                    <SvgImage src={"/image-plus-svgrepo-com-green.svg"} />
                                                </Link>
                                                <span className={`absolute -top-8 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-white ${isDarkMode ? "text-amber-950" : "text-green-950"} text-xs p-1 rounded-md w-24`}>
                                                    Agregar Imagen
                                                </span>
                                            </div>
                                            <div className="relative group">
                                                <SvgImage src={"/image-square-xmark-svgrepo-com.svg"} fnc={() => deleteAllImageFromLodge(item._id)} />
                                                <span className={`absolute -top-8 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-white ${isDarkMode ? "text-amber-950" : "text-green-950"} text-xs p-1 rounded-md w-25`}>
                                                    Borrar Imagenes
                                                </span>
                                            </div>
                                            <div className="relative group">
                                                <SvgImage src={"/cross-svgrepo-com-red.svg"} fnc={() => deleteLodgeById(item._id)} />
                                                <span className={`absolute -top-8 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-white ${isDarkMode ? "text-amber-950" : "text-green-950"} text-xs p-1 rounded-md w-24`}>
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
            </div>
        )
    } catch (error) {
        return <ErrorMessage isDarkMode={isDarkMode} error={error} />
    }
};