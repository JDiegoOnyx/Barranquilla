import React from 'react'
import '../../components/main.css'
import BotonAction from '../BotonAction/BotonAction';
import llamadoAction from '../../assets/img/llamadoAction.png';

function Slide1() {
  return (
    <div loading='lazy' alt='Slide 1'>
        <div className='slider-main'>
            <div className='slider-icon-left'>
            </div>
            <div className='slider-seccion-1'> 
                <div className='slider-text-title-1'>
                    Sigue las tendencias más importantes
                </div>
                <div className='slider-text-1'>
                    Últimas novedades de la industria tecnológica y de videojuegos
                </div>
                <div className='slider-main-boton-action'>
                    <BotonAction/>
                </div>
            </div>
            <div className='slider-seccion-2'>
                <img className='slider-img' src={llamadoAction}/>
            </div>
            <div className='slider-icon-right'>
            </div>
        </div>
    </div> 
  )
}

export default Slide1