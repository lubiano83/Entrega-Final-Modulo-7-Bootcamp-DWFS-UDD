import { useNavigate } from "react-router-dom";
import YourLodges from "../../components/admin/YourLodges";
import { useEffect } from "react";
import useAuth from "../../hook/useAuth";

export default function YourLodgesPage({ isDarkMode }) {

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
            <YourLodges isDarkMode={isDarkMode} />
        </div>
    )
};