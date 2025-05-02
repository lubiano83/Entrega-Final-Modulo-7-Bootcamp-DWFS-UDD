import { useLocation } from "react-router-dom";
import LodgeDetail from "../../components/lodges/LodgeDetail";

export default function LodgeDetailPage() {

    const location = useLocation();
    const lodge = location.state?.lodge;

    return (
        <div className="text-amber-950 h-full w-full flex flex-col justify-center items-center p-8">
            <LodgeDetail lodge={lodge} />
        </div>
    )
};