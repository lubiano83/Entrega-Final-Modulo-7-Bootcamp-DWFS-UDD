import { useNavigate, useLocation, Link } from "react-router-dom";
import Message from "../Message";
import useReservations from "../../hook/useReservations";
import Title from "../Title";
import Boton from "../Boton";
import { useState } from "react";

export default function ReservationFinish() {

    const { isAlreadyPaid } = useReservations();
    const navigate = useNavigate();
    const location = useLocation();
    const item = location.state.item;
    const [paid, setPaid] = useState(item.paid);

    const handleSubmit = async(e) => {
        e.preventDefault();
        const success = await isAlreadyPaid(item._id, paid);
        if(success) return navigate("/admin/reservations");
    };

    return (
        <div className="flex flex-col justify-center items-center w-full">
            <Message className="flex xl:hidden">Vista no disponible en dispositivos moviles..</Message>
            <form onSubmit={handleSubmit} className="bg-amber-100 rounded-xl p-4 xl:flex flex-col justify-center items-center gap-4 min-w-72 w-1/2 shadow-sm shadow-amber-950 max-w-xl hidden">
                <Title>Finalizar Reserva</Title>
                <div className="flex justify-center items-center gap-2 text-xl">
                    <p>Reserva:</p>
                    <input type="checkbox" onChange={() => setPaid(!paid)} className="w-5 h-5" />
                </div>
                <div className="flex justify-center items-center gap-2">
                    <Link to={"/admin/reservations"}>
                        <Boton>Volver</Boton>
                    </Link>
                    <Boton type="submit">Registrar</Boton>
                </div>
            </form>
        </div>
    )
};