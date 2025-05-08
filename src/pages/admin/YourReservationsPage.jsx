import { useNavigate } from "react-router-dom";
import YourReservations from "../../components/admin/YourReservations";
import useAuth from "../../hook/useAuth";
import { useEffect } from "react";

export default function YourReservationsPage({ isDarkMode }) {

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
            <YourReservations isDarkMode={isDarkMode} />
        </div>
    )
};