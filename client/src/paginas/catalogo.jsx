import productos from "../datos/productos";
import '../estilos/catalogo.css';

function Catalogo({verDetalle}) {
    return (
        <div className="catalogo">
            <h2>Catalogo de productos</h2>

            <div className="grilla">
                {productos.map(producto => (
                    <div key={producto.id} className="producto" onClick={() => verDetalle(producto.id)}>
                        <img src={producto.imagen} alt={producto.nombre} />
                        <h3>{producto.nombre}</h3>
                        <p>${producto.precio}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}
export default Catalogo;