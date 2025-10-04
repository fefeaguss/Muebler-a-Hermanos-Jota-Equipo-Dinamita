import productos from "../datos/productos";
import TarjetaProducto from "../componentes/TarjetaProducto";
import '../estilos/catalogo.css';

function Catalogo({verDetalle}) {
    return (
        <div className="catalogo">
            <h2>Catalogo de productos</h2>

            <div className="grilla">
                {productos.map(producto => (
                    <TarjetaProducto 
                        key={producto.id} 
                        producto={producto} 
                        verDetalle={verDetalle}
                    />
                ))}

            </div>
        </div>
    )
}
export default Catalogo;