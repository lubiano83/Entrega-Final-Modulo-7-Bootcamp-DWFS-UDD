import { Link, useNavigate } from "react-router-dom";
import YourLodges from "../../components/admin/YourLodges";
import Boton from "../../components/Boton";
import { useEffect } from "react";
import useAuth from "../../hook/useAuth";

export default function YourLodgesPage() {

    const { logged } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!logged) {
            navigate("/");
        }
    }, [logged, navigate]);

    return (
        <div className="text-amber-950 h-full w-full flex flex-col justify-center items-center p-8 gap-4">
            <YourLodges />
            <Link to={"/admin"}>
                <Boton>Volver</Boton>
            </Link>
        </div>
    )
};