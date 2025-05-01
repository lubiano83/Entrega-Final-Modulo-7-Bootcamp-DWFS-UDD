import { Link, useNavigate, useParams } from "react-router-dom";
import ReservationFinish from "../../components/admin/ReservationFinish";
import Boton from "../../components/Boton";
import useAuth from "../../hook/useAuth";
import { useEffect } from "react";

export default function ReservationFinishPage() {

    const { logged } = useAuth();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (!logged) {
            navigate("/");
        }
    }, [logged, navigate]);

    return (
        <div className="text-amber-950 h-full w-full flex flex-col justify-center items-center p-8 gap-4">
            <ReservationFinish id={id} />
            <Link to={"/admin/reservations"} className="flex xl:hidden">
                <Boton>Volver</Boton>
            </Link>
        </div>
    )
};