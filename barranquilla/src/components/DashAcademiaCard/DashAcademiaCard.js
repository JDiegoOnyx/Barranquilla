import React from 'react'
import '../../components/main.css'
import ImagenUser from '../../assets/img/Imagen-prueba.jpg'
import GraficoPastel from '../GraficoPastel/GraficoPastel'

function DashAcademiaCard() {
  return (
    <div  className=''>
       <div className='dash-academia-card'>
            <h4 className='dash-academia-titulo'>
            <i>Cursos más buscados a nivel nacional</i>
            </h4>
            <p className='dash-academia-subtitulo'>
            <i>Academia GT 360</i>
            </p>
            <div className='dash-grafico-pastel'>
              <div>
                <GraficoPastel/>
              </div>
              <div className='dash-grafico-contenedor'>
                <div className='dash-grafico-pastel-texto-1'></div>
                <div>
                  Animación
                </div>
                <div className='dash-grafico-pastel-texto-2'></div>
                <div>
                  Programación
                </div>
                <div className='dash-grafico-pastel-texto-3'></div>
                <div>
                  Unity
                </div>
                <div className='dash-grafico-pastel-texto-4'></div>
                <div>
                  Videojuegos en HTML 5
                </div>
                <div className='dash-grafico-pastel-texto-5'></div>
                <div>
                  Modelado 3D
                </div>
              </div>
            </div>
        </div>
    </div>    
  )
}

export default DashAcademiaCard