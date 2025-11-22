/**
 * Componente Header
 * ------------------
 * Encapsula el encabezado principal de la aplicación.
 *
 * - Incluye el título "Basket Mall" como identificador visual del sitio.
 * - Incorpora el componente <Nav />, que contiene la barra de navegación.
 * - Utiliza estilos Tailwind y la clase personalizada `primary-bg`
 *   para mantener coherencia con la identidad visual del proyecto.
 * - El contenedor interno centra el contenido y lo distribuye con flexbox.
 */
import Nav from "./Nav";

function Header() {
  return (
    <header className="text-white p-4 shadow-lg primary-bg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Título principal del sitio */}
        <h1 className="text-2xl font-bold">Basket Mall</h1>

        {/* Barra de navegación */}
        <Nav />
      </div>
    </header>
  );
}

export default Header;
