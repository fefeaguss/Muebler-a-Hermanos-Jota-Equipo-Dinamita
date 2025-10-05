import { useParams } from "react-router-dom";
import productos from "../datos/productos";
import { useState } from "react";
import "../estilos/detalleProducto.css";
import { NavLink } from "react-router-dom";

function DetalleProducto({ agregarAlCarrito }) {
  const { id } = useParams();
  const producto = productos.find(p => p.id === parseInt(id));
  const [agregado, setAgregado] = useState(false);

  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  const manejarAgregar = () => {
    agregarAlCarrito(producto);
    setAgregado(true);
    setTimeout(() => setAgregado(false), 2000);
  };

  return (
    <div className="detalle">
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre}  />

      <div className="detalle-info">
        <p>{producto.descripcion}</p>
        <p><strong>Precio: ${producto.precio}</strong></p>
        {agregado && <p className="confirmacion">Producto agregado al carrito</p>}

        <div className="botones">
          <button onClick={manejarAgregar}>Añadir al carrito</button>
          <NavLink to="/catalogo" className="btn-volver">← Volver al catálogo</NavLink>
        </div>
      </div>
    </div>
  );
}

export default DetalleProducto;
