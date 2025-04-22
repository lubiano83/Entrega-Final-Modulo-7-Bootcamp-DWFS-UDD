import Logo from "../Logo";
import SvgImage from "./SvgImage";
import useUser from "../../hook/useUser";
import { Link } from "react-router-dom";

export default function Navbar() {

    const { user } = useUser();

    return (
        <div className="flex justify-evenly items-center p-4 bg-amber-700 gap-2">
            <Logo />
            <SvgImage src={"/sun-4-svgrepo-com.svg"} />
            <Link to={"/profile"}>
                { user ? <img src={user.image} alt="imagen usuario" width={30} height={30} className="rounded-2xl hover:scale-110 cursor-pointer" /> : <SvgImage src={"/user-circle-svgrepo-com-white.svg"} /> }
            </Link>
        </div>
    )
};