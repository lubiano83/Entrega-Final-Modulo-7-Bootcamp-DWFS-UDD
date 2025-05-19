import Title from "../Title";
import useReservations from "../../hook/useReservations";
import { Link, useNavigate } from "react-router-dom";
import Boton from "../Boton";
import ErrorMessage from "../ErrorMessage";
import GoBack from "../GoBack";

export default function Reservation({ lodgeId, userId, isDarkMode }) {
    
    const { createReservation, people, setPeople, arrive, setArrive, leave, setLeave } = useReservations();
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const success = await createReservation(lodgeId, userId);
        if(success) return navigate("/lodges");
    };

    try {
        return (
            <form onSubmit={() => handleSubmit()} className={`${isDarkMode ? "bg-amber-100 shadow-amber-950" : "bg-green-100 shadow-green-950"} rounded-xl p-4 flex flex-col justify-center items-center gap-4 min-w-72 w-1/2 shadow-sm max-w-xl`}>
                <Title isDarkMode={isDarkMode}>Reservar:</Title>
                <input type="number" name="people" value={people} onChange={(e) => setPeople(e.target.value)} placeholder="Cantidad de personas.." className={`border-2 ${isDarkMode ? "border-amber-950 text-amber-950" : "border-green-950 text-green-950"} rounded-lg bg-white px-2 py-1 w-full`} />
                <input type="text" name="arrive" value={arrive} onChange={(e) => setArrive(e.target.value)} placeholder="Fecha de llegada.. (YYYY-MM-DD)" className={`border-2 ${isDarkMode ? "border-amber-950 text-amber-950" : "border-green-950 text-green-950"} rounded-lg bg-white px-2 py-1 w-full`} />
                <input type="text" name="leave" value={leave} onChange={(e) => setLeave(e.target.value)} placeholder="Fecha de salida.. (YYYY-MM-DD)" className={`border-2 ${isDarkMode ? "border-amber-950 text-amber-950" : "border-green-950 text-green-950"} rounded-lg bg-white px-2 py-1 w-full`} />
                <div className="flex justify-center items-center gap-2">
                    <GoBack isDarkMode={isDarkMode} path={`/lodges/${lodgeId}`} />
                    <Boton isDarkMode={isDarkMode} type="submit">Registrar</Boton>
                </div>
            </form>
        )
    } catch (error) {
        const url = import.meta.url;
        return <ErrorMessage path={`/lodges/${lodgeId}`} error={error} isDarkMode={isDarkMode} url={url} />
    }
};