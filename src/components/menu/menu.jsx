import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { useNavigate } from "react-router-dom";

export default function Menu({ isDarkMode }) {

    const { logoutUser, logged } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logoutUser();
        navigate("/");
    };

    return (
        <div className={`flex 2xl:flex-col 2xl:h-full justify-around items-center 2xl:w-56 w-full gap-2 ${isDarkMode ? "bg-amber-500 2xl:bg-amber-700" : "bg-green-500 2xl:bg-green-700"} text-white p-1`}>
            <Link to={"/"}><p className={`cursor-pointer ${isDarkMode ? "hover:text-amber-950" : "hover:text-green-950"} font-bold`}>About</p></Link>
            { logged ? <Link to={"/admin"}><p className={`cursor-pointer ${isDarkMode ? "hover:text-amber-950" : "hover:text-green-950"} font-bold`}>Admin</p></Link> : "" }
            <Link to={"/lodges"}><p className={`cursor-pointer ${isDarkMode ? "hover:text-amber-950" : "hover:text-green-950"} font-bold`}>Lodges</p></Link>
            { logged ? "" : <Link to={"/login"}><p className={`cursor-pointer ${isDarkMode ? "hover:text-amber-950" : "hover:text-green-950"} font-bold`}>Login</p></Link> }
            { logged ? "" : <Link to={"/register"}><p className={`cursor-pointer ${isDarkMode ? "hover:text-amber-950" : "hover:text-green-950"} font-bold`}>Register</p></Link> }
            { logged ? <p className={`cursor-pointer ${isDarkMode ? "hover:text-amber-950" : "hover:text-green-950"} font-bold`} onClick={() => handleLogout()}>Logout</p> : "" }
        </div>
    )
};