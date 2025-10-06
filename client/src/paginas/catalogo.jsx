import TarjetaProducto from "../componentes/TarjetaProducto.jsx";
// import productos from "../datos/productos";
import '../estilos/catalogo.css';
import { useState, useEffect } from "react";

export default function Catalogo({ verDetalle, agregarAlCarrito }) {
  const [busqueda, setBusqueda] = useState("");
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // 🔄 Cargar productos desde el backend
    fetch("http://localhost:3000/api/productos")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error al obtener productos:", error);
        setCargando(false);
      });
  }, []);

  const productosFiltrados = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="catalogo">
      <h2>Catálogo de Productos</h2>

      <div className="catalogo-search">
        <div className="search">
          <img src="../img/search.svg" alt="Buscar" />
          <input
            type="text"
            placeholder="Buscar productos..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
      </div>

      {cargando ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="grilla">
          {productosFiltrados.map((producto) => (
            <TarjetaProducto
              key={producto.id}
              producto={producto}
              agregarAlCarrito={agregarAlCarrito}
              verDetalle={verDetalle}
            />
          ))}
        </div>
      )}
    </div>
  );
}
