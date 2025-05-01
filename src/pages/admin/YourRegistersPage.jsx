import { useEffect } from "react";
import YourRegisters from "../../components/admin/YourRegisters";
import useAuth from "../../hook/useAuth";
import { Link, useNavigate } from "react-router-dom";
import Boton from "../../components/Boton";

export default function YourRegistersPage() {

    const { logged } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
            if (!logged) {
                navigate("/");
            }
        }, [logged, navigate]);

    return (
        <div className="text-amber-950 h-full w-full flex flex-col justify-center items-center p-8 gap-4">
            <YourRegisters />
            <Link to={"/admin"}>
                <Boton>Volver</Boton>
            </Link>
        </div>
    )
};