/**
 * Componente Container
 * ---------------------
 * Actúa como contenedor principal para las vistas renderizadas por React Router 
 * mediante <Outlet />. Proporciona un área estructurada y centrada para el contenido.
 *
 * - Usa <main> por semántica correcta del contenido principal.
 * - Incluye un tabIndex="-1" para permitir que lectores de pantalla
 *   y scripts puedan enfocar el contenido principal.
 * - Aplica estilos responsivos para centrar y estructurar la página.
 */
import { Outlet } from "react-router-dom";

function Container() {
  return (
    <main
      id="main-content"          // Permite saltos rápidos con "Skip to content"
      role="main"                // Refuerza la semántica del área principal
      tabIndex="-1"              // Habilita enfoque programático accesible
      className="
        container mx-auto 
        min-h-[75vh] 
        bg-white 
        flex flex-col 
        items-center justify-center 
        p-8
      "
    >
      {/* Render dinámico de rutas hijas */}
      <Outlet />
    </main>
  );
}

export default Container;
