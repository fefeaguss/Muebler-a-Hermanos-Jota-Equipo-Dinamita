import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import { fetchProductos } from "./api/productosApi";

function App() {
  // Estados
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [carrito, setCarrito] = useState([]);

  // Traer productos al montar la app
  useEffect(() => {
    const cargarProductos = async () => {
      //estado para la lista de productos que vendra de api 
      
      try {
        const data = await fetchProductos();
        setProductos(data);
      } catch (err) {
        setError("Error al cargar productos");
      } finally {
        setLoading(false);
      }
    };
    cargarProductos();
  }, []);

  // Funciones
  const seleccionarProducto = (producto) => {
    setProductoSeleccionado(producto);
  };

  const volverALista = () => {
    setProductoSeleccionado(null);
  };

  const addToCart = (producto) => {
    setCarrito((prev) => {
      const existe = prev.find((p) => p.id === producto.id);
      if (existe) {
        return prev.map((p) =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const getCartCount = () =>
    carrito.reduce((total, p) => total + p.cantidad, 0);

  // Render
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Navbar cartCount={getCartCount()} />
      {!productoSeleccionado ? (
        <ProductList
          productos={productos}
          onSelect={seleccionarProducto}
          onAdd={addToCart}
        />
      ) : (
        <ProductDetail
          producto={productoSeleccionado}
          onAdd={addToCart}
          onBack={volverALista}
        />
      )}
    </div>
  );
}

export default App;
