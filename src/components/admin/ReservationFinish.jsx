import { useNavigate, useLocation } from "react-router-dom";
import Message from "../Message";
import useReservations from "../../hook/useReservations";

export default function ReservationFinish({ id }) {

    const { isAlreadyPaid } = useReservations();
    const navigate = useNavigate();
    const location = useLocation();
    const item = location.state.item;

    const handleSubmit = async(e) => {
        e.preventDefault();
        const success = await isAlreadyPaid(id);
        if(success) return navigate("/admin/reservations");
    };

    return (
        <div className="flex flex-col justify-center items-center w-full">
            <form onSubmit={handleSubmit} className="bg-amber-100 rounded-xl p-4 xl:flex flex-col justify-center items-center gap-4 min-w-72 w-1/2 shadow-sm shadow-amber-950 max-w-xl hidden">
                <Message className="flex xl:hidden">Vista no disponible en dispositivos moviles..</Message>
                <Title>Reserva Finalizada:</Title>
                <div className="border border-amber-950 w-27 p-2">
                    <input type="checkbox" checked={item.paid} onChange={() => isAlreadyPaid(item._id, !item.paid)} className="w-5 h-5" />
                </div>
                <div className="flex justify-center items-center gap-2">
                    <Link to={"/admin/lodges"}>
                        <Boton>Volver</Boton>
                    </Link>
                    <Boton type="submit">Modificar</Boton>
                </div>
            </form>
        </div>
    )
};