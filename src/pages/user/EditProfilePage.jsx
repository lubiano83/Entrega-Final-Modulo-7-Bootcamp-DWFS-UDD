import { useNavigate } from "react-router-dom";
import EditProfile from "../../components/user/EditProfile";
import useAuth from "../../hook/useAuth";
import { useEffect } from "react";

export default function EditProfilePage({ isDarkMode }) {

    const { logged } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!logged) {
            navigate("/");
        }
    }, [logged, navigate]);

    return (
        <div className={`${isDarkMode ? "text-amber-950" : "text-green-950"} h-full w-full flex flex-col justify-center items-center p-8 gap-4`}>
            <EditProfile isDarkMode={isDarkMode} />
        </div>
    )
};