import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

    const [ logged, setLogged ] = useState(false);
    const [ token, setToken ] = useState(null);
    const [ user, setUser ] = useState(null);
    const [ quantityLogged, setQuantityLogged ] = useState(0);
    const [ quantityRegistered, setQuantityRegistered ] = useState(0);
    const [ image, setImage ] = useState(null);
    const [ first_name, setFirst_name ] = useState("");
    const [ last_name, setLast_name ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ country, setCountry ] = useState("");
    const [ state, setState ] = useState("");
    const [ city, setCity ] = useState("");
    const [ street, setStreet ] = useState("");
    const [ number, setNumber ] = useState("");

    useEffect(() => {
        usersRegistered();
        usersLogged();
    }, []);

    useEffect(() => {
        if (!token) return;
      
        const fetchUser = async () => {
          await getUserById();
        };
      
        fetchUser();
    }, [token]);

    const usersRegistered = async() => {
        try {
            const response = await fetch("https://entrega-final-modulo-6-bootcamp-dwfs-udd.onrender.com/api/sessions/users/registered", {
                method: "GET"
            });
            const data = await response.json();
            setQuantityRegistered(data.payload);
        } catch (error) {
            console.error("Hubo un problema al conectarse al backend..", error.message);
        }
    };

    const usersLogged = async() => {
        try {
            const response = await fetch("https://entrega-final-modulo-6-bootcamp-dwfs-udd.onrender.com/api/sessions/users/logged", {
                method: "GET"
            });
            const data = await response.json();
            setQuantityLogged(data.payload);
        } catch (error) {
            console.error("Hubo un problema al conectarse al backend..", error.message);
        }
    };

    const registerUser = async() => {
        try {
            const response = await fetch("https://entrega-final-modulo-6-bootcamp-dwfs-udd.onrender.com/api/sessions/register", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    first_name,
                    last_name,
                    phone,
                    email,
                    password,
                    address: {
                        country,
                        state,
                        city,
                        street,
                        number
                    }
                })
            });
    
            if (response.ok) {
                alert("Registro realizado con éxito");
                setFirst_name("");
                setLast_name("");
                setPhone("");
                setEmail("");
                setPassword("");
                setCountry("");
                setState("");
                setCity("");
                setStreet("");
                setNumber("");
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
    
    const loginUser = async() => {
        try {
            const response = await fetch("https://entrega-final-modulo-6-bootcamp-dwfs-udd.onrender.com/api/sessions/login", {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });
            
            if (response.ok) {
                await getCurrentSession();
                alert("Login realizado con éxito");
                setEmail("");
                setPassword("");
                return true;
            } else {
                setLogged(false);
                const error = await response.json();
                alert(error.message);
                return false;
            }
        } catch (error) {
            console.error("Hubo un problema al conectarse al backend..", error.message);
        }
    };

    const logoutUser = async() => {
        try {
            const response = await fetch("https://entrega-final-modulo-6-bootcamp-dwfs-udd.onrender.com/api/sessions/logout", {
                method: "POST",
                credentials: "include",
            });
    
            if (response.ok) {
                alert("Logout realizado con éxito");
                setLogged(false);
                setToken(null);
                setUser(null);
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

    const getCurrentSession = async () => {
        try {
            const response = await fetch("https://entrega-final-modulo-6-bootcamp-dwfs-udd.onrender.com/api/sessions/current/user", {
                method: "GET",
                credentials: "include",
            });
    
            if (response.ok) {
                const data = await response.json();
                setLogged(true);
                setToken(data.token);
            } else {
                setToken(null);
                setLogged(false);
            }
        } catch (error) {
            console.log("Error al verificar la sesión:", error.message);
            setToken(null);
            setLogged(false);
        }
    };

    const getUserById = async() => {
        try {
            if(!token) throw new Error("Token no encontrado..");
            const decoded = jwtDecode(token);
            const id = decoded.id;
            if(!id) return;
            const response = await fetch(`https://entrega-final-modulo-6-bootcamp-dwfs-udd.onrender.com/api/users/${id}`, {
                method: "GET",
                credentials: "include",
            });
            if(response.ok) {
                const data = await response.json();
                setUser(data.payload)
            } else {
                const error = await response.json();
                alert(error.message);
            }
        } catch (error) {
            console.error("Hubo un problema al conectarse al backend..", error.message);
        }
    };

    const updateUserById = async() => {
        try {
            if(!token) throw new Error("Token no encontrado..");
            const decoded = jwtDecode(token);
            const id = decoded.id;
            if(!id) return;
            const response = await fetch(`https://entrega-final-modulo-6-bootcamp-dwfs-udd.onrender.com/api/users/${id}`, {
                method: "PUT",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    first_name,
                    last_name,
                    phone,
                    address: {
                        country,
                        state,
                        city,
                        street,
                        number
                    }
                })
            });

            if (response.ok) {
                alert("Usuario modificado con éxito");
                setFirst_name("");
                setLast_name("");
                setPhone("");
                setCountry("");
                setState("");
                setCity("");
                setStreet("");
                setNumber("");
                await getUserById();
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

    const changeImageById = async() => {
        try {
            if(!token) throw new Error("Token no encontrado..");
            const decoded = jwtDecode(token);
            const id = decoded.id;
            if(!id) return;
            const formData = new FormData();
            formData.append("image", image);
            const response = await fetch(`https://entrega-final-modulo-6-bootcamp-dwfs-udd.onrender.com/api/users/image/${id}`, {
                method: "PATCH",
                body: formData,
                credentials: "include"
            })
            if (response.ok) {
                const data = await response.json();
                alert("Imagen actualizada con éxito");
                setImage(null);
                setUser(prev => ({ ...prev, image: data.imageUrl }));
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
        <AuthContext.Provider value={{ quantityRegistered, quantityLogged, registerUser, loginUser, logoutUser, getCurrentSession, getUserById, updateUserById, changeImageById, user, image, setImage, first_name, setFirst_name, last_name, setLast_name, phone, setPhone, email, setEmail, password, setPassword, country, setCountry, state, setState, city, setCity, street, setStreet, number, setNumber, logged, setLogged, token }}>
            { children }
        </AuthContext.Provider>
    )
};