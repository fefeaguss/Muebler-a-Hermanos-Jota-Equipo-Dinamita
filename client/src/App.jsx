import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { BarraNavegacion } from "./componentes/BarraNavegacion.jsx";
import { Home } from "./paginas/Home.jsx";
import Catalogo from "./paginas/Catalogo.jsx";
import FormularioContacto from "./paginas/FormularioContacto.jsx";
import Carrito from "./paginas/Carrito.jsx";
import DetalleProducto from "./paginas/DetalleProducto.jsx";
import PiePagina from "./componentes/PiePagina.jsx";

import "./index.css";

export function App() {
  // //estados globales
  const [carrito, actualizarCarrito] = useState([]);
  // const [productoSeleccionado, seleccionarProducto] = useState(null);
  // //const [vista, cambiarVista] = useState('home'); // 'catalogo', 'detalle', 'carrito', 'contacto'
  // const [carrtioVisible, cambiarVisibilidadCarrito] = useState(false);

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
        <BarraNavegacion cantidadCarrito={carrito.length} />

        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route
            path="/producto/:id"
            element={<DetalleProducto agregarAlCarrito={agregarAlCarrito} />}
          />
          <Route path="/contacto" element={<FormularioContacto />} />
          <Route
            path="/carrito"
            element={
              <Carrito
                productosCarrito={carrito}
                eliminarDelCarrito={eliminarDelCarrito}
              />
            }
          />
        </Routes>

        <PiePagina />
      </BrowserRouter>
    </>
  );
}
