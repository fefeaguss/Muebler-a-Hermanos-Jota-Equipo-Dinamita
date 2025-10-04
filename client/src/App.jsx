import { useState } from "react";
import BarraNavegacion from "./componentes/BarraNavegacion";
import VistaActual from "./componentes/VistaActual";
import Home from "./paginas/Home";
import Catalogo from "./paginas/catalogo";
import PiePagina from "./componentes/PiePagina";
import "./index.css";
function App() {
  //estados globales
  const [carrito, actualizarCarrito] = useState([]);
  const [productoSeleccionado, seleccionarProducto] = useState(null);
  const [vista, cambiarVista] = useState('home'); // 'catalogo', 'detalle', 'carrito', 'contacto'
  const [carrtioVisible, cambiarVisibilidadCarrito] = useState(false);

  const agregarAlCarrito = (producto) => {
    actualizarCarrito([...carrito, producto]);
  }

  const eliminarDelCarrito = (indice) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(indice, 1);
    actualizarCarrito(nuevoCarrito);
  }

  return (
    
    <>
      <BarraNavegacion
        cantidadCarrito={0}
        cambiarVista={() => {}}
        cambiarVisibilidadCarrito={() => {}}
      />
      <VistaActual 
        vista={vista}
        productoSeleccionado={productoSeleccionado}
        seleccionarProducto={seleccionarProducto}
        cambiarVista={cambiarVista}
        agregarAlCarrito={agregarAlCarrito}
        eliminarDelCarrito={eliminarDelCarrito}
      />
      <Home />
      <Catalogo />
      <PiePagina />
    </>
  );
}

export default App;
