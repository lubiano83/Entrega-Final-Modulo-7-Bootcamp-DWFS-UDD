export default function DataAnalysis({ isDarkMode, recordsByUserId }) {

    const totalPrice = recordsByUserId.reduce((sum, record) => sum + (record.price || 0), 0);
    const relationCapacity = recordsByUserId.reduce((sum, record) => sum + (record.lodge.capacity || 0), 0);
    const relationPersons = recordsByUserId.reduce((sum, record) => sum + (record.people || 0), 0);
    const capPerRatio = relationCapacity / relationPersons;
    const capPerPercent = (capPerRatio * 100).toFixed(0) + '%';
    const totalDays = recordsByUserId.reduce((sum, { arrive, leave }) => {
        const MS_PER_DAY = 1000 * 60 * 60 * 24;
        const diff = (new Date(leave) - new Date(arrive)) / MS_PER_DAY;
        return sum + Math.floor(diff);
    }, 0);

    return (
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
    )
};