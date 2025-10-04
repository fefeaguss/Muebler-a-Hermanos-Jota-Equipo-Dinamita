import PiePagina from './componentes/PiePagina';
import Home from './paginas/Home';
import Catalogo from './paginas/catalogo';
import BarraNavegacion from './componentes/BarraNavegacion';
import './index.css';
function App() {
  

  return (
    <>
    <BarraNavegacion cantidadCarrito={0} cambiarVista={()=>{}} cambiarVisibilidadCarrito={()=>{}}/>
    <Home/>
    <Catalogo/>
    <PiePagina/>
    </>
  )
}

export default App
