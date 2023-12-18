import React, { useRef, useEffect, useState } from 'react';
import '../../components/main.css';
import ImagenUser from '../../assets/img/Imagen-prueba.jpg';
import Grafico from '../Grafico/Grafico';


function DashCardDatos() {


  return (
    <div className=''>
      <div className="dash-card-datos"> {/* Contenedor padre */}
        <div className="dash-datos-header">
          <img src={ImagenUser} className="dash-header-image" alt="User" />
          <div className="dash-card-overlay"></div>
          <p className='dash-datos-title'><i>Datos y estadísticas con <strong>machine learning e inteligencia artificial</strong></i></p>
        </div>
        <Grafico/>
      </div>
    </div>
  );
}

export default DashCardDatos;
