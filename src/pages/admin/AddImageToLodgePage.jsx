import { Link, useNavigate, useParams } from "react-router-dom";
import AddImageToLodge from "../../components/admin/AddImageToLodge";
import useAuth from "../../hook/useAuth";
import { useEffect } from "react";
import Boton from "../../components/Boton";

export default function AddImageToLodgePage({ isDarkMode }) {

    const { logged, token, setLogged } = useAuth();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!logged || !token) {
            setLogged(false);
            navigate("/");
        }
    }, [logged, navigate, token]);

    return (
        <div className={`${isDarkMode ? "text-amber-950" : "text-green-950"} h-full w-full flex flex-col justify-center items-center p-8 gap-4`}>
            <AddImageToLodge id={id} isDarkMode={isDarkMode} />
            <Link to={"/admin"} className="flex xl:hidden">
                <Boton isDarkMode={isDarkMode} >Volver</Boton>
            </Link>
        </div>
    )
};