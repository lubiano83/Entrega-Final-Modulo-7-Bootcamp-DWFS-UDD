import { useEffect } from "react";
import useAuth from "../../hook/useAuth";
import { useNavigate } from "react-router-dom";
import YourRecords from "../../components/admin/YourRecords";

export default function YourRecordsPage({ isDarkMode }) {

    const { logged, token, setLogged } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!logged || !token) {
            setLogged(false);
            navigate("/");
        }
    }, [logged, navigate, token]);

    return (
        <div className={`${isDarkMode ? "text-amber-950" : "text-green-950"} h-full w-full flex flex-col justify-center items-center p-8 gap-4`}>
            <YourRecords isDarkMode={isDarkMode} />
        </div>
    )
};