function Navbar({ cartCount }) {
  return (
    <nav style={{ padding: "10px", background: "#eee", display: "flex", justifyContent: "space-between" }}>
      <h2>Mueblería Jota</h2>
      <div>
        🛒 Carrito: <strong>{cartCount}</strong>
      </div>
    </nav>
  );
}

export default Navbar;
