/*funciones fetch*/
/*
import { useState, useEffect } from "react";
export default function useProductos() {

const [productos, setProductos] = useState([])
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [productoSeleccionado, setProductoSeleccionado] = useState(null);
const [carrito, setCarrito] = useState([]);

// Traer productos al montar la app

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
    },[]);
    return {productos, loading, error, productoSeleccionado, carrito};
}
*/



   /* Funciones
   const seleccionarProducto = (producto) => {
     setProductoSeleccionado(producto);
   };
 
   const volverALista = () => {
     setProductoSeleccionado(null);
   };
 
   const addToCart = (producto) => {
     setCarrito((prev) => {
       const existe = prev.find((p) => p.id === producto.id);
       if (existe) {
         return prev.map((p) =>
           p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
         );
       }
       return [...prev, { ...producto, cantidad: 1 }];
     });
   };
 
   const getCartCount = () =>
     carrito.reduce((total, p) => total + p.cantidad, 0);
 
   // Render
   if (loading) return <p>Cargando...</p>;
   if (error) return <p>{error}</p>;
 
   return (
     <div>
       <Navbar cartCount={getCartCount()} />
       {!productoSeleccionado ? (
         <ProductList
           productos={productos}
           onSelect={seleccionarProducto}
           onAdd={addToCart}
         />
       ) : (
         <ProductDetail
           producto={productoSeleccionado}
           onAdd={addToCart}
           onBack={volverALista}
         />
       )}
     </div>
   );
 export default App;/*funciones fetch*/