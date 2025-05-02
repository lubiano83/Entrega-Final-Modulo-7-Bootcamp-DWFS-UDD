import { useEffect } from "react";
import useAuth from "../../hook/useAuth";
import { Link, useNavigate } from "react-router-dom";
import Boton from "../../components/Boton";
import YourRecords from "../../components/admin/YourRecords";

export default function YourRecordsPage() {

    const { logged } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
            if (!logged) {
                navigate("/");
            }
        }, [logged, navigate]);

    return (
        <div className="text-amber-950 h-full w-full flex flex-col justify-center items-center p-8 gap-4">
            <YourRecords />
            <Link to={"/admin"}>
                <Boton>Volver</Boton>
            </Link>
        </div>
    )
};