import { createContext, useEffect, useState } from "react";

export const LodgesContext = createContext(null);

export const LodgesProvider = ({ children }) => {

    const [ lodge, setLodge ] = useState("");
    const [ hotel, setHotel ] = useState("");
    const [ size, setSize ] = useState("");
    const [ bedroom, setBedroom ] = useState("");
    const [ bathroom, setBathroom ] = useState("");
    const [ high, setHigh ] = useState("");
    const [ medium, setMedium ] = useState("");
    const [ low, setLow ] = useState("");

    useEffect(() => {
        getLodges();
    }, []);

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

    const createLodge = async() => {
        try {
            const response = await fetch("https://entrega-final-modulo-6-bootcamp-dwfs-udd.onrender.com/api/lodges", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    hotel,
                    size,
                    bedroom,
                    bathroom,
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
                setHigh("");
                setMedium("");
                setLow("");
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
        <LodgesContext.Provider value={{ createLodge, lodge }}>
            { children }
        </LodgesContext.Provider>
    )
};