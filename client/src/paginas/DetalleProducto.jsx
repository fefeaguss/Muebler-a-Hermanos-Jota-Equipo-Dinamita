// import { useParams } from "react-router-dom";
// import productos from "../datos/productos";
// import { useState } from "react";
// import "../estilos/detalleProducto.css";
// import { NavLink } from "react-router-dom";

// function DetalleProducto({ agregarAlCarrito }) {
//   const { id } = useParams();
//   const producto = productos.find(p => p.id === parseInt(id));
//   const [agregado, setAgregado] = useState(false);

//   if (!producto) {
//     return <p>Producto no encontrado</p>;
//   }

//   const manejarAgregar = () => {
//     agregarAlCarrito(producto);
//     setAgregado(true);
//     setTimeout(() => setAgregado(false), 2000);
//   };

//   return (
//     <div className="detalle">
//       <h2>{producto.nombre}</h2>
//       <img src={producto.imagen} alt={producto.nombre}  />

//       <div className="detalle-info">
//         <p>{producto.descripcion}</p>
//         <p><strong>Precio: ${producto.precio}</strong></p>
//         {agregado && <p className="confirmacion">Producto agregado al carrito</p>}

//         <div className="botones">
//           <button onClick={manejarAgregar}>Añadir al carrito</button>
//           <NavLink to="/catalogo" className="btn-volver">← Volver al catálogo</NavLink>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DetalleProducto;
import { useParams, NavLink } from "react-router-dom";
import productos from "../datos/productos";
import { useState } from "react";
import "../estilos/detalleProducto.css";

function DetalleProducto({ agregarAlCarrito }) {
  const { id } = useParams();
  const producto = productos.find((p) => p.id === parseInt(id));
  const [agregado, setAgregado] = useState(false);

  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  const manejarAgregar = () => {
    agregarAlCarrito(producto);
    setAgregado(true);
    setTimeout(() => setAgregado(false), 2000);
  };

  // Filtramos las claves que no queremos mostrar en la lista
  const clavesExcluidas = ["id", "nombre", "imagen", "precio", "descripcion"];
  const detallesExtra = Object.entries(producto).filter(
    ([clave]) => !clavesExcluidas.includes(clave)
  );

  return (
    <div className="detalle">
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} />

      <div className="detalle-info">
        <p className="descripcion">{producto.descripcion}</p>
        <p className="precio"><strong>Precio:</strong> ${producto.precio}</p>

        {/* Sección con todos los detalles dinámicos */}
        <ul className="lista-detalles">
          {detallesExtra.map(([clave, valor]) => (
            <li key={clave}>
              <strong>{clave.charAt(0).toUpperCase() + clave.slice(1)}:</strong> {valor}
            </li>
          ))}
        </ul>

        {agregado && <p className="confirmacion">Producto agregado al carrito</p>}

        <div className="botones">
          <button onClick={manejarAgregar}>🛒 Añadir al carrito</button>
          <NavLink to="/catalogo" className="btn-volver">← Volver al catálogo</NavLink>
        </div>
      </div>
    </div>
  );
}

export default DetalleProducto;
