import useLodges from "../../hook/useLodges";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../ErrorMessage";
import Message from "../Message";
import Title from "../Title";
import Boton from "../Boton";
import GoBack from "../GoBack";

export default function MapLocation({ isDarkMode, id }) {

    const { changeLocation, mapUrl, setMapUrl } = useLodges();
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const success = await changeLocation(id);
        if(success) return navigate("/admin/lodges");
    };

    try {
        return (
            <div className="flex flex-col justify-center items-center w-full">
                <Message isDarkMode={isDarkMode} className="flex xl:hidden">Vista no disponible en dispositivos moviles..</Message>
                <form onSubmit={handleSubmit} className={`${isDarkMode ? "bg-amber-100 shadow-amber-950" : "bg-green-100 shadow-green-950"} rounded-xl p-4 xl:flex flex-col justify-center items-center gap-4 min-w-72 w-1/2 shadow-sm max-w-xl hidden`}>
                    <Title isDarkMode={isDarkMode} >Agregar Ubicación:</Title>
                    <input type="text" name="mapUrl" value={mapUrl} onChange={(e) => setMapUrl(e.target.value)} placeholder="Ubicacion de Google Maps.." className={`border-2 ${isDarkMode ? "border-amber-950 text-amber-950" : "border-green-950 text-green-950"} rounded-lg bg-white px-2 py-1 w-full`} />
                    <div className="flex justify-center items-center gap-2">
                        <GoBack isDarkMode={isDarkMode} path={"/admin/lodges"} />
                        <Boton isDarkMode={isDarkMode} type="submit">Modificar</Boton>
                    </div>
                </form>
            </div>
        )
    } catch (error) {
        const url = import.meta.url;
        return (
            <ErrorMessage isDarkMode={isDarkMode} path={"/admin/lodges"} error={error} url={url} />
        )
    }
};