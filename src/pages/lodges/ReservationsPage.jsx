import Reservation from "../../components/lodges/Reservation";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { useEffect } from "react";

export default function ReservationsPage({ isDarkMode }) {

    const { lodgeId, userId } = useParams();
    console.log(userId)
    const { logged } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!logged) {
            alert("Primero debes iniciar sesion.");
            navigate(`/lodges/${lodgeId}`);
        }
    }, [logged, navigate]);

    return (
        <div className={`${isDarkMode ? "text-amber-950" : "text-green-950"} h-full w-full flex flex-col justify-center items-center p-8 gap-4`}>
            <Reservation lodgeId={lodgeId} userId={userId} isDarkMode={isDarkMode} />
        </div>
    )
};