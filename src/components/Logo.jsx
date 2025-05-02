import { Link } from "react-router-dom";

export default function Logo({ isDarkMode }) {
    return (
        <Link to={"/"}>
            <h1 className={`text-2xl font-bold italic text-white cursor-pointer ${isDarkMode ? "hover:text-amber-950" : "hover:text-green-950"} text-center`}>
                Las Trancas Lodges
            </h1>
        </Link>
    )
};