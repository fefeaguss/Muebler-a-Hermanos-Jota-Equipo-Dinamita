import TarjetaProducto from "../componentes/TarjetaProducto.jsx";
import productos from "../datos/productos";
import '../estilos/Catalogo.css';

export default function Catalogo({verDetalle}) {
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