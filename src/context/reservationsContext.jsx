import { createContext, useState } from "react";

export const ReservationsContext = createContext(null);

export const ReservationsProvider = ({ children }) => {

    const [ people, setPeople ] = useState("");
    const [ arrive, setArrive ] = useState("");
    const [ leave, setLeave ] = useState("");

    const createReservation = async(lodgeId, userId) => {
        try {
            if(!lodgeId || !userId) return;
            const response = await fetch(`https://entrega-final-modulo-6-bootcamp-dwfs-udd.onrender.com/api/reservations/${lodgeId}/${userId}`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    people,
                    arrive,
                    leave
                })
            })
            if (response.ok) {
                alert("Reserva realizada con éxito");
                setPeople("");
                setArrive("");
                setLeave("");
                return true;
            } else {
                const error = await response.json();
                alert(error.message);
                return false;
            }
        } catch (error) {
            console.error("Hubo un problema al conectarse al backend..", error.message);
        }
    };

    return (
        <ReservationsContext.Provider value={{ createReservation, people, setPeople, arrive, setArrive, leave, setLeave }} >
            { children }
        </ReservationsContext.Provider>
    )
};