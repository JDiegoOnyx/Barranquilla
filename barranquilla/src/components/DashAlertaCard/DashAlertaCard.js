import React from 'react'
import '../../components/main.css'
import ImagenUser from '../../assets/img/Imagen-prueba.jpg'
import Flecha from '../../assets/svg/flecha.svg'
import InformacionIcono from '../../assets/svg/informacion-icono.svg'

function DashAlertaCard() {
  return (
    <div  className=''>
       <div className='dash-alerta-seccion'>
              <div className='dash-alerta-titulo'>
                <img className='dash-alerta-titulo-icon' src={InformacionIcono}/>
                <strong>Alertas de convocatorias en Colombia</strong>
              </div>
              <div className='dash-alerta-card'>
                <div>
                  <img src={ImagenUser} className="dash-alerta-image" />
                </div>     
                <div className='dash-informacion-texto'>
                  <div className='dash-informacion-titulo'>
                    Convocatoria MINTIC para Serious Games
                  </div>
                  <div className='dash-informacion-subtitulo'>
                    Presupuesto 300 Millones COP
                  </div>
                </div> 
                <div className='dash-informacion-ir'>
                  <img className='dash-informacion-icon' src={Flecha}/>
                </div>               
              </div>
              <div className='dash-alerta-card'>
              <div>
                  <img src={ImagenUser} className="dash-alerta-image" />
                </div>     
                <div className='dash-informacion-texto'>
                  <div className='dash-informacion-titulo'>
                    Convocatoria Gobernación de Risaralda para Game Jams y e-Sport
                  </div>
                  <div className='dash-informacion-subtitulo'>
                    Presupuesto 300 Millones COP
                  </div>
                </div> 
                <div className='dash-informacion-ir'>
                  <img className='dash-informacion-icon' src={Flecha}/>
                </div>       
              </div>
            </div>
    </div>    
  )
}

export default DashAlertaCard