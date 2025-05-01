import { useNavigate } from "react-router-dom";
import AddImageToLodge from "../../components/admin/AddImageToLodge";
import useAuth from "../../hook/useAuth";
import { useEffect } from "react";

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
        </div>
    )
};