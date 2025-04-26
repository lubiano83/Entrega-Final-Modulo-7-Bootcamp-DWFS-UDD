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
        <div className="flex justify-around items-center w-full gap-2">
            <Link to={"/"}><p className="cursor-pointer hover:text-amber-950">Inicio</p></Link>
            { logged ? <Link to={"/admin"}><p className="cursor-pointer hover:text-amber-950">Admin</p></Link> : "" }
            { logged ?  <Link to={"/lodges"}><p className="cursor-pointer hover:text-amber-950">Lodges</p></Link> : "" }
            { logged ? "" : <Link to={"/login"}><p className="cursor-pointer hover:text-amber-950">Login</p></Link> }
            { logged ? "" : <Link to={"/register"}><p className="cursor-pointer hover:text-amber-950">Register</p></Link> }
            { logged ? <p className="cursor-pointer hover:text-amber-950" onClick={() => handleLogout()}>Logout</p> : "" }
        </div>
    )
};