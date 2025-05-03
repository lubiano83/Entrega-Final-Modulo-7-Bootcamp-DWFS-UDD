import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SvgImage from "../SvgImage";
import Boton from "../Boton";
import Message from "../Message";
import useAuth from "../../hook/useAuth";
import useLodges from "../../hook/useLodges";
import ErrorMessage from "../ErrorMessage";
import useCapitalize from "../../hook/useCapitalize";

export default function LodgeDetail({ id, isDarkMode }) {

    const { logged } = useAuth();
    const { getLodgeById, lodgeById } = useLodges();
    const { capitalizeEachWord } = useCapitalize();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        getLodgeById(id);
    }, [id]);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === lodgeById.image.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? lodgeById.image.length - 1 : prevIndex - 1
        );
    };

    try {
        return (
            <>
                { lodgeById ? ( <>
                    <div className={`${isDarkMode ? "bg-amber-100 shadow-amber-950" : "bg-green-100 shadow-green-950"} p-4 flex flex-col min-w-72 w-full max-w-2xl justify-center items-center gap-4 rounded-xl shadow-sm`}>
                        <div className="relative min-w-56 w-full">
                            <Link to={lodgeById.image[currentImageIndex]} target="_blank" className="relative w-full group">
                                <img src={lodgeById.image[currentImageIndex]} alt="Imagen del lodge" className="w-full aspect-video" />
                                <span className={`absolute inset-0 flex justify-center items-center ${isDarkMode ? "text-amber-950" : "text-green-950"} font-bold text-lg opacity-0 group-hover:opacity-80 bg-white bg-opacity-50 transition-opacity duration-300`}>Agrandar Imagen</span>
                            </Link>
                            <button onClick={prevImage} className={`absolute top-1/2 left-0 transform -translate-y-1/2 ${isDarkMode ? "bg-amber-700 text-amber-950" : "bg-green-700 text-green-950"} px-2 py-1 rounded-r`}> <SvgImage src={"/arrow-sm-left-svgrepo-com.svg"} /> </button>
                            <button onClick={nextImage} className={`absolute top-1/2 right-0 transform -translate-y-1/2 ${isDarkMode ? "bg-amber-700 text-amber-950" : "bg-green-700 text-green-950"} px-2 py-1 rounded-l`}> <SvgImage src={"/arrow-sm-right-svgrepo-com.svg"} /> </button>
                        </div>
                        <div className="flex flex-col justify-between items-start gap-4 w-full h-auto">
                            <div className="w-full">
                                <Message isDarkMode={isDarkMode} className={"underline"}>{ capitalizeEachWord(lodgeById.hotel) }</Message>
                            </div>
                            <div className="flex flex-col justify-start items-start text-lg h-full max-w-72 gap-2">
                                <p className="truncate overflow-hidden whitespace-nowrap"><strong>Id: </strong>{lodgeById._id}</p>
                                <div className="flex justify-center flex-col items-start flex-wrap gap-2 w-full">
                                    <div className="flex gap-3">
                                        <p><strong>Piezas: </strong>{lodgeById.bedroom}</p>
                                        <p><strong>Baños: </strong>{lodgeById.bathroom}</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <p><strong>Mt2: </strong>{lodgeById.size}</p>
                                        <p><strong>Wifi: </strong>{lodgeById.wifi ? "Si" : "No"}</p>
                                    </div>
                                </div>
                                <p><strong>Temporada Alta: </strong>${lodgeById.season.high}</p>
                                <p><strong>Temporada Media: </strong>${lodgeById.season.medium}</p>
                                <p><strong>Temporada Baja: </strong>{lodgeById.season.low}</p>
                            </div>
                            <div className="flex justify-center items-center gap-2 w-full">
                                <Link to={"/"}>
                                    <Boton isDarkMode={isDarkMode} >Volver</Boton>
                                </Link>
                                { 
                                    !logged ? 
                                    <Boton isDarkMode={isDarkMode} onClick={() => alert("Primero debes iniciar sesion.")}>Reservar</Boton>
                                    :
                                    <Link to={`/lodges/reservation/${lodgeById._id}/${lodgeById.userId}`} state={{lodgeById}} >
                                        <Boton isDarkMode={isDarkMode} >Reservar</Boton>
                                    </Link>
                                }
                            </div>
                                </div>
                    </div>
                </> ) : <Message isDarkMode={isDarkMode}>Cargando...</Message> }
            </>
        )
    } catch (error) {
        console.log(error.message);
        return <ErrorMessage isDarkMode={isDarkMode} />
    }
};