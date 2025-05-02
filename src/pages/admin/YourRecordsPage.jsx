import { useEffect } from "react";
import useAuth from "../../hook/useAuth";
import { Link, useNavigate } from "react-router-dom";
import Boton from "../../components/Boton";
import YourRecords from "../../components/admin/YourRecords";

export default function YourRecordsPage({ isDarkMode }) {

    const { logged } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
            if (!logged) {
                navigate("/");
            }
        }, [logged, navigate]);

    return (
        <div className={`${isDarkMode ? "text-amber-950" : "text-green-950"} h-full w-full flex flex-col justify-center items-center p-8 gap-4`}>
            <YourRecords isDarkMode={isDarkMode} />
            <Link to={"/admin"}>
                <Boton isDarkMode={isDarkMode} >Volver</Boton>
            </Link>
        </div>
    )
};