import '../estilos/home.css';
import { useNavigate } from 'react-router-dom';



export function Home(){
    const navigate = useNavigate()

    

    return(
        <div className='home'>
            <h1>Bienvenido a Mueblería Hermanos Jota</h1>
            <p>Descubrí el arte de vivir con nuestros muebles exclusivos.</p>
            <img src="../assets/imagenes/Mesa Comedor Pampa.png" alt="" />
            <button onClick={() => cambiarVista('catalogo')}>Ver Catálogo</button>
        </div>
    )

}
