import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SvgImage from "../SvgImage";
import Boton from "../Boton";

export default function LodgeDetail() {

    const location = useLocation();
    const lodge = location.state.lodge;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === lodge.image.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? lodge.image.length - 1 : prevIndex - 1
        );
    };


    return (
        <div className="bg-amber-100 p-4 flex flex-col md:flex-row md:h-1/2 justify-center items-center gap-4 rounded-xl shadow-sm shadow-amber-950">
                <div className="relative aspect-square w-full max-w-sm md:h-full md:w-full">
                    <Link to={lodge.image[currentImageIndex]} target="_blank">
                        <img src={lodge.image[currentImageIndex]} alt="Imagen del lodge" className="h-full aspect-square" />
                    </Link>
                    <button onClick={prevImage} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-amber-500 text-amber-950 px-2 py-1 rounded-r"> <SvgImage src={"/arrow-sm-left-svgrepo-com.svg"} /> </button>
                    <button onClick={nextImage} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-amber-500 text-amber-950 px-2 py-1 rounded-l"> <SvgImage src={"/arrow-sm-right-svgrepo-com.svg"} /> </button>
                </div>
                <div className="flex flex-col justify-between items-start gap-4 md:gap-8 h-full w-full">
                    <div className="flex flex-col justify-between items-start text-lg h-full">
                        <p className="truncate overflow-hidden whitespace-nowrap"><strong>Id: </strong>{lodge._id}</p>
                        <p><strong>Nombre: </strong>{lodge.hotel}</p>
                        <p><strong>Piezas: </strong>{lodge.bedroom}</p>
                        <p><strong>Baños: </strong>{lodge.bathroom}</p>
                        <p><strong>Mt2: </strong>{lodge.size}</p>
                        <p><strong>Wifi: </strong>{lodge.wifi ? "Si" : "No"}</p>
                        <p><strong>Temporada Alta: </strong>${lodge.season.high}</p>
                        <p><strong>Temporada Media: </strong>${lodge.season.medium}</p>
                        <p><strong>Temporada Baja: </strong>{lodge.season.low}</p>
                    </div>
                    <div className="flex justify-center items-center gap-2 w-full">
                        <Link to={"/lodges"}>
                            <Boton>Volver</Boton>
                        </Link>
                        <Link to={`/lodges/reservation/${lodge._id}`}>
                            <Boton>Reservar</Boton>
                        </Link>
                    </div>
                </div>
        </div>
    )
};