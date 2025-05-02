import { Link, useLocation, useNavigate } from "react-router-dom";
import ReservationFinish from "../../components/admin/ReservationFinish";
import Boton from "../../components/Boton";
import useAuth from "../../hook/useAuth";
import { useEffect } from "react";

export default function ReservationFinishPage() {

    const { logged } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const item = location.state.item;

    useEffect(() => {
        if (!logged) {
            navigate("/");
        }
    }, [logged, navigate]);

    return (
        <div className="text-amber-950 h-full w-full flex flex-col justify-center items-center p-8 gap-4">
            <ReservationFinish item={item} />
            <Link to={"/admin/reservations"} className="flex xl:hidden">
                <Boton>Volver</Boton>
            </Link>
        </div>
    )
};