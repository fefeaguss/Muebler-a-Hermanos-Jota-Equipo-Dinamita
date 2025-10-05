
/*archivo principal */
// /src/App.jsx

import React, { useState, useEffect } from 'react';

// Importamos solo los componentes que sí existen
import Navbar from './Componentes-agregado/Navbar';
import ProductList from './Componentes-agregado/ProductList';
import ProductDetail from './Componentes-agregado/ProductDetail';

function App() {
  // Estados
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [carrito, setCarrito] = useState([]);

  // Efecto para traer los productos fetch
  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/productos");
        if (!res.ok) {
          throw new Error("Error en el fetch de productos");
        }
        const data = await res.json();
        setProductos(data);
      } catch (err) {
        setError("Error al cargar productos. Revisa que el servidor backend esté funcionando.");
      } finally {
        setLoading(false);
      }
    };
    cargarProductos();
  }, []);
  //termina fetch

  // Funciones para manejar eventos
  const handleSelectProducto = (producto) => {
    setProductoSeleccionado(producto);
  };

  const handleVolverALista = () => {
    setProductoSeleccionado(null);
  };
  
  const handleAddToCart = (producto) => {
    setCarrito(prevCarrito => [...prevCarrito, producto]);
    alert(`${producto.nombre} añadido al carrito!`);
  };

  // Lógica para decidir qué renderizar
  const renderContent = () => {
    if (loading) return <p style={{ textAlign: 'center' }}>Cargando...</p>;
    if (error) return <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>;

    if (productoSeleccionado) {
      return (
        <ProductDetail
          producto={productoSeleccionado}
          onAdd={handleAddToCart}
          onBack={handleVolverALista}
        />
      );
    } else {
      return (
        <ProductList
          productos={productos}
          onSelect={handleSelectProducto}
        />
      );
    }
  };

  // El JSX que se muestra en pantalla
  return (
    <div>
      <Navbar cartCount={carrito.length} />
      <main>
        {renderContent()}
      </main>
    </div>
  );
}

export default App;