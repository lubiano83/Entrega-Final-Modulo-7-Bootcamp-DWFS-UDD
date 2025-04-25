import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { useNavigate } from "react-router-dom";

export default function Menu() {

    const { logoutUser, logged } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logoutUser();
        navigate("/");
    }; 

    return (
        <aside className="bg-amber-500 text-white flex justify-evenly items-center py-1 px-2 xl:w-56 xl:flex-col xl:bg-amber-700">
            <Link to={"/"}><p className="cursor-pointer hover:text-amber-950">Inicio</p></Link>
            { logged ? <Link to={"/admin"}><p className="cursor-pointer hover:text-amber-950">Admin</p></Link> : "" }
            { logged ?  <Link to={"/lodges"}><p className="cursor-pointer hover:text-amber-950">Lodges</p></Link> : "" }
            { logged ? "" : <Link to={"/register"}><p className="cursor-pointer hover:text-amber-950">Register</p></Link> }
            { logged ? "" : <Link to={"/login"}><p className="cursor-pointer hover:text-amber-950">Login</p></Link> }
            { logged ? <p className="cursor-pointer hover:text-amber-950" onClick={() => handleLogout()}>Logout</p> : "" }
        </aside>
    )
};