import useLodges from "../../hook/useLodges";
import { Link, useNavigate } from "react-router-dom";
import Title from "../Title";
import Boton from "../Boton";
import Message from "../Message";

export default function EditLodge({ id }) {

    const { updateLodgeById, lodgesByUserId, hotel, setHotel, size, setSize, bedroom, setBedroom, bathroom, setBathroom, capacity, setCapacity, high, setHigh, medium, setMedium, low, setLow } = useLodges();
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const success = await updateLodgeById(id);
        if(success) return navigate("/admin/lodges");
    };
    
    try {
        return (
            <>
                { lodgesByUserId && (
                    <form onSubmit={handleSubmit} className="bg-amber-100 rounded-xl p-4 flex flex-col justify-center items-center gap-4 min-w-72 w-1/2 shadow-sm shadow-amber-950 max-w-xl">
                        <Title>Modificar Cabaña:</Title>
                        <input type="text" name="hotel" value={hotel} onChange={(e) => setHotel(e.target.value)} placeholder="Nombre de la cabaña.." className="border-2 border-amber-950 rounded-lg bg-white text-amber-950 px-2 py-1 w-full" />
                            <input type="number" name="size" value={size} onChange={(e) => setSize(e.target.value)} placeholder="Tamaño en mt2.." className="border-2 border-amber-950 rounded-lg bg-white text-amber-950 px-2 py-1 w-full" />
                            <input type="number" name="bedroom" value={bedroom} onChange={(e) => setBedroom(e.target.value)} placeholder="Numero de piezas.." className="border-2 border-amber-950 rounded-lg bg-white text-amber-950 px-2 py-1 w-full" />
                            <input type="number" name="bathroom" value={bathroom} onChange={(e) => setBathroom(e.target.value)} placeholder="Numero de baños.." className="border-2 border-amber-950 rounded-lg bg-white text-amber-950 px-2 py-1 w-full" />
                            <input type="number" name="capacity" value={capacity} onChange={(e) => setCapacity(e.target.value)} placeholder="Maximo de personas.." className="border-2 border-amber-950 rounded-lg bg-white text-amber-950 px-2 py-1 w-full" />
                            <input type="number" name="high" value={high} onChange={(e) => setHigh(e.target.value)} placeholder="Precio temporada alta.." className="border-2 border-amber-950 rounded-lg bg-white text-amber-950 px-2 py-1 w-full" />
                            <input type="number" name="medium" value={medium} onChange={(e) => setMedium(e.target.value)} placeholder="Precio temporada media.." className="border-2 border-amber-950 rounded-lg bg-white text-amber-950 px-2 py-1 w-full" />
                            <input type="number" name="low" value={low} onChange={(e) => setLow(e.target.value)} placeholder="Precio temporada baja.." className="border-2 border-amber-950 rounded-lg bg-white text-amber-950 px-2 py-1 w-full" />
                            <div className="flex justify-center items-center gap-2">
                                <Link to={"/admin/lodges"}>
                                    <Boton>Volver</Boton>
                                </Link>
                                <Boton type="submit">Modificar</Boton>
                            </div>
                    </form>
                )}
            </>
        )
    } catch (error) {
        <ErrorMessage error={error} />
    }
};