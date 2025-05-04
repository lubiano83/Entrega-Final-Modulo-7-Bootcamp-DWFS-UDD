import { Link } from "react-router-dom";
import useLodges from "../../hook/useLodges";
import Boton from "../Boton";
import Message from "../Message";
import useCapitalize from "../../hook/useCapitalize";
import ErrorMessage from "../ErrorMessage";

export default function LodgesData({ isDarkMode }) {
    const { lodges } = useLodges();
    const { capitalizeEachWord } = useCapitalize();

    if (!lodges || !Array.isArray(lodges)) {
        return <Message isDarkMode={isDarkMode}>Cargando...</Message>;
    }

    const lodgesAvailable = lodges.filter(lodge => lodge.available);

    if(!lodgesAvailable) {
        return <Message isDarkMode={isDarkMode} >Cargando...</Message>
    };

    if (lodgesAvailable.length === 0) {
        return <Message isDarkMode={isDarkMode}>No hay cabañas disponibles...</Message>;
    }

    try {
        return (
            <div className="flex justify-center items-center gap-8 w-full h-full flex-wrap">
                {lodgesAvailable.map(lodge => (
                    <div key={lodge._id} className={`flex flex-col justify-center items-center gap-4 ${isDarkMode ? "bg-amber-100 shadow-amber-950" : "bg-green-100 shadow-green-950"} rounded-xl p-4 w-72 shadow-xs`}>
                        <div className="w-full aspect-square bg-white flex justify-center items-center overflow-hidden">
                            {Array.isArray(lodge.image) && lodge.image.length > 0 ? (
                                <img
                                    src={lodge.image[0]}
                                    alt="imagen lodge"
                                    className="w-full h-full object-cover bg-white"
                                />
                            ) : (
                                <Message isDarkMode={isDarkMode}>Sin Imagen..</Message>
                            )}
                        </div>
                        <div className="flex flex-col justify-evenly items-center w-full gap-2">
                            <Message isDarkMode={isDarkMode} className="underline">{capitalizeEachWord(lodge.hotel)}</Message>
                            <div className="flex justify-evenly items-start w-full flex-wrap gap-2">
                                <h3><strong>Piezas: </strong>{lodge.bedroom}</h3>
                                <h3><strong>Baños: </strong>{lodge.bathroom}</h3>
                                <h3><strong>Mt2: </strong>{lodge.size}</h3>
                            </div>
                            <Link to={`/lodges/${lodge._id}`} state={{ lodge }}>
                                <Boton isDarkMode={isDarkMode}>Ver</Boton>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        );
    } catch (error) {
        return <ErrorMessage url={"/about"} isDarkMode={isDarkMode} error={error} />
    }
}