import { useState } from 'react';
import BarraNavegacion from './componentes/BarraNavegacion';
import VistaActual from './componentes/VistaActual';
import PiePagina from './componentes/PiePagina';
import Carrito from './paginas/Carrito';
import './index.css';

function Aplicacion() {
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

  return(
    <div>
      <BarraNavegacion 
        cantidadCarrito={carrito.length} 
        cambiarVista={cambiarVista}
        cambiarVisibilidadCarrito={cambiarVisibilidadCarrito}
      />

      <VistaActual 
        vista={vista}
        productoSeleccionado={productoSeleccionado}
        seleccionarProducto={seleccionarProducto}
        cambiarVista={cambiarVista}
        agregarAlCarrito={agregarAlCarrito}
        eliminarDelCarrito={eliminarDelCarrito}
      />
      {
        carrtioVisible && (
          <Carrito
            productosCarrito={carrito}
            eliminarDelCarrito={eliminarDelCarrito}
            cerrarCarrito={() => cambiarVisibilidadCarrito(false)}
          />
        )
      }

      <PiePagina />
    </div>
  )
}
export default Aplicacion;