/**
 * Componente ProductsPage
 * ------------------------
 * Muestra un listado de todos los productos disponibles en la tienda.
 *
 * - Utiliza GridLayout para mantener coherencia visual y estructura.
 * - Cada producto se representa con un componente Card que incluye
 *   imagen, nombre, categoría, precio y descripción.
 * - Los productos están envueltos en enlaces (<Link>) que permiten
 *   navegar a la página de detalles correspondiente.
 * - La grilla es responsiva: 1 columna en móvil, 2 en tablet y 4 en escritorio.
 * - Se eliminan los estilos de lista predeterminados con `list-none` y
 *   se usan utilidades de Tailwind para espaciado y alineación.
 */

import GridLayout from "../components/GridLayout";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import productosBasket from "../data/productos";

function ProductsPage() {
  return (
    <GridLayout titulo="Productos">

      {/* Introducción al listado */}
      <p className="body-text">
        Listado de productos disponibles:
      </p>

      {/* Sección con la grilla de productos */}
      <section className="w-full mt-8">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none p-0 items-stretch">
          {productosBasket.map((producto, index) => (
            // Enlace a la página de detalles del producto
            <Link to={`/productos/${index}`} key={index} className="no-underline">

              <Card
                key={index}                // Clave para iteración en React
                nombre={producto.nombre}   // Nombre del producto
                foto={producto.imagen}     // Imagen del producto
                categoria={producto.categoria} // Categoría
                precio={producto.precio}   // Precio
              >
                {producto.descripcion}      {/* Descripción como children */}
              </Card>

            </Link>
          ))}
        </ul>
      </section>
    </GridLayout>
  );
}

export default ProductsPage;
