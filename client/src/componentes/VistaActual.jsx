import Catalogo from "../paginas/catalogo";

import Home from "../paginas/Home";

function VistaActual({ 
    vista, 
    cambiarVista,
}) {

    if(vista === 'home'){
        return <Home cambiarVista={cambiarVista}/>
    }
    if(vista === 'catalogo'){
        return <Catalogo cambiarVista={cambiarVista}/>
    }
    
    return null
}       
export default VistaActual;