import NotFound from "../components/NotFound";

export default function NotFoundPage({ isDarkMode }) {

    return (
        <div className={`${isDarkMode ? "text-amber-950" : "text-green-950"} h-full w-full flex flex-col justify-center items-center p-8 gap-4`}>
            <NotFound isDarkMode={isDarkMode} />
        </div>
    )
};