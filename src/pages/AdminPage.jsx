import useAuth from "../hook/useAuth";

export default function AdminPage() {

    const { quantityRegistered, quantityLogged } = useAuth();

    return (
        <div className="text-amber-950 h-full w-full flex flex-col justify-center items-center p-8">
            <p>Usuarios Registrados: {quantityRegistered}</p>
            <p>Usuarios Online: {quantityLogged}</p>
        </div>
    )
};