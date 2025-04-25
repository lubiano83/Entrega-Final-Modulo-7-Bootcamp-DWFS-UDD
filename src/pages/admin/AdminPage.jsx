import { Link } from "react-router-dom";
import UsersRecords from "../../components/admin/UsersRecords";


export default function AdminPage() {

    return (
        <div className="text-amber-950 h-full w-full flex flex-col justify-center items-center p-8">
            <UsersRecords />
            <Link to={"/lodges/create"}>
                <div>Crear Cabaña</div>
            </Link>
        </div>
    )
};