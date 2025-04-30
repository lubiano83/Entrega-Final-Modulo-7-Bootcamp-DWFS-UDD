
export default function Message({ children, className }) {

  return (
    <div className={`font-bold flex justify-center items-center text-xl text-amber-950 italic text-center ${className}`}>
        { children }
    </div>
  )
};