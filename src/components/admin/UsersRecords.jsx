import useAuth from "../../hook/useAuth";

export default function UsersRecords() {

    const { quantityRegistered, quantityLogged } = useAuth();

    return (
        <div className="w-full flex flex-col justify-center items-center gap-1 text-amber-950">
            <p>Usuarios Registrados: {quantityRegistered}</p>
            <p>Usuarios Online: {quantityLogged}</p>
        </div>
    )
};