import LoginForm from "../components/auth/LoginForm";
import Inicio from "../components/Inicio";
import useAuth from "../hook/useAuth";

export default function InicioPage() {

    const { logged } = useAuth();

    return (
        <div className="text-amber-950 h-full w-full flex flex-col justify-center items-center p-8">
            { logged ? <Inicio /> : <LoginForm /> }
        </div>
    )
};