import { Link, useNavigate } from "react-router-dom";
import AddImageToLodge from "../../components/admin/AddImageToLodge";
import useAuth from "../../hook/useAuth";
import { useEffect } from "react";
import Boton from "../../components/Boton";

export default function AddImageToLodgePage() {

    const { logged } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!logged) {
            navigate("/");
        }
    }, [logged, navigate]);

    return (
        <div className="text-amber-950 h-full w-full flex flex-col justify-center items-center p-8 text-center gap-4">
            <AddImageToLodge />
            <Link to={"/admin"} className="flex xl:hidden">
                <Boton>Volver</Boton>
            </Link>
        </div>
    )
};