export default function Title({ children, className }) {
    return (
        <h2 className={`text-xl underline font-bold italic ${className}`}>
            { children }
        </h2>
    )
};