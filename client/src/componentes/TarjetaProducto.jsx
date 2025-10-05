import '../estilos/detalleProducto.css';
import { NavLink } from "react-router-dom";

export default function TarjetaProducto({ producto, agregarAlCarrito }) {

  return (
    <div className="tarjeta">
      <h2>{producto.nombre}</h2>

      <img 
        src={producto.imagen} 
        alt={producto.nombre} 
      />

      <div className="detalle-info">
        <p>{producto.descripcion}</p>
        <p><strong>Precio: ${producto.precio}</strong></p>

        <div className="botones">
          <NavLink to={`/producto/${producto.id}`} className="btn-ver-detalle">
            Ver detalle
          </NavLink>

          <button 
            onClick={() => agregarAlCarrito(producto)} 
            className="btn-agregar"
          >
            🛒 Agregar al carrito
          </button>
          
        </div>
      </div>
    </div>
  );
}
