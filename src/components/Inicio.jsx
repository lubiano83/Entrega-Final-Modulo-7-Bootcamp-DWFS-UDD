import useAuth from "../hook/useAuth"

export default function Inicio() {

    const { quantityRegistered, quantityLogged } = useAuth();

    return (
        <div>
            <p>Usuarios Registrados: {quantityRegistered}</p>
            <p>Usuarios Online: {quantityLogged}</p>
        </div>
    )
};