import React from 'react'
import '../../components/main.css'
import ImagenUsuario from '../../assets/img/Imagen-prueba.jpg';
import ChatContacto from '../../assets/svg/chat-contacto.svg';
import PreguntasFrecuentes from '../../assets/svg/preguntas-frecuentes.svg';
import Blog from '../../assets/svg/blog.svg';

function Informativo() {
  return (
    <div className='informativo-main'>
        <div className='informativo-seccion-1'>
            <div>
                <img className='informativo-icon-1' src={ChatContacto}/>
            </div>
            <div>
                <h3 className='informativo-titulo-1'>
                    Chat de contacto
                </h3>
                <p className='informativo-descripcion-1'>
                    ¿Tienes preguntas?, escribenos y te las responderemos.
                </p>
            </div>
        </div>
        <div className='informativo-seccion-2'>
            <div>
                <img className='informativo-icon-2' src={PreguntasFrecuentes}/>
            </div>
            <div>
                <h3 className='informativo-titulo-2'>
                    Preguntas frecuentes
                </h3>
                <p className='informativo-descripcion-2'>
                    Consulta las preguntas frecuentes para obtener instrucciones precisas sobre funciones especificas.
                </p>
            </div>
        </div>
        <div className='informativo-seccion-3'>
            <div>
                <img className='informativo-icon-3' src={Blog}/>
            </div>
            <div>
                <h3 className='informativo-titulo-3'>
                    Blog
                </h3>
                <p className='informativo-descripcion-3'>
                    Mantente al dia de las útlimas historias y reportajes.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Informativo