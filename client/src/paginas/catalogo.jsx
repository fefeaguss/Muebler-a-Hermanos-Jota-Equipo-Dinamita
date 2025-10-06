import TarjetaProducto from "../componentes/TarjetaProducto.jsx";
import productos from "../datos/productos";
import '../estilos/catalogo.css';
import { useState } from "react";

export default function Catalogo({ verDetalle, agregarAlCarrito }) {
  const [busqueda, setBusqueda] = useState("");

  // Filtrar productos según búsqueda
  const productosFiltrados = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="catalogo">
      {/* Título principal */}
      <h2>Catálogo de Productos</h2>

      {/* Barra de búsqueda */}
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

      {/* Grilla de productos */}
      <div className="grilla">
        {productosFiltrados.map(producto => (
          <TarjetaProducto
            key={producto.id}
            producto={producto}
            verDetalle={verDetalle}
            agregarAlCarrito={agregarAlCarrito}
          />
        ))}
      </div>
    </div>
  );
}
