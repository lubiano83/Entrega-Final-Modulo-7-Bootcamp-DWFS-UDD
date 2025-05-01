import Title from "../Title";
import useReservations from "../../hook/useReservations";
import { Link, useNavigate } from "react-router-dom";
import Boton from "../Boton";

export default function Reservation({ lodgeId, userId }) {
    
    const { createReservation, people, setPeople, arrive, setArrive, leave, setLeave } = useReservations();
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const success = await createReservation(lodgeId, userId);
        if(success) return navigate("/");
    };
    
    return (
        <form onSubmit={handleSubmit} className="bg-amber-100 rounded-xl p-4 flex flex-col justify-center items-center gap-4 min-w-72 w-1/2 shadow-sm shadow-amber-950 max-w-xl">
            <Title>Reservar:</Title>
            <input type="number" name="people" value={people} onChange={(e) => setPeople(e.target.value)} placeholder="Cantidad de personas.." className="border-2 border-amber-950 rounded-lg bg-white text-amber-950 px-2 py-1 w-full" />
            <input type="text" name="arrive" value={arrive} onChange={(e) => setArrive(e.target.value)} placeholder="Fecha de llegada.. (YYYY-MM-DD)" className="border-2 border-amber-950 rounded-lg bg-white text-amber-950 px-2 py-1 w-full" />
            <input type="text" name="leave" value={leave} onChange={(e) => setLeave(e.target.value)} placeholder="Fecha de salida.. (YYYY-MM-DD)" className="border-2 border-amber-950 rounded-lg bg-white text-amber-950 px-2 py-1 w-full" />
            <div className="flex justify-center items-center gap-2">
                <Link to={`/lodges/${lodgeId}`}>
                    <Boton>Volver</Boton>
                </Link>
                <Boton type="submit">Registrar</Boton>
            </div>
        </form>
    )
};