import useAuth from "../../hook/useAuth";
import { Link, useNavigate } from "react-router-dom";
import Boton from "../Boton";
import Title from "../Title";
import ErrorMessage from "../ErrorMessage";

export default function ProfileImage({ isDarkMode }) {

    const { changeImageById, setImage } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const success = await changeImageById();
        if(success) return navigate("/profile");
    };

    try {
        return (
            <form onSubmit={handleSubmit} className={`${isDarkMode ? "bg-amber-100 shadow-amber-950" : "bg-green-100 shadow-green-950"} rounded-xl p-8 flex flex-col justify-center items-center gap-4 min-w-72 w-1/2 shadow-sm max-w-xl`}>
                <Title isDarkMode={isDarkMode} >Cambiar Imagen:</Title>
                <input type="file" name="image" accept="image/*" onChange={(e) => setImage(e.target.files[0])} placeholder="Selecciona una imagen..." className={`border-2 ${isDarkMode ? "border-amber-950 text-amber-950" : "border-green-950 text-green-950"} rounded-lg bg-white px-2 py-1 w-full`} />
                <div className="flex justify-center items-center gap-2">
                    <Link to={"/profile"}>
                        <Boton isDarkMode={isDarkMode} >Volver</Boton>
                    </Link>
                    <Boton isDarkMode={isDarkMode} type="submit">Modificar</Boton>
                </div>
            </form>
        )
    } catch (error) {
         return <ErrorMessage isDarkMode={isDarkMode} error={error} />
    }
};