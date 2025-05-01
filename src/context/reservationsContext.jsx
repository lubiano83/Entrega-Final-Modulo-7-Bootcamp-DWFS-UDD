import { createContext, useEffect, useState } from "react";
import useAuth from "../hook/useAuth";
import { jwtDecode } from "jwt-decode";

export const ReservationsContext = createContext(null);

export const ReservationsProvider = ({ children }) => {

    const { token, getCurrentSession } = useAuth();
    const [ reservationsByUserId, setReservationsByUserId ] = useState([]);
    const [ people, setPeople ] = useState("");
    const [ arrive, setArrive ] = useState("");
    const [ leave, setLeave ] = useState("");

    useEffect(() => {
        getCurrentSession();
    }, []);

    useEffect(() => {
        if (!token) return;
      
        const fetchUser = async () => {
          await getReservationsByUserId();
        };
      
        fetchUser();
    }, [token]);

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

    const getReservationsByUserId = async() => {
        try {
            if(!token) throw new Error("Token no encontrado..");
            const decoded = jwtDecode(token);
            const userId = decoded.id;
            const response = await fetch(`https://entrega-final-modulo-6-bootcamp-dwfs-udd.onrender.com/api/reservations/user/${userId}`, {
                method: "GET",
            });
            const data = await response.json();
            setReservationsByUserId(data.payload);
        } catch (error) {
            console.error("Hubo un problema al conectarse al backend..", error.message);
        }
    };

    const isAlreadyPaid = async(id, newPaid) => {
        try {
            const response = await fetch(`https://entrega-final-modulo-6-bootcamp-dwfs-udd.onrender.com/api/reservations/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ paid: newPaid })
            });
            if (response.ok) {
                alert("Reserva Finalizada con éxito");
                await getReservationsByUserId();
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
        <ReservationsContext.Provider value={{ createReservation, reservationsByUserId, isAlreadyPaid, people, setPeople, arrive, setArrive, leave, setLeave }} >
            { children }
        </ReservationsContext.Provider>
    )
};