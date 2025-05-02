import About from "../components/About";

export default function AboutPage({ isDarkMode }) {
    return (
        <div className={`${isDarkMode ? "text-amber-950" : "text-green-950"} h-full w-full flex flex-col justify-center items-center p-8 gap-4`}>
            <About isDarkMode={isDarkMode} />
        </div>
    )
};