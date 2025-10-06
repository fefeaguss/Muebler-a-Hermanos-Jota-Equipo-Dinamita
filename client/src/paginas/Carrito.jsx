import '../estilos/carrito.css';
import { NavLink } from 'react-router-dom';

export default function Carrito({ productosCarrito, eliminarDelCarrito }) {
  const total = productosCarrito.reduce(
    (suma, producto) => suma + producto.precio,
    0
  );
  return (
    <div className='carrito-panel'>
      <h2>🛒Carrito de Compras</h2>

      {productosCarrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          <ul>
            {productosCarrito.map((producto, indice) => (
              <li key={indice} style={{ marginBottom: "1rem" }}>
                <strong>{producto.nombre}</strong> - ${producto.precio}
                <button className='eliminar' onClick={() => eliminarDelCarrito(indice)}> Eliminar </button>
              </li>
            ))}
          </ul>
          <h3 className='total'>
            <strong > Total: ${total} </strong>
          </h3>
        </div>
      )}

      <NavLink to="/catalogo" className="btn-volver">
        Volver 
      </NavLink>
    </div>
  );
}