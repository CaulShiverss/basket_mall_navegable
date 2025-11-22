import { useNavigate } from "react-router-dom";

/**
 * Componente BackButton
 * ---------------------
 * Botón accesible que permite volver a la página anterior utilizando
 * la función navigate(-1) de react-router-dom.
 *
 * - Incluye texto visible y una flecha decorativa.
 * - Usa Tailwind para estilos responsivos y accesibles.
 * - Soporta navegación con teclado gracias a focus styles.
 */
function BackButton() {
  const navigate = useNavigate(); // Hook para controlar navegación programática

  return (
    <button
      onClick={() => navigate(-1)} // Retrocede una página en el historial
      aria-label="Volver a la página anterior" // Accesibilidad para lectores de pantalla
      className="
        inline-flex items-center gap-2
        px-4 py-2
        text-sm font-medium
        text-gray-800
        bg-white 
        border border-gray-300
        rounded-xl
        shadow-sm
        hover:bg-gray-100 
        focus:outline-none
        focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        cursor-pointer
        transition
      "
    >
      {/* Flecha decorativa: aria-hidden evita que la lean los lectores de pantalla */}
      <span aria-hidden="true">←</span>

      {/* Texto principal del botón */}
      Volver
    </button>
  );
}

export default BackButton;
