import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import useAuth from "../hook/useAuth";

export const RecordsContext = createContext(null);

export const RecordsProvider = ({ children }) => {

    const { token, getCurrentSession } = useAuth();
    const [ recordsByUserId, setRecordsByUserId ] = useState([]);

    useEffect(() => {
        getCurrentSession();
    }, []);

    useEffect(() => {
        if (!token) return;
        
        const fetchUser = async () => {
            await getRecordsByUserId();
        };
        
        fetchUser();
    }, [token]);

    const getRecordsByUserId = async() => {
        try {
            if(!token) throw new Error("Token no encontrado..");
            const decoded = jwtDecode(token);
            const userId = decoded.id;
            if(!userId) return;
            const response = await fetch(`https://entrega-final-modulo-6-bootcamp-dwfs-udd.onrender.com/api/records/user/${userId}`, {
                method: "GET"
            });
            const data = await response.json();
            setRecordsByUserId(data.payload);
        } catch (error) {
            console.error("Hubo un problema al conectarse al backend..", error.message);
        }
    };

    return (
        <RecordsContext.Provider value={{ getRecordsByUserId, recordsByUserId }} >
            { children }
        </RecordsContext.Provider>
    )
};