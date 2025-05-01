import useReservations from "../../hook/useReservations";
import Message from "../Message";
import Title from "../Title";
import moment from "moment";

export default function YourReservations() {

    const { reservationsByUserId } = useReservations();

    console.log(reservationsByUserId)

    return (
        <div className="flex flex-col justify-center items-center gap-4">
        <Message className="flex xl:hidden">Vista no disponible en dispositivos moviles..</Message>
        <Title className="hidden xl:flex">Reservas:</Title>
        {
            reservationsByUserId && reservationsByUserId.length > 0 ? (
                <table className="text-amber-950 hidden xl:flex flex-col justify-center items-center shadow-sm shadow-amber-950">
                    <thead className="bg-amber-200">
                        <tr className="border">
                            <th className="border border-amber-950 w-56 p-2">Reservation Id</th>
                            <th className="border border-amber-950 w-56 p-2">Lodge Id</th>
                            <th className="border border-amber-950 w-28 p-2">Empieza</th>
                            <th className="border border-amber-950 w-28 p-2">Termina</th>
                            <th className="border border-amber-950 w-24 p-2">Personas</th>
                            <th className="border border-amber-950 w-24 p-2">Precio</th>
                            <th className="border border-amber-950 w-20 p-2">Pagado</th>
                            <th className="border border-amber-950 w-44 p-2">Contacto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reservationsByUserId.map(item => (
                                <tr key={item._id} className="text-center bg-amber-100">
                                    <td className="border border-amber-950 w-56 p-2">{item._id}</td>
                                    <td className="border border-amber-950 w-56 p-2">{item.lodge._id}</td>
                                    <td className="border border-amber-950 w-28 p-2">{moment(item.arrive).format("YYYY/MM/DD")}</td>
                                    <td className="border border-amber-950 w-28 p-2">{moment(item.leave).format("YYYY/MM/DD")}</td>
                                    <td className="border border-amber-950 w-24 p-2">{item.people}</td>
                                    <td className="border border-amber-950 w-24 p-2">${item.price}</td>
                                    <td className="border border-amber-950 w-20 p-2">{item.paid ? "Si" : "No"}</td>
                                    <td className="border border-amber-950 w-44 p-2 truncate max-w-[11rem]">
                                    <a href={`mailto:${item.contact}`} className="hover:text-amber-950 text-center">
                                        {item.contact}
                                    </a>
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
};