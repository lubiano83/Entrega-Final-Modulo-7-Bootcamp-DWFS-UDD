import { Link } from "react-router-dom";
import Boton from "./Boton";

export default function GoBack({ isDarkMode, path }) {
    return (
        <Link to={path}>
            <Boton isDarkMode={isDarkMode}>Volver</Boton>
        </Link>
    )
};