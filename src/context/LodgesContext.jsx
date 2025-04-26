import { createContext, useEffect, useState } from "react";
import useAuth from "../hook/useAuth";
import { jwtDecode } from "jwt-decode";

export const LodgesContext = createContext(null);

export const LodgesProvider = ({ children }) => {

    const { token, getCurrentSession } = useAuth();
    const [ lodge, setLodge ] = useState([]);
    const [ lodgeUserId, setLodgeUserId ] = useState([]);
    const [ hotel, setHotel ] = useState("");
    const [ size, setSize ] = useState("");
    const [ bedroom, setBedroom ] = useState("");
    const [ bathroom, setBathroom ] = useState("");
    const [ capacity, setCapacity ] = useState("");
    const [ high, setHigh ] = useState("");
    const [ medium, setMedium ] = useState("");
    const [ low, setLow ] = useState("");

    useEffect(() => {
        getLodges();
        getCurrentSession();
    }, []);

    useEffect(() => {
        if (!token) return;
      
        const fetchUser = async () => {
          await getLodgesByUserId();
        };
      
        fetchUser();
    }, [token]);

    const getLodges = async() => {
        try {
            const response = await fetch("https://entrega-final-modulo-6-bootcamp-dwfs-udd.onrender.com/api/lodges", {
                method: "GET"
            });
            const data = await response.json();
            setLodge(data.payload);
        } catch (error) {
            throw new Error("Hubo un problema al conectarse al backend..", error.message);
        }
    };

    const getLodgesByUserId = async() => {
        try {
            if(!token) throw new Error("Token no encontrado..");
            const decoded = jwtDecode(token);
            const userId = decoded.id;
            const response = await fetch(`https://entrega-final-modulo-6-bootcamp-dwfs-udd.onrender.com/api/lodges/user/${userId}`, {
                method: "GET"
            });
            const data = await response.json();
            setLodgeUserId(data.payload);
        } catch (error) {
            throw new Error("Hubo un problema al conectarse al backend..", error.message);
        }
    };

    const createLodge = async() => {
        try {
            if(!token) throw new Error("Token no encontrado..");
            const decoded = jwtDecode(token);
            const userId = decoded.id;
            const response = await fetch(`https://entrega-final-modulo-6-bootcamp-dwfs-udd.onrender.com/api/lodges/${userId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    hotel,
                    size,
                    bedroom,
                    bathroom,
                    capacity,
                    season: {
                        high,
                        medium,
                        low
                    }
                })
            });
            if (response.ok) {
                alert("Cabaña creada con éxito");
                setHotel("");
                setSize("");
                setBedroom("");
                setBathroom("");
                setCapacity("");
                setHigh("");
                setMedium("");
                setLow("");
                await getLodgesByUserId();
                return true;
            } else {
                const error = await response.json();
                alert(error.message);
                return false;
            }
        } catch (error) {
            throw new Error("Hubo un problema al conectarse al backend..", error.message);
        }
    };

    return (
        <LodgesContext.Provider value={{ createLodge, lodge, lodgeUserId, hotel, setHotel, size, setSize, bedroom, setBedroom, bathroom, setBathroom, capacity, setCapacity, high, setHigh, medium, setMedium, low, setLow }}>
            { children }
        </LodgesContext.Provider>
    )
};