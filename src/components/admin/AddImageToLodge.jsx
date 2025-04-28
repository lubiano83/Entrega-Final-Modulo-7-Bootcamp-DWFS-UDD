import useLodges from "../../hook/useLodges";
import { Link } from "react-router-dom";
import Title from "../Title";
import Boton from "../Boton";
import { useNavigate, useParams } from "react-router-dom";

export default function AddImageToLodge() {

    const { addImageToLodge, setImage } = useLodges();
    const { id } = useParams();
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const success = await addImageToLodge(id);
        if(success) return navigate("/admin/lodges");
    };

    return (
        <form onSubmit={handleSubmit} className="bg-amber-100 rounded-xl p-8 flex flex-col justify-center items-center gap-4 min-w-72 w-1/2 shadow-sm shadow-amber-950 max-w-xl">
            <Title>Agregar Imagen:</Title>
            <input type="file" name="image" accept="image/*" onChange={(e) => setImage(e.target.files[0])} placeholder="Selecciona una imagen..." className="border-2 border-amber-950 rounded-lg bg-white text-amber-950 px-2 py-1 w-full" />
            <div className="flex justify-center items-center gap-2">
                <Link to={"/admin/lodges"}>
                    <Boton>Volver</Boton>
                </Link>
                <Boton type="submit">Modificar</Boton>
            </div>
        </form>
    )
};