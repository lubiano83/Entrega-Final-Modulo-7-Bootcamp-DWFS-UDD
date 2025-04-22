import useAuth from "../../hook/useAuth";

export default function Menu() {

    const { logoutUser } = useAuth();

    const handleLogout = () => {
        logoutUser();
    }; 

    return (
        <aside className="bg-amber-500 text-white flex justify-evenly items-center py-1 px-2 xl:w-56 xl:flex-col xl:bg-amber-700">
        <p className="cursor-pointer">Admin</p>
        <p className="cursor-pointer">Profile</p>
        <p className="cursor-pointer">Register</p>
        <p className="cursor-pointer">Login</p>
        <p className="cursor-pointer" onClick={() => handleLogout()}>Logout</p>
        </aside>
    )
};