import { useContext } from "react";
import { ReservationsContext } from "../context/reservationsContext";

const useReservations = () => {
    return useContext(ReservationsContext);
};

export default useReservations;