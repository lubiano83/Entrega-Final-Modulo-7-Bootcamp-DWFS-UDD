import { Link, useNavigate } from "react-router-dom";
import Title from "../../components/Title";
import useAuth from "../../hook/useAuth";
import { useEffect } from "react";

export default function AdminPage({ isDarkMode }) {

    
    const { logged, token, setLogged } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!logged || !token) {
            setLogged(false);
            navigate("/");
        }
    }, [logged, navigate]);

    return (
        <div className={`${isDarkMode ? "text-amber-950" : "text-green-950"} h-full w-full flex flex-col justify-center items-center p-8 gap-4`}>
            <Title isDarkMode={isDarkMode} >Administración:</Title>
            <div className="flex flex-col justify-center items-center flex-wrap gap-4 text-lg">
                <div className="flex justify-center items-center gap-4 flex-wrap">
                    <Link to={"/admin/lodges/create"}>
                        <div className={`${isDarkMode ? "bg-amber-100 shadow-amber-950" : "bg-green-100 shadow-green-950"} px-4 py-2 rounded-xl shadow-sm font-bold`}>Crear Cabaña</div>
                    </Link>
                    <Link to={"/admin/lodges"}>
                        <div className={`${isDarkMode ? "bg-amber-100 shadow-amber-950" : "bg-green-100 shadow-green-950"} px-4 py-2 rounded-xl shadow-sm font-bold`}>Tus Cabañas</div>
                    </Link>
                    <Link to={"/admin/reservations"}>
                        <div className={`${isDarkMode ? "bg-amber-100 shadow-amber-950" : "bg-green-100 shadow-green-950"} px-4 py-2 rounded-xl shadow-sm font-bold`}>Tus Reservas</div>
                    </Link>
                    <Link to={"/admin/records"}>
                        <div className={`${isDarkMode ? "bg-amber-100 shadow-amber-950" : "bg-green-100 shadow-green-950"} px-4 py-2 rounded-xl shadow-sm font-bold`}>Tus Registros</div>
                    </Link>
                    <Link to={"/admin/analytics"}>
                        <div className={`${isDarkMode ? "bg-amber-100 shadow-amber-950" : "bg-green-100 shadow-green-950"} px-4 py-2 rounded-xl shadow-sm font-bold`}>Analsis de Datos</div>
                    </Link>
                </div>
            </div>
        </div>
    )
};