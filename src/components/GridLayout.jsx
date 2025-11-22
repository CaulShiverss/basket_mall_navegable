/**
 * Componente GridLayout
 * ----------------------
 * Proporciona una estructura semántica para secciones que contienen un título
 * opcional y contenido organizado (generalmente en forma de grid).
 *
 * - Usa <section> para delimitar una parte temática de la página.
 * - El título es opcional y solo se renderiza si se recibe la prop `titulo`.
 * - `aria-labelledby` asocia la sección con su encabezado para accesibilidad.
 * - `children` permite inyectar cualquier contenido (grillas, tarjetas, etc.).
 */
function GridLayout({ children, titulo }) {
  return (
    <section
      aria-labelledby="main-section-title" // Describe la sección mediante el h1
      className="w-full max-w-7xl text-center"
    >
      {/* Renderizado condicional del título */}
      {titulo && (
        <h1
          id="main-section-title"    // Punto de referencia accesible
          className="h1__basketmall mb-6" // Clase personalizada del proyecto
        >
          {titulo}
        </h1>
      )}

      {/* Contenido pasado como children */}
      {children}
    </section>
  );
}

export default GridLayout;
