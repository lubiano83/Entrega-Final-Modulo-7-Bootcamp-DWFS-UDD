import { useNavigate } from "react-router-dom";
import ProfileImage from "../../components/user/ProfileImage";
import useAuth from "../../hook/useAuth";
import { useEffect } from "react";

export default function ProfileImagePage({ isDarkMode }) {

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
            <ProfileImage isDarkMode={isDarkMode} />
        </div>
    )
};