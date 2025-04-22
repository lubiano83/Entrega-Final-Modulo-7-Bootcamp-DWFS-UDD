import { createContext, useEffect, useState } from "react";
import useAuth from "../hook/useAuth";
import { jwtDecode } from "jwt-decode";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {

    const { token, getCurrentSession } = useAuth();
    const [ user, setUser ] = useState(null);

    useEffect(() => {
        getCurrentSession();
    }, []);

    useEffect(() => {
        if (!token) return;
      
        const fetchUser = async () => {
          await getUserById();
        };
      
        fetchUser();
      }, [token]);
    
    const getUserById = async() => {    
        try {
            if(!token) throw new Error("Token no encontrado..");
            const decoded = jwtDecode(token);
            const id = decoded.id;
            const response = await fetch(`https://entrega-final-modulo-6-bootcamp-dwfs-udd.onrender.com/api/users/${id}`, {
                method: "GET",
                credentials: "include",
            });

            const data = await response.json();
            setUser(data.payload)
        } catch (error) {
           console.log("Hubo un problema al conectarse al backend..", error.message);
        }
    };
    
    return (
        <UserContext.Provider value={{ getUserById, token, user }}>
            { children }
        </UserContext.Provider>
    )
};