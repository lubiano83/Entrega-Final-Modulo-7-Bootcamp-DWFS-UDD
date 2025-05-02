export default function Boton({ children, type, onClick, isDarkMode }) {
    return (
        <button type={type} className={`py-1 w-28 border-2 border-white ${isDarkMode ? "bg-amber-700 shadow-amber-950" : "bg-green-700 shadow-green-950"} rounded-xl text-white font-bold shadow-sm cursor-pointer`} onClick={onClick}>
            { children }
        </button>
    )
};