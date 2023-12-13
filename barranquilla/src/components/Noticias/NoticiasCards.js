import React from 'react'
import '../../components/main.css'
import PersonaRobotico from '../../assets/img/persona-robotico.webp';

function noticiasCards() {
  return (
    <div className='noticiascards-main'>
        <div className='noticiascards-linea'>
        </div>
        <div className='noticiascards-image'>
          <div className='noticiascards-text-image-background'>
          </div>
          <p className='noticiascards-text-image'>Nuevo</p>
          <img className='noticiascards-image-background'src={PersonaRobotico}/>
        </div>
    </div>
  )
}

export default noticiasCards