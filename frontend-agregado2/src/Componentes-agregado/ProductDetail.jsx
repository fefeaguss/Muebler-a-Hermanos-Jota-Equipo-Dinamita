function ProductDetail({ producto, onAdd, onBack }) {
  return (
    <div style={{ padding: "20px" }}>
      <button onClick={onBack}>⬅ Volver</button>
      <h2>{producto.nombre}</h2>
      <img
        src={producto.imagen}
        alt={producto.nombre}
        style={{ width: "400px", objectFit: "cover" }}
      />
      <p>{producto.descripcion}</p>
      <p><strong>${producto.precio}</strong></p>
      <button onClick={() => onAdd(producto)}>Añadir al carrito</button>
    </div>
  );
}

export default ProductDetail;
