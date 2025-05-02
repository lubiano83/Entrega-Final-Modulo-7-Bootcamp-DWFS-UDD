import Reservation from "../../components/lodges/Reservation";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { useEffect } from "react";

export default function ReservationsPage() {

    const { lodgeId, userId } = useParams();
    const { logged } = useAuth();
    const navigate = useNavigate();

    console.log(lodgeId)

    useEffect(() => {
        if (!logged) {
            navigate(`/lodges/${lodgeId}`);
            alert("Primero debes iniciar sesion.")
        }
    }, [logged, navigate]);

    return (
        <div className="text-amber-950 h-full w-full flex flex-col justify-center items-center p-8">
            <Reservation lodgeId={lodgeId} userId={userId} />
        </div>
    )
};