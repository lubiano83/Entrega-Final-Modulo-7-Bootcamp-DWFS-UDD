import useRecords from "../../hook/useRecords";
import moment from "moment";
import Message from "../Message";
import Title from "../Title";
import { Link } from "react-router-dom";
import Boton from "../Boton";

export default function YourRecords() {

    const { recordsByUserId } = useRecords();

    try {
        return (
            <div className="flex flex-col justify-center items-center gap-4">
                <Message className="flex xl:hidden">Vista no disponible en dispositivos moviles..</Message>
                <Title className="hidden xl:flex">Reservas:</Title>
                {
                    recordsByUserId && recordsByUserId.length > 0 ? (
                        <table className="text-amber-950 hidden xl:flex flex-col justify-center items-center shadow-sm shadow-amber-950">
                            <thead className="bg-amber-200">
                                <tr className="border">
                                    <th className="border border-amber-950 w-56 p-2">Lodge</th>
                                    <th className="border border-amber-950 w-56 p-2">User</th>
                                    <th className="border border-amber-950 w-24 p-2">Pais</th>
                                    <th className="border border-amber-950 w-24 p-2">Ciudad</th>
                                    <th className="border border-amber-950 w-28 p-2">Empieza</th>
                                    <th className="border border-amber-950 w-28 p-2">Termina</th>
                                    <th className="border border-amber-950 w-28 p-2">Capacidad</th>
                                    <th className="border border-amber-950 w-24 p-2">Personas</th>
                                    <th className="border border-amber-950 w-24 p-2">Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    recordsByUserId.map(item => (
                                        <tr key={item._id} className="text-center bg-amber-100">
                                            <td className="border border-amber-950 w-56 p-2">{item.lodge.hotel}</td>
                                            <td className="border border-amber-950 w-56 p-2">{item.user.email}</td>
                                            <td className="border border-amber-950 w-24 p-2">{item.user.address.country}</td>
                                            <td className="border border-amber-950 w-24 p-2">{item.user.address.city}</td>
                                            <td className="border border-amber-950 w-28 p-2">{moment(item.arrive).format("YYYY/MM/DD")}</td>
                                            <td className="border border-amber-950 w-28 p-2">{moment(item.leave).format("YYYY/MM/DD")}</td>
                                            <td className="border border-amber-950 w-28 p-2">{item.lodge.capacity}</td>
                                            <td className="border border-amber-950 w-24 p-2">{item.people}</td>
                                            <td className="border border-amber-950 w-24 p-2">${item.price}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    ) : (
                        <Message className={"hidden xl:flex"}>No hay reservas disponibles...</Message>
                    )
                }
            </div>
        )
    } catch (error) {
        <ErrorMessage error={error} />
    }
};