import { useEffect } from "react";
import DataAnalysis from "../../components/admin/DataAnalysis";
import useRecords from "../../hook/useRecords";
import useAuth from "../../hook/useAuth";
import { useNavigate } from "react-router-dom";

export default function DataAnalysisPage({ isDarkMode }) {

    const { recordsByUserId } = useRecords();
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
            <DataAnalysis isDarkMode={isDarkMode} recordsByUserId={recordsByUserId} />
        </div>
    )
};