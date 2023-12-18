import React from 'react'
import '../../components/main.css'
import ImagenUser from '../../assets/img/Imagen-prueba.jpg'

function DashCardDatos() {
  return (
    <div  className=''>
        <div className="dash-card-datos">
            <div className="dash-datos-header">
              <img src={ImagenUser} className="dash-header-image" />
              <div className="dash-card-overlay"></div>
              <p className='dash-datos-title'><i>Datos y estadísticas con <strong>machine learning e inteligencia artificial</strong></i></p>
            </div>
            <div className="">
            <p></p>
            </div>
          </div>
    </div>    
  )
}

export default DashCardDatos