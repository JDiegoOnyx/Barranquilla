import React from 'react'
import '../../components/main.css'
import ImagenUsuario from '../../assets/img/Imagen-prueba.jpg';

function GTSeccionDatos2() {
  return (
    <div  className='gt-seccion-datos-2-main'>  
        <div className='gt-seccion-datos-2-col-1'>
          <img className='gt-seccion-datos-2-icon' src={ImagenUsuario}/>
        </div>
        <div className='gt-seccion-datos-2-col-2'>
          <div className='gt-seccion-datos-2-title'>
            Bots de datos
          </div>
          <div className='gt-seccion-datos-2-text'>
            Con machine learning nuestros Bots te ayudarán a sesgar tus datos más relevantes.
          </div>
          <div className='gt-seccion-datos-2-button'>
           <button className='gt-seccion-button'>Descubre aquí nuestros Bots</button>
          </div>
        </div>        
    </div>      
  )
}

export default GTSeccionDatos2