export default function Title({ children, className, isDarkMode }) {
    return (
        <h2 className={`text-xl underline font-bold ${isDarkMode ? "text-amber-700" : "text-green-700"} italic ${className}`}>
            { children }
        </h2>
    )
};