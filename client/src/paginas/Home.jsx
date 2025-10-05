import "../estilos/home.css";
import { NavLink } from "react-router-dom";
import productos from "../datos/productos";

export function Home() {
  return (
    <div className="home">

      <h1>Bienvenido a Mueblería Hermanos Jota</h1>
      <p>Descubrí el arte de vivir con nuestros muebles exclusivos.</p>

      <NavLink to="/catalogo" className="btn-catalogo">
        Ver catalogo
      </NavLink>

      <section className="presentacion">
        <div className="presentacion-left">
          <h1>Calidez y nostalgia que envuelve</h1>
          <p className="descripcion">
            Creamos muebles únicos que combinan tradición, calidad y futuro.<br />
            Descubre piezas hechas a mano para transformar tus espacios.
          </p>
        </div>

        <div className="presentacion-right">
          <div className="collage">
            <div className="collage-item grande">
              <img src="../../public/Mesa Comedor Pampa.png" alt="Biblioteca Recoleta" />
            </div>
            <div className="collage-item vertical">
              <img src="../../public/Mesa Comedor Pampa.png" alt="Aparador Uspallata" />
            </div>
            <div className="collage-item cuadrado">
              <img src="../../public/Mesa Comedor Pampa.png" alt="Escritorio Costa" />
            </div>
          </div>
        </div>
      </section>

      <section className="productos-destacados">
        <div className="productos-titulo">
          <span>POPULAR</span>
          <h2>Productos Destacados</h2>
        </div>

        <div id="productosGrid" className="productos-grid">
          {productos.slice(0, 3).map(producto => (
            <div key={producto.id} className="producto-card">
              <img src={producto.imagen} alt={producto.nombre} />
              <h3>{producto.nombre}</h3>
              <p>${producto.precio.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
