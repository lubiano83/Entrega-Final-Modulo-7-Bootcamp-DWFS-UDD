import { Link, useNavigate } from "react-router-dom";
import CreateLodge from "../../components/admin/CreateLodge";
import useAuth from "../../hook/useAuth";
import { useEffect } from "react";
import Boton from "../../components/Boton";

export default function CreateLodgePage({ isDarkMode }) {

    const { logged, token, setLogged } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            setLogged(false);
            navigate("/");
        }
    }, [logged, navigate, token]);

    return (
        <div className={`${isDarkMode ? "text-amber-950" : "text-green-950"} h-full w-full flex flex-col justify-center items-center p-8 gap-4`}>
            <CreateLodge isDarkMode={isDarkMode} />
            <Link to={"/admin"} className="flex xl:hidden">
                <Boton isDarkMode={isDarkMode} >Volver</Boton>
            </Link>
        </div>
    )
};