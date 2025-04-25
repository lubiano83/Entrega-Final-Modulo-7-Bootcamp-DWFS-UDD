import { Link } from "react-router-dom";
import useLodges from "../../hook/useLodges";
import Boton from "../Boton";
import Message from "../Message";

export default function CreateLodge() {

    const { lodge } = useLodges();
    const free = 1
    try {
        return (
            <>
                { lodge && lodge.length < free ? (
                    <div>
                        
                    </div>
                ) : <div className="flex flex-col justify-center items-center gap-4">
                        <Message>Alcanzaste el maximo de publicaciones con tu cuenta...</Message>
                        <Link to={"/admin"}>
                            <Boton>Volver</Boton>
                        </Link>
                    </div> }
            </>
        )
    } catch (error) {
        console.log(error.mssage);
        <div className="flex flex-col justify-center items-center gap-4">
            <Message>Ups, hubo un Error...</Message>
            <Link to={"/admin"}>
                <Boton>Volver</Boton>
            </Link>
        </div>
    }
};