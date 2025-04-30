import { useNavigate } from "react-router-dom"
import SvgImage from "../SvgImage";

export default function Navigate({ children }) {

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleGoFoward = () => {
        navigate(1);
    };

    return (
        <div className="bg-amber-500 text-white flex justify-between items-center w-full">
            <div onClick={handleGoBack} className="pl-4">
                <SvgImage src={"/arrow-sm-left-svgrepo-com.svg"} />
            </div>
            { children }
            <div onClick={handleGoFoward} className="pr-4">
                <SvgImage src={"/arrow-sm-right-svgrepo-com.svg"} />
            </div>
        </div>
    )
};