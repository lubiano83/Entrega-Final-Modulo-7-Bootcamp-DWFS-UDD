export default function Message({ children, className, isDarkMode }) {

  return (
    <div className={`font-bold flex justify-center items-center text-xl ${isDarkMode ? "text-amber-700" : "text-green-700"} italic text-center ${className}`}>
        { children }
    </div>
  )
};