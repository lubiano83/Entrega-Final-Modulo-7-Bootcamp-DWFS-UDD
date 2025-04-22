
export default function Message({ children }) {

  return (
    <div className="font-bold flex justify-center items-center text-xl text-amber-950 italic">
        { children }
    </div>
  )
}