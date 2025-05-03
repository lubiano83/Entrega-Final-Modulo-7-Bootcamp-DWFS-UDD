import useLodges from "../../hook/useLodges";
import { Link, useNavigate } from "react-router-dom";
import Title from "../Title";
import Boton from "../Boton";

export default function EditLodge({ id, isDarkMode }) {

    const { updateLodgeById, lodgesByUserId, hotel, setHotel, size, setSize, bedroom, setBedroom, bathroom, setBathroom, capacity, setCapacity, high, setHigh, medium, setMedium, low, setLow } = useLodges();
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const success = await updateLodgeById(id);
        if(success) return navigate("/admin/lodges");
    };
    
    return (
        <>
            { lodgesByUserId && (
                <form onSubmit={handleSubmit} className={`${isDarkMode ? "bg-amber-100 shadow-amber-950" : "bg-green-100 shadow-green-950"} rounded-xl p-4 flex flex-col justify-center items-center gap-4 min-w-72 w-1/2 shadow-sm max-w-xl`}>
                    <Title isDarkMode={isDarkMode} >Modificar Cabaña:</Title>
                    <input type="text" name="hotel" value={hotel} onChange={(e) => setHotel(e.target.value)} placeholder="Nombre de la cabaña.." className={`border-2 ${isDarkMode ? "border-amber-950 text-amber-950" : "border-green-950 text-green-950"} rounded-lg bg-white px-2 py-1 w-full`} />
                        <input type="number" name="size" value={size} onChange={(e) => setSize(e.target.value)} placeholder="Tamaño en mt2.." className={`border-2 ${isDarkMode ? "border-amber-950 text-amber-950" : "border-green-950 text-green-950"} rounded-lg bg-white px-2 py-1 w-full`} />
                        <input type="number" name="bedroom" value={bedroom} onChange={(e) => setBedroom(e.target.value)} placeholder="Numero de piezas.." className={`border-2 ${isDarkMode ? "border-amber-950 text-amber-950" : "border-green-950 text-green-950"} rounded-lg bg-white px-2 py-1 w-full`} />
                        <input type="number" name="bathroom" value={bathroom} onChange={(e) => setBathroom(e.target.value)} placeholder="Numero de baños.." className={`border-2 ${isDarkMode ? "border-amber-950 text-amber-950" : "border-green-950 text-green-950"} rounded-lg bg-white px-2 py-1 w-full`} />
                        <input type="number" name="capacity" value={capacity} onChange={(e) => setCapacity(e.target.value)} placeholder="Maximo de personas.." className={`border-2 ${isDarkMode ? "border-amber-950 text-amber-950" : "border-green-950 text-green-950"} rounded-lg bg-white px-2 py-1 w-full`} />
                        <input type="number" name="high" value={high} onChange={(e) => setHigh(e.target.value)} placeholder="Precio temporada alta.." className={`border-2 ${isDarkMode ? "border-amber-950 text-amber-950" : "border-green-950 text-green-950"} rounded-lg bg-white px-2 py-1 w-full`} />
                        <input type="number" name="medium" value={medium} onChange={(e) => setMedium(e.target.value)} placeholder="Precio temporada media.." className={`border-2 ${isDarkMode ? "border-amber-950 text-amber-950" : "border-green-950 text-green-950"} rounded-lg bg-white px-2 py-1 w-full`} />
                        <input type="number" name="low" value={low} onChange={(e) => setLow(e.target.value)} placeholder="Precio temporada baja.." className={`border-2 ${isDarkMode ? "border-amber-950 text-amber-950" : "border-green-950 text-green-950"} rounded-lg bg-white px-2 py-1 w-full`} />
                        <div className="flex justify-center items-center gap-2">
                            <Link to={"/admin/lodges"}>
                                <Boton isDarkMode={isDarkMode} >Volver</Boton>
                            </Link>
                            <Boton isDarkMode={isDarkMode} type="submit">Modificar</Boton>
                        </div>
                </form>
            )}
        </>
    )
};