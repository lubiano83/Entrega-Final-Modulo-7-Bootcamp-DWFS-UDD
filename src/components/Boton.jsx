export default function Boton({ children, type }) {
    return (
        <button type={type} className="py-1 w-28 border-2 border-white bg-amber-700 rounded-xl text-white font-bold shadow-sm shadow-amber-950 cursor-pointer">
            { children }
        </button>
    )
};