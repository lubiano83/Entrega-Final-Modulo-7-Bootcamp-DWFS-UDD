import { Link } from "react-router-dom";
import Logo from "../Logo";

export default function Footer({ derechos, email }) {

    return(
        <div className="flex justify-evenly items-center p-4 bg-amber-700 flex-wrap-reverse gap-2">
            <p className="text-white text-center">{derechos}</p>
            <Link to={"mailto:lastrancaslodges@gmail.com"} className="hover:text-amber-950 text-center">
                <p className="text-white">Contacto: <span className="hover:text-amber-950">{email}</span></p>
            </Link>
            <Logo />
        </div>
    )
};