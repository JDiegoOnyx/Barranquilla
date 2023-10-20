import React from 'react'
import '../../components/main.css'
import llamadoAction from '../../assets/img/llamadoAction.png';
import BotonAction from '../BotonAction/BotonAction';

function Slider() {
  return (
    <div>
        <div className='slider-main'>
            <div className='slider-icon-left'>
                <button className='slider-selection-button'>
                    back
                </button>
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
                <button className='slider-selection-button'>
                    next
                </button>
            </div>
        </div>
        <div className='slider-selection'>
            <button className='slider-selection-button'>O</button>
            <button className='slider-selection-button'>O</button>
            <button className='slider-selection-button'>O</button>
        </div>         
    </div>
  )
}

export default Slider