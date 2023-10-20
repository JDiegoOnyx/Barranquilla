import React from 'react'
import '../../components/main.css'
import BotonHamburger from '../BotonHamburger/BotonHamburger';



function menu() {
  return (
    <div className='menu-option'>
        <div>
            <BotonHamburger/>
        </div>
        <div className='menu-option-sub'>
            <div className='menu-text'>Inicio</div>
            <div className='menu-text'>Industria</div>
            <div className='menu-text'>Últimas novedades</div>
            <div className='menu-text'>Zonas Geográficas</div>
        </div>     
    </div>
  )
}

export default menu