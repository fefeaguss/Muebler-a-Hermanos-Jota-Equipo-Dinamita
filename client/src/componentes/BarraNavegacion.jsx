import "../estilos/BarraNavegacion.css";
function BarraNavegacion({
  cantidadCarrito,
  cambiarVista,
  cambiarVisibilidadCarrito,
}) {
  return (
    <nav className="barra">
      <h2>Mueblería Hermanos Jota</h2>
      {/* <p>🛒 Carrito: {cantidadCarrito} productos</p> */}
      <div className="botones">
        <button onClick={() => cambiarVista("home")}> Inicio </button>
        <button onClick={() => cambiarVista("catalogo")}> Catalogo </button>
        <button onClick={() => cambiarVista("contacto")}> Contacto </button>
        <button
          className="carrito-boton"
          onClick={() => cambiarVisibilidadCarrito(true)}
        >
          🛒 Mi Carrito
          {cantidadCarrito > 0 && (
            <span className="carrito-badge">{cantidadCarrito}</span>
          )}
        </button>
      </div>
    </nav>
  );
}

export default BarraNavegacion;
