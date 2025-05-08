import Message from "./Message";
import GoBack from "./GoBack";

export default function ErrorMessage({ isDarkMode, error, path }) {
    const { pathname } = new URL(path);
    const origin = decodeURIComponent(pathname.split("/").pop());
    console.log(`${origin}: ${error?.message}`)
    return (
        <div className="flex flex-col justify-center items-center gap-4">
            <Message isDarkMode={isDarkMode}>
                Ups, hubo un Error..
            </Message>
            <GoBack isDarkMode={isDarkMode} path={"/"} />
        </div>
    )
};