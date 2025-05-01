import { Link, useNavigate } from "react-router-dom";
import Title from "../../components/Title";
import useAuth from "../../hook/useAuth";
import { useEffect } from "react";


export default function AdminPage() {

    const { logged } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!logged) {
            navigate("/");
        }
    }, [logged, navigate]);

    return (
        <div className="text-amber-950 h-full w-full flex flex-col justify-center items-center p-8 text-center gap-4">
            <Title>Administración:</Title>
            <div className="flex justify-center items-center flex-wrap gap-4 text-lg">
                <Link to={"/admin/lodges"}>
                    <div className="bg-amber-100 px-4 py-2 rounded-xl shadow-sm shadow-amber-950 font-bold">Tus Cabañas</div>
                </Link>
                <Link to={"/admin/lodges/create"}>
                    <div className="bg-amber-100 px-4 py-2 rounded-xl shadow-sm shadow-amber-950 font-bold">Crear Cabaña</div>
                </Link>
                <Link to={"/admin/reservations"}>
                    <div className="bg-amber-100 px-4 py-2 rounded-xl shadow-sm shadow-amber-950 font-bold">Tus Reservas</div>
                </Link>
            </div>
        </div>
    )
};