import React from 'react'
import '../../components/main.css'
import GTSeccionDatos1 from '../GTSeccionDatos/GTSeccionDatos1'
import GTSeccionDatos2 from '../GTSeccionDatos/GTSeccionDatos2'

function SeccionDatos() {
  return (
    <div className='seccion-datos-main'>
        <div className='seccion-section-1'>
          <GTSeccionDatos1/>
        </div>
        <div className='seccion-section-2'>
          <GTSeccionDatos2/>
        </div>
    </div>
  )
}

export default SeccionDatos