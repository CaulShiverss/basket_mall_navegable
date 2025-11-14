import ProductGrid from "./ProductGrid";
import ProductCard from "./ProductCard";
import productosBasket from "./data/productos"; // tu nuevo array de productos

function App() {
  return (

    <ProductGrid titulo="Productos" className="max-w-7xl mx-auto px-8 py-12">

      <p className="body-text text-lg mb-10 text-gray-700">
        Catálogo de artículos disponibles:
      </p>


      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-10 justify-items-center">
        {productosBasket.map((producto, index) => (

          <ProductCard
            key={index}
            nombre={producto.nombre}
            foto={producto.imagen}
            categoria={producto.categoria}
            precio={producto.precio}
          >
            {producto.descripcion}
          </ProductCard>

        ))}
      </section>
    </ProductGrid>
  );
}

export default App;
