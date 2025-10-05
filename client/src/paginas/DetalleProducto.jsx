import { useState } from 'react';
import '../estilos/detalleProducto.css';
function DetalleProducto({ producto, volverAlCatalogo, agregarAlCarrito }) {
  const [agregado, setAgregado] = useState(false);

  const manejarAgregar = () => {
    agregarAlCarrito(producto);
    setAgregado(true);
    setTimeout(() => setAgregado(false), 2000); // Resetea el estado después de 2 segundos
  }

  return (
    <div className="detalle">
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} style={{ width: '300px', borderRadius: '8px' }} />
      
      <div className='detalle-info'>
        <p>{producto.descripcion}</p>  
        <p><strong>Precio: ${producto.precio}</strong></p>
        {agregado && <p className="confirmacion"> Producto agregado al carrito</p>}
        
        <div className='botones'>
          <button onClick={manejarAgregar}>Añadir al carrito</button>
          <button onClick={volverAlCatalogo} style={{ marginLeft: '1rem' }}>Volver al catálogo</button>
        </div>
      </div>
    </div>
  );
}

export default DetalleProducto;
