import Logo from "../Logo";
import SvgImage from "../SvgImage";
import useAuth from "../../hook/useAuth";
import { Link } from "react-router-dom";

export default function Navbar({ toggleDarkMode, isDarkMode }) {

    const { user, logged } = useAuth();

    return (
        <div className={`flex justify-evenly items-center p-4 ${isDarkMode ? "bg-amber-700" : "bg-green-700" } gap-2`}>
            <Logo isDarkMode={isDarkMode} />
            <SvgImage src={"/sun-4-svgrepo-com.svg"} fnc={() => toggleDarkMode()}/>
            { !logged ?
                <SvgImage src={"/user-circle-svgrepo-com-white.svg"} fnc={() => alert("Primero debes iniciar sesion.")}/>
                :
                <Link to={"/profile"}>
                    { user?.image ? <img src={user.image} alt="imagen usuario" width={30} height={30} className="rounded-2xl hover:scale-110 cursor-pointer bg-white" /> : <SvgImage src={"/user-circle-svgrepo-com-white.svg"} /> }
                </Link>
            }
        </div>
    )
};