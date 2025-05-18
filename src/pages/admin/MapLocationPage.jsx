import { useNavigate, useParams } from "react-router-dom"
import MapLocation from "../../components/admin/MapLocation";
import useAuth from "../../hook/useAuth";
import { useEffect } from "react";

export default function MapLocationPage({ isDarkMode }) {

    const { id } = useParams();
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
            <MapLocation id={id} isDarkMode={isDarkMode} />
        </div>
    )
};