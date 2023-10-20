import React from 'react'
import '../../components/main.css'
import GTSeccionDatos2_1 from '../GTSeccionDatos2/GTSeccionDatos2_1'
import GTSeccionDatos2_2 from '../GTSeccionDatos2/GTSeccionDatos2_2'

function SeccionDatos2() {
  return (
    <div className='seccion-datos-main-2'>
        <div className='seccion-section-2-1'>
          <GTSeccionDatos2_1/>
        </div>
        <div className='seccion-section-2-2'>
          <GTSeccionDatos2_2/>
        </div>
    </div>
  )
}

export default SeccionDatos2