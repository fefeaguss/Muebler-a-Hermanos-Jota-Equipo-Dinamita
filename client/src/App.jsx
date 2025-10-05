import { useState } from "react";
import { BarraNavegacion } from "./componentes/BarraNavegacion";

import { Home } from "./paginas/Home.jsx";
import Catalogo from "./paginas/Catalogo";
import PiePagina from "./componentes/PiePagina";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
export function App() {
  //estados globales
  const [carrito, actualizarCarrito] = useState([]);
  const [productoSeleccionado, seleccionarProducto] = useState(null);
  //const [vista, cambiarVista] = useState('home'); // 'catalogo', 'detalle', 'carrito', 'contacto'
  const [carrtioVisible, cambiarVisibilidadCarrito] = useState(false);

  const agregarAlCarrito = (producto) => {
    actualizarCarrito([...carrito, producto]);
  };

  const eliminarDelCarrito = (indice) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(indice, 1);
    actualizarCarrito(nuevoCarrito);
  };

  return (
    <>
      <BrowserRouter>
        <BarraNavegacion
          cantidadCarrito={0}
          cambiarVisibilidadCarrito={() => {}}
        />

        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/catalogo" element={<Catalogo />} />
        </Routes>

        <PiePagina />
      </BrowserRouter>
    </>
  );
}
