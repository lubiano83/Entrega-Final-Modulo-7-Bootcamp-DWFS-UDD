import Logo from "../Logo";

export default function Navbar() {
    return (
        <div className="flex justify-evenly items-center p-4 bg-amber-700 gap-2">
            <Logo />
            <img src="/sun-4-svgrepo-com.svg" alt="light" width={30} height={30} className='hover:scale-110 cursor-pointer'/>
            <img src="/user-circle-svgrepo-com-white.svg" alt="user" width={30} height={30} className='hover:scale-110 cursor-pointer'/>
        </div>
    )
};