import Title from "./Title";

export default function Inicio() {

    return (
        <div className="w-1/2 flex flex-col justify-center items-center gap-4 bg-amber-100 p-4 rounded-2xl shadow-sm shadow-amber-950 max-w-3xl min-w-72">
            <Title>Las Trancas Lodges</Title>
            <h3 className="text-lg">Las Trancas Lodges es una plataforma innovadora pensada para facilitar la publicación y arriendo de cabañas en la zona de Las Trancas, un destino turístico de creciente interés, ubicado a minutos de los centros de ski de Nevados de Chillán. Tanto propietarios particulares como complejos turísticos pueden registrar sus alojamientos y ofrecerlos directamente a visitantes interesados en disfrutar de la naturaleza, la nieve y las actividades de montaña.</h3>
            <h3 className="text-lg">La aplicación permite crear publicaciones detalladas, incluyendo fotografías, cantidad de habitaciones, baños, tamaño de la propiedad, capacidad de personas y precios diferenciados según la temporada (alta, media o baja). Cada propietario puede gestionar fácilmente la disponibilidad de su cabaña, actualizar datos en cualquier momento y mantener su oferta actualizada y competitiva.</h3>
            <h3 className="text-lg">Desde el lado del visitante, la plataforma ofrece una experiencia simple e intuitiva: los usuarios pueden navegar entre las distintas opciones disponibles, visualizar información clara de cada propiedad y contactar a los propietarios de forma directa para realizar consultas o coordinar reservas.</h3>
            <h3 className="text-lg">En el corto plazo, Las Trancas Lodges proyecta la incorporación de un sistema de reservas online con calendario de disponibilidad en tiempo real, además de integrar métodos de pago seguros que permitan concretar el arriendo dentro de la misma plataforma. También se contempla habilitar perfiles públicos para cada propiedad, reseñas de usuarios, y expandir la oferta a otras zonas turísticas de Chile, posicionándose como el portal líder de hospedaje en destinos de naturaleza y aventura.</h3>
        </div>
    )
};