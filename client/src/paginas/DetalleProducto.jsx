import '../estilos/detalleProducto.css';
function DetalleProducto({ producto, volverAlCatalogo }) {
  

  return (
    <div className="detalle">
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} style={{ width: '300px', borderRadius: '8px' }} />
      
      <div className='detalle-info'>
        <p>{producto.descripcion}</p>  
        <p><strong>Precio: ${producto.precio}</strong></p>
        
        <div className='botones'>
          <button onClick={volverAlCatalogo} style={{ marginLeft: '1rem' }}>Volver al catálogo</button>
        </div>
      </div>
    </div>
  );
}

export default DetalleProducto;
