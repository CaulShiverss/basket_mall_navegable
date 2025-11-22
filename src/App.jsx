/**
 * Componente App
 * ----------------
 * Componente principal de la aplicación que define la estructura global y
 * el enrutamiento de las páginas.
 *
 * - Incluye <Header /> y <Footer /> para mantener consistencia en todas las páginas.
 * - Usa <Routes> y <Route> de react-router-dom para definir rutas y layouts.
 * - <Container /> envuelve el contenido principal de cada página para
 *   aplicar estilos y estructura común.
 * - Permite navegación fluida sin recargar la página y soporte para rutas dinámicas.
 */

import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Container from "./components/Container";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import Footer from "./components/Footer";
import Details from "./pages/Details";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <>
      {/* Encabezado global */}
      <Header />

      {/* Rutas principales */}
      <Routes>
        {/* Contenedor común para todas las páginas */}
        <Route element={<Container />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/productos" element={<ProductsPage />} />
          <Route path="/productos/:id" element={<Details />} />
          <Route path="/admin" element={<AdminPage />} />

          {/* Ruta comodín para páginas no encontradas */}
          <Route
            path="*"
            element={<p className="body-text">Página no encontrada</p>}
          />
        </Route>
      </Routes>

      {/* Pie de página global */}
      <Footer />
    </>
  );
}

export default App;
