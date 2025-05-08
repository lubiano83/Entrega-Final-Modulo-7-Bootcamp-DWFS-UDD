import useLodges from "../../hook/useLodges";
import Title from "../Title";
import Boton from "../Boton";
import { useNavigate } from "react-router-dom";
import Message from "../Message";
import ErrorMessage from "../ErrorMessage";
import GoBack from "../GoBack";

export default function AddImageToLodge({ id, isDarkMode }) {

    const { addImageToLodge, setImage } = useLodges();
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const success = await addImageToLodge(id);
        if(success) return navigate("/admin/lodges");
    };

    try {
        return (
            <div className="flex flex-col justify-center items-center w-full">
                <Message isDarkMode={isDarkMode} className="flex xl:hidden">Vista no disponible en dispositivos moviles..</Message>
                <form onSubmit={handleSubmit} className={`${isDarkMode ? "bg-amber-100 shadow-amber-950" : "bg-green-100 shadow-green-950"} rounded-xl p-4 xl:flex flex-col justify-center items-center gap-4 min-w-72 w-1/2 shadow-sm max-w-xl hidden`}>
                    <Title isDarkMode={isDarkMode} >Agregar Imagen:</Title>
                    <input type="file" name="image" accept="image/*" onChange={(e) => setImage(e.target.files[0])} placeholder="Selecciona una imagen..." className={`border-2 ${isDarkMode ? "border-amber-950" : "border-green-950"} rounded-lg bg-white text-amber-950 px-2 py-1 w-full`} />
                    <div className="flex justify-center items-center gap-2">
                        <GoBack isDarkMode={isDarkMode} path={"/admin/lodges"} />
                        <Boton isDarkMode={isDarkMode} type="submit">Modificar</Boton>
                    </div>
                </form>
            </div>
        )
    } catch (error) {
        const path = import.meta.url;
        return (
            <ErrorMessage isDarkMode={isDarkMode} path={path} error={error} />
        )
    }
};