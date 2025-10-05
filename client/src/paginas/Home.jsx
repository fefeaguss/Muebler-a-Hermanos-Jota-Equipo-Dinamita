import "../estilos/home.css";
import { NavLink } from "react-router-dom";

export function Home() {
  return (
    <div className="home">
      <h1>Bienvenido a Mueblería Hermanos Jota</h1>
      <p>Descubrí el arte de vivir con nuestros muebles exclusivos.</p>
      <img src="../assets/imagenes/Mesa Comedor Pampa.png" alt="" />

      <NavLink
        to="/catalogo"
        className="btn-catalogo"
      >
        Ver catalogo
      </NavLink>
    </div>
  );
}
