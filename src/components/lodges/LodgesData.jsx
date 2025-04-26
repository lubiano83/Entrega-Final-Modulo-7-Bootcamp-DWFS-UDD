import { Link } from "react-router-dom";
import useLodges from "../../hook/useLodges";
import Boton from "../Boton";
import Message from "../Message";

export default function LodgesData() {

    const { lodge } = useLodges();

    try {
        return (
            <div className="flex justify-center items-center gap-8 w-full h-full flex-wrap">
               { lodge && lodge.filter(item => item.available).length > 0 ? (
                        lodge.filter(item => item.available).map(item => (
                                <div key={item._id} className="flex flex-col justify-center items-center gap-4 bg-amber-100 rounded-xl p-4 w-1/4 min-w-72 max-w-lg shadow-sm shadow-amber-950">
                                    <div className="aspect-square w-full bg-white flex justify-center items-center">
                                        {item.image.length > 0 ? (
                                            <img src={item.image[0]} alt="imagen lodge" className="w-full bg-white aspect-square object-cover"/>
                                        ) : (
                                            <Message>Sin Imagen..</Message>
                                        )}
                                    </div>
                                    <div className="flex flex-col justify-evenly items-center w-full gap-2">
                                        <h3 className="text-xl italic underline"><strong>{ item.hotel }</strong></h3>
                                        <div className="flex justify-evenly items-start w-full flex-wrap">
                                            <h3><strong>Piezas: </strong>{ item.bedroom }</h3>
                                            <h3><strong>Baños: </strong>{ item.bathroom }</h3>
                                            <h3><strong>Mt2: </strong>{ item.size }</h3>
                                            <h3><strong>Wifi: </strong>{ item.wifi ? "Sí" : "No" }</h3>
                                        </div>
                                        <Link to={`/lodges/${item._id}`}>
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