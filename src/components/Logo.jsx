import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <Link to={"/"}>
            <h1 className="text-2xl font-bold italic text-white cursor-pointer hover:text-amber-950 text-center">
                Las Trancas Lodges
            </h1>
        </Link>
    )
};