import { useNavigate, Link } from "react-router-dom";
import Message from "../Message";
import useReservations from "../../hook/useReservations";
import Title from "../Title";
import Boton from "../Boton";
import { useState } from "react";
import ErrorMessage from "../ErrorMessage";

export default function ReservationFinish({ item, isDarkMode }) {

    const { isAlreadyPaid } = useReservations();
    const navigate = useNavigate();

    const [paid, setPaid] = useState(item.paid);

    const handleSubmit = async(e) => {
        e.preventDefault();
        const success = await isAlreadyPaid(item._id, paid);
        if(success) return navigate("/admin/reservations");
    };

    try {
        return (
            <div className="flex flex-col justify-center items-center w-full">
                <Message isDarkMode={isDarkMode} className="flex xl:hidden">Vista no disponible en dispositivos moviles..</Message>
                <form onSubmit={handleSubmit} className={`${isDarkMode ? "bg-amber-100 shadow-amber-950" : "bg-green-100 shadow-green-950"} rounded-xl p-4 xl:flex flex-col justify-center items-center gap-4 min-w-72 w-1/2 shadow-sm max-w-xl hidden`}>
                    <Title isDarkMode={isDarkMode} >Finalizar Reserva</Title>
                    <div className="flex justify-center items-center gap-2 text-xl">
                        <p>Reserva:</p>
                        <input type="checkbox" onChange={() => setPaid(!paid)} className="w-5 h-5" />
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <Link to={"/admin/reservations"}>
                            <Boton isDarkMode={isDarkMode} >Volver</Boton>
                        </Link>
                        <Boton isDarkMode={isDarkMode} type="submit">Registrar</Boton>
                    </div>
                </form>
            </div>
        )
    } catch (error) {
        console.log(error.message);
        return <ErrorMessage isDarkMode={isDarkMode} />
    }
};