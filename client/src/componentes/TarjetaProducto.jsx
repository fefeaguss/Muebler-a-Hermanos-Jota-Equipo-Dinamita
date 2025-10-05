import '../estilos/TarjetaProducto.css';

function TarjetaProducto({ producto, verDetalle }) {
    return (
        <div className="tarjeta">
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <p> <strong> ${producto.precio} </strong></p>
            <button onClick={()=> verDetalle(producto)}>Ver mas</button>
        </div>
    )
}

export default TarjetaProducto;