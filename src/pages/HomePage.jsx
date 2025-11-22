/**
 * Componente HomePage
 * -------------------
 * Página principal de la aplicación.
 *
 * - Utiliza una sección centrada tanto vertical como horizontalmente
 *   mediante flexbox.
 * - `min-h-[70vh]` asegura que la sección ocupe al menos el 70% de la altura
 *   de la ventana, manteniendo equilibrio visual.
 * - El título principal utiliza la clase personalizada `h1__basketmall`
 *   para mantener coherencia tipográfica con el resto del proyecto.
 * - Actualmente es estático, pero puede ampliarse con componentes dinámicos
 *   o secciones destacadas de productos.
 */

function HomePage() {
  return (
    <section className="flex items-center justify-center min-h-[70vh]">
      {/* Título principal */}
      <p className="h1__basketmall">
        Página principal
      </p>
    </section>
  );
}

export default HomePage;
