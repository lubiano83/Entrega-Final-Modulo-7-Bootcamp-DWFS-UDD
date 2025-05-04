import { Link } from "react-router-dom";
import Boton from "./Boton";
import Message from "./Message";

export default function NotFound({ isDarkMode, url }) {
    return (
        <div className="flex flex-col justify-center items-center gap-4">
            <Message isDarkMode={isDarkMode}>Esa pagina no esta disponible..</Message>
            <Link to={url}>
                <Boton isDarkMode={isDarkMode}>Inicio</Boton>
            </Link>
        </div>
    )
};