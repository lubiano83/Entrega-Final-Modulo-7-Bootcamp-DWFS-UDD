import Reservation from "../../components/lodges/Reservation";
import { useParams } from "react-router-dom";

export default function ReservationsPage() {

    const { lodgeId, userId } = useParams();

    return (
        <div className="text-amber-950 h-full w-full flex flex-col justify-center items-center p-8">
            <Reservation lodgeId={lodgeId} userId={userId} />
        </div>
    )
};