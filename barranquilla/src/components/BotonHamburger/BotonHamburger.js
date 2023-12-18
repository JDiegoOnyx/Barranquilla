import React from 'react'
import '../../components/main.css'
import Hamburguesa from '../../assets/svg/hamburguesa.svg'

function BotonHamburger() {
  return (
    <div>
        <button className='boton-hamburger'>
          <img className='boton-hamburger-icon' src={Hamburguesa}/>
        </button>
    </div>
  )
}

export default BotonHamburger