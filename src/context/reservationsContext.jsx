import { createContext, useEffect, useState } from "react";

export const ReservationsContext = createContext(null);

export const ReservationsProvider = ({ children }) => {

    const [ people, setPeople ] = useState("");
    const [ arrive, setArrive ] = useState("");
    const [ leave, setLeave ] = useState("");

    useEffect(() => {
        createReservations();
    }, []);

    const createReservations = async(userId, lodgeId) => {
        try {
            if (!document.cookie.includes(import.meta.env.VITE_COOKIE_NAME)) return;
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
                return false;
            }
        } catch (error) {
            console.error("Hubo un problema al conectarse al backend..", error.message);
        }
    };

    return (
        <ReservationsContext.Provider value={{  }} >
            { children }
        </ReservationsContext.Provider>
    )
};