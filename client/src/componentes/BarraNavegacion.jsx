import "../estilos/BarraNavegacion.css";
function BarraNavegacion() {
  return (
    <nav className="barra">
      <img src="../../public/logo.svg" alt="" />
      <h2>Mueblería Hermanos Jota</h2>
      {/* <p>🛒 Carrito: {cantidadCarrito} productos</p> */}
      <div className="botones">
        <button > Inicio </button>
        <button > Catalogo </button>
        <button > Contacto </button>
        <button > 🛒 Mi Carrito  </button>
      </div>
    </nav>
  );
}

export default BarraNavegacion;
