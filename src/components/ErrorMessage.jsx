export default function ErrorMessage(error) {
    console.log(error.message);
    return (
        <div className="flex flex-col justify-center items-center gap-4">
            <Message>Ups, hubo un Error...</Message>
            <Link to={"/admin"}>
                <Boton>Volver</Boton>
            </Link>
        </div>
    )
};