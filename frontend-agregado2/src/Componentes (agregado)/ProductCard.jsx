function ProductCard({ producto, onSelect, onAdd }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
      <img
        src={producto.imagen}
        alt={producto.nombre}
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />
      <h3>{producto.nombre}</h3>
      <p>${producto.precio}</p>
      <button onClick={() => onSelect(producto)}>Ver detalle</button>
      <button onClick={() => onAdd(producto)}>Añadir al carrito</button>
    </div>
  );
}

export default ProductCard;
