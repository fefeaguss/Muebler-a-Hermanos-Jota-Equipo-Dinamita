import { useState, useEffect } from "react";

export default function useProductos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [busqueda, setBusqueda] = useState(""); // 🔍 Estado para búsqueda

  // 🛠 Traer productos al montar la app
  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/productos");
        if (!res.ok) throw new Error("Error en el fetch");
        const data = await res.json();
        setProductos(data);
      } catch (err) {
        setError("Error al cargar productos");
      } finally {
        setLoading(false);
      }
    };
    cargarProductos();
  }, []);

  // 🔍 Filtrar productos según búsqueda
  const productosFiltrados = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return {
    productos,
    productosFiltrados,
    busqueda,
    setBusqueda,
    loading,
    error
  };
}