import { Link, useNavigate } from "react-router-dom";
import YourReservations from "../../components/admin/YourReservations";
import useAuth from "../../hook/useAuth";
import { useEffect } from "react";
import Boton from "../../components/Boton";

export default function YourReservationsPage() {

    const { logged } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!logged) {
            navigate("/");
        }
    }, [logged, navigate]);

    return (
        <div className="text-amber-950 h-full w-full flex flex-col justify-center items-center p-8 gap-4">
            <YourReservations />
            <Link to={"/admin"}>
                <Boton>Volver</Boton>
            </Link>
        </div>
    )
};