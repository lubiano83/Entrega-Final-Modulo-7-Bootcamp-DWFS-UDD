import { Link } from "react-router-dom";
import useReservations from "../../hook/useReservations";
import Message from "../Message";
import Title from "../Title";
import moment from "moment";
import SvgImage from "../SvgImage";
import ErrorMessage from "../ErrorMessage";

export default function YourReservations({ isDarkMode }) {

    const { reservationsByUserId } = useReservations();

    if(!reservationsByUserId) {
        return <Message isDarkMode={isDarkMode} >Cargando...</Message>
    };

    if(reservationsByUserId.length === 0) {
        return <Message isDarkMode={isDarkMode} >No hay reservas disponibles...</Message>
    }

    try {
        return (
            <div className="flex flex-col justify-center items-center gap-4">
                <Message isDarkMode={isDarkMode} className="flex xl:hidden">Vista no disponible en dispositivos moviles..</Message>
                <Title isDarkMode={isDarkMode} className={"hidden xl:flex"}>Reservas:</Title>
                <table className={`${isDarkMode ? "text-amber-950 shadow-amber-950" : "text-green-950 shadow-green-950"} hidden xl:flex flex-col justify-center items-center shadow-sm`}>
                    <thead className={`${isDarkMode ? "bg-amber-200" : "bg-green-200"}`}>
                        <tr className="border">
                            <th className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-56 p-2`}>Lodge</th>
                            <th className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-56 p-2`}>User</th>
                            <th className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-28 p-2`}>Empieza</th>
                            <th className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-28 p-2`}>Termina</th>
                            <th className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-24 p-2`}>Personas</th>
                            <th className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-24 p-2`}>Precio</th>
                            <th className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-20 p-2`}>Pagado</th>
                            <th className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-28 p-2`}>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reservationsByUserId.map(item => (
                                <tr key={item._id} className={`text-center ${isDarkMode ? "bg-amber-100" : "bg-green-100"}`}>
                                    <td className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-56 p-2`}>
                                        <Link to={`/lodges/${item.lodge._id}`} className="hover:underline">
                                            {item.lodge.hotel}
                                        </Link>
                                    </td>
                                    <td className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-56 p-2`}>
                                        <Link to={`mailto:${item.user.emal}`} className="hover:underline">
                                            {item.user.email}
                                        </Link>
                                    </td>
                                    <td className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-28 p-2`}>{moment(item.arrive).format("YYYY/MM/DD")}</td>
                                    <td className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-28 p-2`}>{moment(item.leave).format("YYYY/MM/DD")}</td>
                                    <td className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-24 p-2`}>{item.people}</td>
                                    <td className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-24 p-2`}>${item.price}</td>
                                    <td className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-20 p-2`}>{item.paid ? "Si" : "No"}</td>
                                    <td className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-28 p-2`}>
                                        <div className="flex justify-center items-center gap-2">
                                            <div className="relative group">
                                                <Link to={`/admin/reservations/finish/${item._id}`} state={{item}}>
                                                    <SvgImage src={"/finish-svgrepo-com.svg"} />
                                                </Link>
                                                <span className={`absolute -top-8 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-white ${isDarkMode ? "text-amber-950" : "text-green-950"} text-xs p-1 rounded-lg w-28`}>
                                                    Finalizar Reserva
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