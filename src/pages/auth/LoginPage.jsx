import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/auth/LoginForm";
import useAuth from "../../hook/useAuth";
import { useEffect } from "react";

export default function LoginPage({ isDarkMode }) {

    const { logged } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (logged) {
            navigate("/");
        }
    }, [logged, navigate]);

    return (
        <div className={`${isDarkMode ? "text-amber-950" : "text-green-950"} h-full w-full flex flex-col justify-center items-center p-8 gap-4`}>
            <LoginForm isDarkMode={isDarkMode} />
        </div>
    )
};