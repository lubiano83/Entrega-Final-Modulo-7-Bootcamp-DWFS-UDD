import GoBack from "../GoBack";
import Message from "../Message";
import Title from "../Title";

export default function DataAnalysis({ isDarkMode, recordsByUserId }) {

    if(!recordsByUserId) return <Message isDarkMode={isDarkMode} >Cargando...</Message>

    const totalPrice = recordsByUserId.reduce((sum, record) => sum + (record.price || 0), 0);
    const relationCapacity = recordsByUserId.reduce((sum, record) => sum + (record.lodge.capacity || 0), 0);
    const relationPersons = recordsByUserId.reduce((sum, record) => sum + (record.people || 0), 0);
    const capPerRatio = relationPersons / relationCapacity;
    const capPerPercent = (capPerRatio * 100).toFixed(0) + '%';
    const totalDays = recordsByUserId.reduce((sum, { arrive, leave }) => {
        const MS_PER_DAY = 1000 * 60 * 60 * 24;
        const diff = (new Date(leave) - new Date(arrive)) / MS_PER_DAY;
        return sum + Math.floor(diff);
    }, 0);

    if(recordsByUserId.length === 0) {
        return (
            <>
                <Message isDarkMode={isDarkMode} >No hay analisis disponibles...</Message>
                <GoBack isDarkMode={isDarkMode} path={"/admin"} />
            </>
        )
    }

    try {
        return (
            <div className="flex flex-col justify-center items-center gap-4">
                <Title isDarkMode={isDarkMode} className={"hidden xl:flex"}>Analisis de Datos:</Title>
                <Message isDarkMode={isDarkMode} className="flex xl:hidden">Vista no disponible en dispositivos moviles..</Message>
                <table className={`${isDarkMode ? "text-amber-950 shadow-amber-950" : "text-green-950 shadow-green-950"} hidden xl:flex flex-col justify-center items-center shadow-sm`}>
                    <thead className={`${isDarkMode ? "bg-amber-200" : "bg-green-200"}`}>
                        <tr className="border">
                            <th className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-24 p-2`}>Contador</th>
                            <th className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-28 p-2`}>Total Dias</th>
                            <th className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-28 p-2`}>Dias/Prom</th>
                            <th className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-28 p-2`}>Ocupación</th>
                            <th className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-32 p-2`}>Precio/Prom</th>
                            <th className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-22 p-2`}>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={`text-center ${isDarkMode ? "bg-amber-100" : "bg-green-100"}`}>
                            <td className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-24 p-2`}>{recordsByUserId.length}</td>
                            <td className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-28 p-2`}>{totalDays}</td>
                            <td className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-28 p-2`}>{totalDays/recordsByUserId.length}</td>
                            <td className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-28 p-2`}>{capPerPercent}</td>
                            <td className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-32 p-2`}>${totalPrice/recordsByUserId.length}</td>
                            <td className={`border ${isDarkMode ? "border-amber-950" : "border-green-950"} w-22 p-2`}>${totalPrice}</td>
                        </tr>
                    </tbody>
                </table>
                <GoBack isDarkMode={isDarkMode} path={"/admin"} />
            </div>
        )
    } catch (error) {
        const url = import.meta.url;
        return (
            <ErrorMessage isDarkMode={isDarkMode} path={"/admin"} error={error} url={url} />
        )
    }
};