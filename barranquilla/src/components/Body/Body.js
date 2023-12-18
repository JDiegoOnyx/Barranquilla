import React from 'react'
import '../../components/main.css'
import GameTrends from '../GameTrends/GameTrends';
import Register from '../Register/Register';
import SeccionDatos from '../SeccionDatos/SeccionDatos';
import SeccionDatos2 from '../SeccionDatos2/SeccionDatos2';
import Slider from '../Slider/Slider';
import GTSeccionDatos1 from '../GTSeccionDatos/GTSeccionDatos1';
import BotonRegister2 from '../BotonRegister2/BotonRegister2';
import Noticias from '../Noticias/Noticias';
import Tendencias from '../Tendencias/Tendencias';
import CallAction from '../CallAction/CallAction';
import Register2 from '../Register2/Register2';
import Informativo from '../SeccionInformativo/Informativo';
import Ranking from '../Ranking/Ranking';
import LoginForm from '../LoginForm/LoginForm';
import ImagenUser from '../../assets/img/Imagen-prueba.jpg'
import IconMenu from '../../assets/img/enlace-externo@2x.png'
import ImagenUsuario from '../../assets/img/Imagen-prueba.jpg';
import EnlaceExterno from '../../assets/img/enlace-externo@2x.png';
import Flecha from '../../assets/svg/flecha.svg'
import InformacionIcono from '../../assets/svg/informacion-icono.svg'
import SeccionTablaDatos from '../SeccionTablaDatos/SeccionTablaDatos';
import DashCardDatos from '../DashCardDatos/DashCardDatos';
import DashAcademiaCard from '../DashAcademiaCard/DashAcademiaCard';
import DashAlertaCard from '../DashAlertaCard/DashAlertaCard';
import DashLlamadoAccion from '../DashLlamadoAccion/DashLlamadoAccion';

function Body() {
  return (
    <div className='body-main'>
      <div className='body-dash'>
        
        <div>
          <DashCardDatos/>
        </div>
        <div className='body-dash-row'>
          <div className='body-dash-row-1'>
            <DashAcademiaCard/>
          </div>
          <div className='body-dash-row-2'>
            <DashAlertaCard/>
          </div>
        </div>
        <div className='dash-video-juegos'>
          <div>
            <div className='dash-datos-tabla'>  
              <div className='gt-seccion-datos-col-1'>
                <div className='gt-seccion-datos-subcol-1'>
                  <div className='gt-seccion-datos-title'>
                    Videojuegos más exportados
                  </div>
                  <div className='gt-seccion-datos-text'>
                    19 Agosto del 2023
                  </div>
                </div> 
              </div>
              <div className='gt-seccion-datos-column-2'>
                <div className='gt-seccion-datos-row-2'>
                  <div className='gt-seccion-datos-section-1'>
                    1
                  </div>
                  <div className='gt-seccion-datos-section-2'>
                    <img className='gt-seccion-datos-user' src={ImagenUsuario}/>
                  </div>
                  <div className='gt-seccion-datos-section-3'>
                    world war DCH
                  </div>
                  </div> 
                  <div className='gt-seccion-datos-row-2'>
                    <div className='gt-seccion-datos-section-1'>
                      1
                    </div>
                    <div className='gt-seccion-datos-section-2'>
                      <img className='gt-seccion-datos-user' src={ImagenUsuario}/>
                    </div>
                    <div className='gt-seccion-datos-section-3'>
                      world war DCH
                    </div>
                  </div> 
                  <div className='gt-seccion-datos-row-2'>
                    <div className='gt-seccion-datos-section-1'>
                      1
                    </div>
                    <div className='gt-seccion-datos-section-2'>
                      <img className='gt-seccion-datos-user' src={ImagenUsuario}/>
                    </div>
                    <div className='gt-seccion-datos-section-3'>
                      world war DCH
                    </div>
                  </div>                                 
                </div>
              </div>    
          </div>
          <div className='dash-video-juegos-seccion-2'>
            <SeccionTablaDatos/>
          </div>
        </div>
        <div>
            <DashLlamadoAccion/>
        </div>
        
      </div>
      <div className='body-login'>
        {/*<LoginForm/>*/}
      </div>
      <div className='body-home'>
        {/*
        <div>
            <Slider/>
          </div>
          <div className='body-width'>
            <div>
              <SeccionDatos/>
            </div>
            <div>
              <Register/>
            </div>
            <div>
              <SeccionDatos2/>
            </div>
            <div>
              <GameTrends/>
            </div>
            <div>
              <Noticias/>
            </div>
            <div>
              <Tendencias/>
            </div>
            <div>
              <CallAction/>
            </div>
            <div>
              <Ranking/>
            </div>
            <div className='seccion-angosta'>
              <SeccionTablaDatos/>
            </div>
            <div>
              <Informativo/>
            </div>
            <div>
              <Register2/>
            </div>
          </div>
        */}
      </div>  
    </div>    
  );
}

export default Body;