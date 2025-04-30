import { Link } from "react-router-dom";
import useLodges from "../../hook/useLodges";
import Boton from "../Boton";
import Message from "../Message";

export default function LodgesData() {

    const { lodges } = useLodges();

    try {
        return (
            <div className="flex justify-center items-center gap-8 w-full h-full flex-wrap">
               { lodges && lodges.filter(lodge => lodge.available).length > 0 ? (
                        lodges.filter(lodge => lodge.available).map(lodge => (
                                <div key={lodge._id} className="flex flex-col justify-center items-center gap-4 bg-amber-100 rounded-xl p-4 w-72 shadow-xs shadow-amber-950">
                                    <div className="w-full aspect-square bg-white flex justify-center items-center overflow-hidden">
                                        {lodge.image.length > 0 ? (
                                            <img src={lodge.image[0]} alt="imagen lodge" className="w-full h-full object-cover bg-white"/>
                                        ) : (
                                            <Message>Sin Imagen..</Message>
                                        )}
                                    </div>
                                    <div className="flex flex-col justify-evenly items-center w-full gap-2">
                                        <Message className={"underline"}>{ lodge.hotel }</Message>
                                        <div className="flex justify-evenly items-start w-full flex-wrap gap-2">
                                            <h3><strong>Piezas: </strong>{ lodge.bedroom }</h3>
                                            <h3><strong>Baños: </strong>{ lodge.bathroom }</h3>
                                            <h3><strong>Mt2: </strong>{ lodge.size }</h3>
                                        </div>
                                        <Link to={`/lodges/${lodge._id}`} state={{lodge}}>
                                            <Boton>Ver</Boton>
                                        </Link>
                                    </div>
                                </div>
                            ))
                    ) : <Message>No hay cabañas disponibles...</Message>
                }
            </div>
        )
    } catch (error) {
        console.log(error.message);
        return (
            <div className="flex flex-col justify-center items-center gap-4">
                <Message>Ups, hubo un Error...</Message>
                <Link to={"/"}>
                    <Boton>Volver</Boton>
                </Link>
            </div>
        )
    }
};