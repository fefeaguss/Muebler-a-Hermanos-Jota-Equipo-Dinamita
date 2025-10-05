import "../estilos/barraNavegacion.css";
import { NavLink } from "react-router-dom";

export function BarraNavegacion({cantidadCarrito}) {
  return (
    <nav className="barra">
      <div className="logo">
        <img src="/logo.svg" alt="Logo Hermanos Jota" />
        <h2>Mueblería Hermanos Jota</h2>
      </div>

      <div className="botones">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "activo" : "")}
        >
          Inicio
        </NavLink>

        <NavLink
          to="/catalogo"
          className={({ isActive }) => (isActive ? "activo" : "")}
        >
          Catálogo
        </NavLink>

        <NavLink
          to="/contacto"
          className={({ isActive }) => (isActive ? "activo" : "")}
        >
          Contacto
        </NavLink>

        <NavLink
          to="/carrito"
          className={({ isActive }) => (isActive ? "activo" : "")}
        >
          🛒 Mi Carrito ({cantidadCarrito})
        </NavLink>
      </div>
    </nav>
  );
}


