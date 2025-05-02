export default function ErrorMessage({ error, isDarkMode }) {
    console.log(error.message);
    return (
        <div className="flex flex-col justify-center items-center gap-4">
            <Message isDarkMode={isDarkMode} >Ups, hubo un Error...</Message>
            <Link to={"/admin"}>
                <Boton isDarkMode={isDarkMode} >Volver</Boton>
            </Link>
        </div>
    )
};