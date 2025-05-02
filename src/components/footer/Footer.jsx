import { Link } from "react-router-dom";
import Logo from "../Logo";

export default function Footer({ derechos, email, isDarkMode }) {

    return(
        <div className={`flex justify-evenly items-center p-4 ${isDarkMode ? "bg-amber-700" : "bg-green-700"} flex-wrap-reverse gap-2`}>
            <p className="text-white text-center">{derechos}</p>
            <Link to={"mailto:lastrancaslodges@gmail.com"} className={`${isDarkMode ? "hover:text-amber-950" : "hover:text-green-950"} text-center`}>
                <p className="text-white">Contacto: <span className={`${isDarkMode ? "hover:text-amber-950" : "hover:text-green-950"} text-center`}>{email}</span></p>
            </Link>
            <Logo isDarkMode={isDarkMode} />
        </div>
    )
};