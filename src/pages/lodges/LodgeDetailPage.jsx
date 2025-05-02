import { useLocation } from "react-router-dom";
import LodgeDetail from "../../components/lodges/LodgeDetail";

export default function LodgeDetailPage({ isDarkMode }) {

    const location = useLocation();
    const lodge = location.state?.lodge;

    return (
        <div className={`${isDarkMode ? "text-amber-950" : "text-green-950"} h-full w-full flex flex-col justify-center items-center p-8 gap-4`}>
            <LodgeDetail lodge={lodge} isDarkMode={isDarkMode} />
        </div>
    )
};