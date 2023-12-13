import React from 'react'
import '../../components/main.css'
import ImagenUsuario from '../../assets/img/Imagen-prueba.jpg';
import PersonaRobotico from '../../assets/img/persona-robotico.webp';

function  GTSeccionDatos2_2() {
  return (
    <div  className='gt-seccion-datos-2-2-main'>  
      <img className='gt-seccion-datos-2-img'src={PersonaRobotico}/>
      <div className='gt-seccion-datos-2-info'>
        <div className='gt-seccion-datos-2-2-col-1'>
          <div className='gt-seccion-datos-2-title-1'>
              COP
          </div>
          <div className='gt-seccion-datos-2-title-1'>
              $1.000 Millones
          </div>
          <div className='gt-seccion-datos-2-1-text'>
            En regalías para la industria del videojuego en nuestro país
          </div>
        </div>
        <div className=''>
          <img className='gt-seccion-datos-2-icon' src={ImagenUsuario}/>
        </div>
      </div>
    </div>      
  )
}

export default GTSeccionDatos2_2