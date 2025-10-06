import '../estilos/tarjetaProducto.css';
import { NavLink } from "react-router-dom";

export default function TarjetaProducto({ producto, agregarAlCarrito }) {

  return (
    <div className="tarjeta">
      <h3>{producto.nombre}</h3>

      <img src={`http://localhost:3000${producto.imagen}`} alt={producto.nombre} />
      <div className="detalle-info">
        <p>{producto.materiales}</p>
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
