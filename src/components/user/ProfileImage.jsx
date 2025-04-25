import useAuth from "../../hook/useAuth";
import { Link, useNavigate } from "react-router-dom";
import Boton from "../Boton";
import Title from "../Title";

export default function ProfileImage() {

    const { changeImageById, setImage } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const success = await changeImageById();
        if(success) return navigate("/profile");
    };

    return (
        <form onSubmit={handleSubmit} className="bg-amber-100 rounded-xl p-8 flex flex-col justify-center items-center gap-4 min-w-72 w-1/2 shadow-sm shadow-amber-950 max-w-xl">
            <Title>Cambiar Imagen:</Title>
            <input type="file" name="image" accept="image/*" onChange={(e) => setImage(e.target.files[0])} placeholder="Selecciona una imagen..." className="border-2 border-amber-950 rounded-lg bg-white text-amber-950 px-2 py-1 w-full" />
            <div className="flex justify-center items-center gap-2">
                <Link to={"/profile"}>
                    <Boton>Volver</Boton>
                </Link>
                <Boton type="submit">Modificar</Boton>
            </div>
        </form>
    )
};