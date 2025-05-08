import { useNavigate, useParams } from "react-router-dom";
import EditLodge from "../../components/admin/EditLodge";
import useAuth from "../../hook/useAuth";
import { useEffect } from "react";

export default function EditLodgePage({ isDarkMode }) {

    const { id } = useParams();
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
            <EditLodge id={id} isDarkMode={isDarkMode} />
        </div>
    )
};