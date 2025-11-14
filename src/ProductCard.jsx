function ProductCard(props) {
    const { foto, nombre, precio, categoria, children } = props;
    return (
        <article
            tabIndex="0"
            className="flex flex-col items-start gap-3 p-4 rounded-lg bg-[linear-gradient(0deg,rgba(247,247,247,1)_0%,rgba(247,247,247,1)_100%)] shadow-lg hover:shadow-2xl transition-transform transition-shadow ease-in-out hover:scale-105 duration-600"
            aria-label={`Producto ${nombre}`}
        >
            <figure className="w-full aspect-square rounded-lg bg-gray-100 overflow-hidden">
                <img
                    src={foto}
                    alt={`Foto de ${nombre}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300"
                />
                <figcaption className="sr-only">{children}</figcaption>
            </figure>

            <header>
                <h2
                    className={`text-(--heading-h5-font-size) font-(--heading-h5-font-weight) leading-(--heading-h5-line-height) text-gray-800`}
                >
                    <strong>{nombre}</strong>
                </h2>
            </header>
            <div className="text-gray-800 text-sm text-left space-y-1 mt-2">
              <p><strong>Categoría:</strong> {categoria}</p>
              <p><strong>Precio:</strong> ${precio}</p>
            </div>
            <p className="text-(--body-text-font-size) leading-(--body-text-line-height)">
                {children}
            </p>
        </article>

    );
}

export default ProductCard;