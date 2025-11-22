/**
 * Componente AdminPage
 * ---------------------
 * Vista principal del panel de administración.
 *
 * - Utiliza una sección centrada vertical y horizontalmente mediante flexbox.
 * - `min-h-[70vh]` garantiza que el contenido ocupe suficiente espacio
 *   para mantener una composición equilibrada incluso con poco contenido.
 * - El texto principal usa la clase personalizada `h1__basketmall`,
 *   manteniendo la coherencia tipográfica del proyecto.
 *
 * Este componente sirve como contenedor estático, y puede ampliarse
 * fácilmente con herramientas administrativas, formularios o enlaces.
 */

function AdminPage() {
  return (
    <section className="flex items-center justify-center min-h-[70vh]">
      {/* Título del panel administrativo */}
      <p className="h1__basketmall">
        Panel de Administrador
      </p>
    </section>
  );
}

export default AdminPage;
