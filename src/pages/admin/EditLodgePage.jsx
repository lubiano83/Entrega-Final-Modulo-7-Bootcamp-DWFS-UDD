import { useNavigate, useParams } from "react-router-dom";
import EditLodge from "../../components/admin/EditLodge";
import useAuth from "../../hook/useAuth";
import { useEffect } from "react";

export default function EditLodgePage() {

    const { logged } = useAuth();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!logged) {
            navigate("/");
        }
    }, [logged, navigate]);

    return (
        <div className="text-amber-950 h-full w-full flex flex-col justify-center items-center p-8">
            <EditLodge id={id} />
        </div>
    )
};