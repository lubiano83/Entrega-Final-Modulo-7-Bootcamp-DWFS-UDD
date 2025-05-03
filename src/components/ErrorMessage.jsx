import { Link } from "react-router-dom";
import Message from "./Message";
import Boton from "./Boton";

export default function ErrorMessage({ isDarkMode }) {
    return (
        <div className="flex flex-col justify-center items-center gap-4">
            <Message isDarkMode={isDarkMode} >Ups, hubo un Error...</Message>
            <Link to={"/admin"}>
                <Boton isDarkMode={isDarkMode} >Volver</Boton>
            </Link>
        </div>
    )
};