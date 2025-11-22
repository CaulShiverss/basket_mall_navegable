/**
 * Componente Nav
 * ---------------
 * Proporciona la barra de navegación principal del sitio con soporte para
 * dispositivos móviles mediante un menú hamburguesa.
 *
 * Accesibilidad:
 * - Usa `role="navigation"` y `aria-label` para describir el propósito del bloque.
 * - El botón hamburguesa gestiona estados accesibles (`aria-expanded`,
 *   `aria-controls`, `aria-haspopup`).
 * - El menú móvil usa `aria-hidden` para indicar visibilidad a lectores de pantalla.
 *
 * Responsividad:
 * - En pantallas grandes (md+), se muestra el menú horizontal.
 * - En pantallas pequeñas, se oculta el menú principal y aparece el hamburguesa.
 *
 * Estado:
 * - `open` controla si el menú móvil está visible o no.
 */

import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [open, setOpen] = useState(false); // Controla la apertura del menú móvil

  return (
    <section
      role="navigation"
      aria-label="Navegación principal"
      className="p-4 flex justify-between items-center text-white"
    >
      {/* Menú principal para pantallas grandes */}
      <nav className="hidden md:flex gap-6" aria-label="Enlaces principales">
        <Link to="/" className="hover:text-blue-300 transition">
          Inicio
        </Link>
        <Link to="/productos" className="hover:text-blue-300 transition">
          Productos
        </Link>
        <Link to="/admin" className="hover:text-blue-300 transition">
          Administrador
        </Link>
      </nav>

      {/* Botón hamburguesa para móvil */}
      <button
        onClick={() => setOpen(!open)}                     // Alterna estado
        className="md:hidden text-3xl"
        aria-expanded={open}                               // Estado accesible
        aria-controls="mobile-menu"                        // Asocia botón con menú
        aria-haspopup="true"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}   // Texto accesible
      >
        ☰
      </button>

      {/* Menú móvil colapsable */}
      <nav
        id="mobile-menu"
        className={`absolute top-16 right-4 primary-bg p-4 rounded-lg flex flex-col gap-3 md:hidden transition ${
          open ? "block" : "hidden"
        }`}
        aria-hidden={!open}                                   // Indica si está oculto
        aria-label="Menú móvil"
      >
        <NavLink
          to="/"
          onClick={() => setOpen(false)}                      // Cierra el menú al navegar
          className="hover:text-blue-300"
        >
          Inicio
        </NavLink>

        <NavLink
          to="/productos"
          onClick={() => setOpen(false)}
          className="hover:text-blue-300"
        >
          Productos
        </NavLink>

        <NavLink
          to="/admin"
          onClick={() => setOpen(false)}
          className="hover:text-blue-300"
        >
          Administrador
        </NavLink>
      </nav>
    </section>
  );
}

export default Nav;
