import { useParams } from "react-router-dom";
import LodgeDetail from "../../components/lodges/LodgeDetail";

export default function LodgeDetailPage() {

    const { id } = useParams();

    return (
        <div className="text-amber-950 h-full w-full flex flex-col justify-center items-center p-8">
            <LodgeDetail id={id} />
        </div>
    )
};