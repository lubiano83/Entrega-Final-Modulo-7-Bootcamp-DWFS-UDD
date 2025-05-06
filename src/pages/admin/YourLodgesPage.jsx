import { useNavigate } from "react-router-dom";
import YourLodges from "../../components/admin/YourLodges";
import { useEffect } from "react";
import useAuth from "../../hook/useAuth";

export default function YourLodgesPage({ isDarkMode }) {

    const { logged } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!logged) {
            navigate("/");
        }
    }, [logged, navigate]);

    return (
        <div className={`${isDarkMode ? "text-amber-950" : "text-green-950"} h-full w-full flex flex-col justify-center items-center p-8 gap-4`}>
            <YourLodges isDarkMode={isDarkMode} />
        </div>
    )
};