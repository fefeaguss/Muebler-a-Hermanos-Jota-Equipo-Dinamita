import { useParams, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "../estilos/detalleProducto.css";

function DetalleProducto({ agregarAlCarrito }) {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [agregado, setAgregado] = useState(false);

  // 🔄 Traer el producto desde el backend
  useEffect(() => {
    fetch(`http://localhost:3000/api/productos/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Producto no encontrado");
        return res.json();
      })
      .then((data) => {
        setProducto(data);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error al obtener el producto:", error);
        setCargando(false);
      });
  }, [id]);

  if (cargando) return <p>Cargando producto...</p>;
  if (!producto) return <p>Producto no encontrado</p>;

  const manejarAgregar = () => {
    agregarAlCarrito(producto);
    setAgregado(true);
    setTimeout(() => setAgregado(false), 2000);
  };

  // 🔍 Filtramos las claves que no queremos mostrar
  const clavesExcluidas = ["id", "nombre", "imagen", "precio", "descripcion"];
  const detallesExtra = Object.entries(producto).filter(
    ([clave]) => !clavesExcluidas.includes(clave)
  );

  return (
    <div className="detalle">
      <h2>{producto.nombre}</h2>
      <img src={`http://localhost:3000${producto.imagen}`} alt={producto.nombre} />

      <div className="detalle-info">
        <p className="descripcion">{producto.descripcion}</p>
        <p className="precio">
          <strong>Precio:</strong> ${producto.precio}
        </p>

        <ul className="lista-detalles">
          {detallesExtra.map(([clave, valor]) => (
            <li key={clave}>
              <strong>{clave.charAt(0).toUpperCase() + clave.slice(1)}:</strong>{" "}
              {valor}
            </li>
          ))}
        </ul>

        {agregado && <p className="confirmacion">Producto agregado al carrito ✅</p>}

        <div className="botones">
          <button onClick={manejarAgregar}>🛒 Añadir al carrito</button>
          <NavLink to="/catalogo" className="btn-volver">
            ← Volver al catálogo
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default DetalleProducto;
