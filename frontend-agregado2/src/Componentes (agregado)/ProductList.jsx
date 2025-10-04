import ProductCard from "./ProductCard";

function ProductList({ productos, onSelect, onAdd }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", padding: "20px" }}>
      {productos.map((producto) => (
        <ProductCard
          key={producto.id}
          producto={producto}
          onSelect={onSelect}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}

export default ProductList;
