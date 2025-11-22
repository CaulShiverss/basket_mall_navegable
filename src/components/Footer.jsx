/**
 * Componente Footer
 * ------------------
 * Representa el pie de página del sitio, mostrando información legal y de derechos.
 *
 * - Usa la etiqueta <footer> por semántica HTML adecuada.
 * - Centra el contenido horizontal y verticalmente.
 * - Aplica clases utilitarias para estilado consistente.
 * - Incluye el símbolo © y un texto informativo.
 *
 */
function Footer() {
    return (
        <footer
            className="
                text-white 
                p-4 
                shadow-lg 
                primary-bg 
                mt-8
            "
        >
            <div
                className="
                    container 
                    mx-auto 
                    flex 
                    justify-center 
                    items-center 
                    h-30
                "
            >
                {/* Texto legal del sitio */}
                <p className="text-center">
                    &copy; 2024 Basket Mall. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
