/**
 * Componente Card
 * ----------------
 * Representa una tarjeta reutilizable que muestra una imagen, un nombre
 * y una descripción opcional (props.children).
 *
 * - Usa un <article> por semántica de contenido autónomo.
 * - La imagen se envuelve en <figure> y <figcaption> accesible.
 * - Incluye animaciones suaves con Tailwind y un hover responsivo.
 */
function Card(props) {
    const { foto, nombre } = props;

    return (
        <article
            className="
                flex flex-col items-start gap-3 
                p-4 
                rounded-lg 
                bg-gray-100 
                shadow-md 
                hover:shadow-lg 
                transition-transform duration-300 
                hover:scale-105 
                h-full
            "
            aria-label={`${nombre}`} // Etiqueta accesible con el nombre
        >
            {/* Imagen representativa del recurso */}
            <figure className="w-full aspect-square rounded-lg bg-gray-100 overflow-hidden">
                <img
                    src={foto}
                    alt={`Foto de ${nombre}`} // Texto alternativo accesible
                    loading="lazy"            // Optimización de rendimiento
                    className="w-full h-full object-cover"
                />

                {/* Figcaption oculto visualmente, útil si children añade significado */}
                <figcaption className="sr-only">
                    {props.children}
                </figcaption>
            </figure>

            {/* Título del recurso */}
            <header>
                <h2 className="
                    text-(--heading-h5-font-size) 
                    font-(--heading-h5-font-weight) 
                    leading-(--heading-h5-line-height) 
                    text-gray-800
                ">
                    <strong>{nombre}</strong>
                </h2>
            </header>

            {/* Descripción opcional pasada como children */}
            <p className="
                text-(--body-text-font-size) 
                leading-(--body-text-line-height)
            ">
                {props.children}
            </p>
        </article>
    );
}

export default Card;
