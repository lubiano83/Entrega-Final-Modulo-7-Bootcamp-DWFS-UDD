import { Link, useLocation, useNavigate } from "react-router-dom";
import ReservationFinish from "../../components/admin/ReservationFinish";
import Boton from "../../components/Boton";
import useAuth from "../../hook/useAuth";
import { useEffect } from "react";

export default function ReservationFinishPage({ isDarkMode }) {

    const location = useLocation();
    const item = location.state.item;
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
            <ReservationFinish item={item} isDarkMode={isDarkMode} />
            <Link to={"/admin/reservations"} className="flex xl:hidden">
                <Boton isDarkMode={isDarkMode} >Volver</Boton>
            </Link>
        </div>
    )
};