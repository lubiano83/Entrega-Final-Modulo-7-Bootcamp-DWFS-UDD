import { createContext, useEffect, useState } from "react";
import useAuth from "../hook/useAuth";
import { jwtDecode } from "jwt-decode";

export const LodgesContext = createContext(null);

export const LodgesProvider = ({ children }) => {

    const { token, getCurrentSession } = useAuth();
    const [ lodges, setLodges ] = useState([]);
    const [ lodgeById, setLodgeById ] = useState({});
    const [ lodgesByUserId, setLodgesByUserId ] = useState([]);
    const [ image, setImage ] = useState(null);
    const [ hotel, setHotel ] = useState("");
    const [ size, setSize ] = useState("");
    const [ bedroom, setBedroom ] = useState("");
    const [ bathroom, setBathroom ] = useState("");
    const [ capacity, setCapacity ] = useState("");
    const [ wifi, setWifi ] = useState("");
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
            setLodges(data.payload);
        } catch (error) {
            throw new Error("Hubo un problema al conectarse al backend..", error.message);
        }
    };

    const getLodgeById = async(id) => {
        try {
            const response = await fetch(`https://entrega-final-modulo-6-bootcamp-dwfs-udd.onrender.com/api/lodges/${id}`, {
                method: "GET"
            });
            const data = await response.json();
            setLodgeById(data.payload);
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
            setLodgesByUserId(data.payload);
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

    const updateLodgeById = async(id) => {
        try {
            const response = await fetch(`https://entrega-final-modulo-6-bootcamp-dwfs-udd.onrender.com/api/lodges/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    hotel,
                    size,
                    bedroom,
                    bathroom,
                    capacity,
                    wifi,
                    season: {
                        high,
                        medium,
                        low
                    }
                })
            });
            if (response.ok) {
                alert("Cabaña modificada con éxito");
                setHotel("");
                setSize("");
                setBedroom("");
                setBathroom("");
                setCapacity(2);
                setWifi("");
                setHigh("");
                setMedium("");
                setLow("");
                await getLodgesByUserId();
                await getLodges();
                return true;
            } else {
                const error = await response.json();
                alert(error.message);
                return false;
            }
        } catch (error) {
            throw new Error(`Hubo un problema al conectarse al backend: ${error.message}`);
        }
    };

    const changeAvailable = async(id, newAvailable) => {
        try {
            const response = await fetch(`https://entrega-final-modulo-6-bootcamp-dwfs-udd.onrender.com/api/lodges/available/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ available: newAvailable })
            });
            if (response.ok) {
                alert("Disponibilidad modificada con éxito");
                await getLodgesByUserId();
                await getLodges();
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

    const addImageToLodge = async(id) => {
        try {
            const formData = new FormData();
            formData.append("image", image);
            const response = await fetch(`https://entrega-final-modulo-6-bootcamp-dwfs-udd.onrender.com/api/lodges/${id}`, {
                method: "PATCH",
                body: formData,
                credentials: "include"
            });
            if (response.ok) {
                alert("Imagen actualizada con éxito");
                setImage(null);
                await getLodgesByUserId();
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

    const deleteAllImageFromLodge = async(id) => {
        try {
            const response = await fetch(`https://entrega-final-modulo-6-bootcamp-dwfs-udd.onrender.com/api/lodges/image/${id}`, {
                method: "DELETE",
                credentials: "include"
            });
            if (response.ok) {
                alert("Imagenes eliminadas con éxito");
                setImage(null);
                await getLodgesByUserId();
                await getLodges();
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

    const deleteLodgeById = async(id) => {
        try {
            const response = await fetch(`https://entrega-final-modulo-6-bootcamp-dwfs-udd.onrender.com/api/lodges/${id}`, {
                method: "DELETE",
                credentials: "include"
            });
            if (response.ok) {
                alert("Lodge eliminado con éxito");
                setImage(null);
                await getLodgesByUserId();
                await getLodges();
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

    const changeWifi = async(id, newWifi) => {
        try {
            const response = await fetch(`https://entrega-final-modulo-6-bootcamp-dwfs-udd.onrender.com/api/lodges/wifi/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ available: newWifi })
            });
            if (response.ok) {
                alert("Wifi modificado con éxito");
                await getLodgesByUserId();
                await getLodges();
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
        <LodgesContext.Provider value={{ createLodge, updateLodgeById, changeAvailable, getLodgeById, addImageToLodge, deleteAllImageFromLodge, deleteLodgeById, changeWifi, lodges, lodgeById, lodgesByUserId, image, setImage, hotel, setHotel, size, setSize, bedroom, setBedroom, bathroom, setBathroom, capacity, setCapacity, wifi, setWifi, high, setHigh, medium, setMedium, low, setLow }}>
            { children }
        </LodgesContext.Provider>
    )
};