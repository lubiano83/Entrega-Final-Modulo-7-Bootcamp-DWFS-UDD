import useRecords from "../../hook/useRecords";
import moment from "moment";
import Message from "../Message";
import Title from "../Title";
import ErrorMessage from "../ErrorMessage";
import { Link } from "react-router-dom";
import GoBack from "../GoBack";

export default function YourRecords({ isDarkMode }) {

    const { recordsByUserId } = useRecords();

    if(!recordsByUserId) return <Message isDarkMode={isDarkMode} >Cargando...</Message>

    if(recordsByUserId.length === 0) {
        return (
            <>
                <Message isDarkMode={isDarkMode} >No hay registros disponibles...</Message>
                <GoBack isDarkMode={isDarkMode} path={"/admin"} />
            </>
        )
    };

    try {
        return (
            <div className="flex flex-col justify-center items-center gap-4">
                <Message isDarkMode={isDarkMode} className="flex xl:hidden">Vista no disponible en dispositivos moviles..</Message>
                <Title isDarkMode={isDarkMode} className={"hidden xl:flex"}>Registros:</Title>
                <table className={`${isDarkMode ? "text-amber-950 shadow-amber-950" : "text-green-950 shadow-green-950"} hidden xl:flex flex-col justify-center items-center shadow-sm`}>
                    <thead className={`${isDarkMode ? "bg-amber-200" : "bg-green-200"}`}>
                        <tr className="border">
                            <th className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-56 p-2`}>Lodge</th>
                            <th className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-56 p-2`}>User</th>
                            <th className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-24 p-2`}>Pais</th>
                            <th className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-24 p-2`}>Ciudad</th>
                            <th className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-28 p-2`}>Empieza</th>
                            <th className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-28 p-2`}>Termina</th>
                            <th className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-28 p-2`}>Capacidad</th>
                            <th className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-24 p-2`}>Personas</th>
                            <th className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-24 p-2`}>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            recordsByUserId.map(item => (
                                <tr key={item._id} className={`text-center ${isDarkMode ? "bg-amber-100" : "bg-green-100"}`}>
                                    <td className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-56 p-2`}>
                                        <Link to={`/lodges/${item.lodge._id}`}>
                                            {item.lodge.hotel}
                                        </Link>
                                    </td>
                                    <td className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-56 p-2`}>
                                        <Link to={`mailto:${item.user.email}`}>
                                            {item.user.email}
                                        </Link>
                                    </td>
                                    <td className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-24 p-2`}>{item.user.address.country}</td>
                                    <td className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-24 p-2`}>{item.user.address.city}</td>
                                    <td className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-28 p-2`}>{moment(item.arrive).format("YYYY/MM/DD")}</td>
                                    <td className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-28 p-2`}>{moment(item.leave).format("YYYY/MM/DD")}</td>
                                    <td className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-28 p-2`}>{item.lodge.capacity}</td>
                                    <td className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-24 p-2`}>{item.people}</td>
                                    <td className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-24 p-2`}>${item.price}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <GoBack isDarkMode={isDarkMode} path={"/admin"} />
            </div>
        )
    } catch (error) {
        const url = import.meta.url;
        return (
            <ErrorMessage isDarkMode={isDarkMode} path={"/admin"} error={error} url={url} />
        )
    }
};