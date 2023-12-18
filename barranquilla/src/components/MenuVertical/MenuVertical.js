import React, { useState } from 'react'
import '../../components/main.css'
import ImagenUser from '../../assets/img/Imagen-prueba.jpg'
import IconMenu from '../../assets/img/enlace-externo@2x.png'
import icon2 from '../../assets/svg/academia.svg'
import icon3 from '../../assets/svg/configuracion.svg'
import icon4 from '../../assets/svg/flecha-arriba.svg'
import icon5 from '../../assets/svg/game.svg'
import icon6 from '../../assets/svg/pass.svg'
import icon7 from '../../assets/svg/usuario.svg'
import icon8 from '../../assets/svg/ver.svg'
import icon9 from '../../assets/svg/carpeta-abrir.svg'
import icon10 from '../../assets/svg/chart.svg'


function MenuVertical() {
    const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (itemIndex) => {
    setSelectedItem(itemIndex);
  };
  return (
    <div className=''>
        <div className='Menu-vertical-user'>
            <div className='menu-vertical-img-fondo-tamano'>
                <img className='menu-vertical-img-tamano' src={ImagenUser} alt="Descripción de la imagen" />
            </div>
            <div className='menu-vertical-titulo-1'>
                ¡Bienvenido!
            </div>
            <div className='menu-vertical-titulo-2'>
                Andres Guzman Yarze
            </div>
            <div className='menu-vertical-titulo-3'>
                @andresVG
            </div>
           
           
            <ul className='menu-vertical-ul'>
        
          <li
            className={`menu-vertical-li ${selectedItem === 0 ? 'menu-vertical-principal' : ''}`}
            onClick={() => handleItemClick(0)}
          >
            <img className='menu-vertical-icon' src={''} alt='' />
            <p>Estadísticas</p>
            <div className={selectedItem === 0 ? 'menu-vertical-principal-cuadro' : ''}></div>
          </li>
          <li
            className={`menu-vertical-li ${selectedItem === 1 ? 'menu-vertical-principal' : ''}`}
            onClick={() => handleItemClick(1)}
          >
            <img className='menu-vertical-icon' src={''} alt='' />
            <p>Sube tu videojuego</p>
            <div className={selectedItem === 1 ? 'menu-vertical-principal-cuadro' : ''}></div>
          </li>
            <i className='menu-vertical-li'>
                <img className='menu-vertical-icon' src={''}/>
                <p>
                Academia GT 360
                </p>
                <div className=''></div>          
            </i>
            <i className='menu-vertical-li'>
                <img className='menu-vertical-icon' src={''}/>
                <p>
                Comparte tus Assets
                </p>
                <div className=''></div>          
            </i>
            <i className='menu-vertical-li'>
                <img className='menu-vertical-icon' src={''}/>
                <p>
                Perfil
                </p>
                <div className=''></div>          
            </i>
            <i className='menu-vertical-li'>
                <img className='menu-vertical-icon' src={''}/>
                <p>
                Configuraciones
                </p>
                <div className=''></div>          
            </i>
            <i className='menu-vertical-li'>
                <img className='menu-vertical-icon' src={''}/>
                <p>
                Seguridad
                </p>
                <div className=''></div>          
            </i>
            <i className='menu-vertical-li'>
                <img className='menu-vertical-icon' src={''}/>
                <p>
                Privacidad
                </p>
                <div className=''></div>          
            </i>
            </ul>
        </div>

        <ul className='menu-vertical-ul'>            
          <li
            className={`menu-vertical-li ${selectedItem === 0 ? 'menu-vertical-principal' : ''}`}
            onClick={() => handleItemClick(0)}
          >
            <img className='menu-vertical-icon' src={icon10}/>
            <p>Estadísticas</p>
            <div className={selectedItem === 0 ? 'menu-vertical-principal-cuadro' : ''}></div>
          </li>
          <li
            className={`menu-vertical-li ${selectedItem === 1 ? 'menu-vertical-principal' : ''}`}
            onClick={() => handleItemClick(1)}
          >
            <img className='menu-vertical-icon' src={icon4}/>
            <p>Sube tu videojuego</p>
            <div className={selectedItem === 1 ? 'menu-vertical-principal-cuadro' : ''}></div>
          </li>
          <li
            className={`menu-vertical-li ${selectedItem === 2 ? 'menu-vertical-principal' : ''}`}
            onClick={() => handleItemClick(2)}
          >
            <img className='menu-vertical-icon' src={icon5}/>
            <p>Game Jams Colombia</p>
            <div className={selectedItem === 2 ? 'menu-vertical-principal-cuadro' : ''}></div>
          </li>
          <li
            className={`menu-vertical-li ${selectedItem === 3 ? 'menu-vertical-principal' : ''}`}
            onClick={() => handleItemClick(3)}
          >
            <img className='menu-vertical-icon' src={icon2}/>
            <p>Academia GT 360</p>
            <div className={selectedItem === 3 ? 'menu-vertical-principal-cuadro' : ''}></div>
          </li>
          <li
            className={`menu-vertical-li ${selectedItem === 4 ? 'menu-vertical-principal' : ''}`}
            onClick={() => handleItemClick(4)}
          >
            <img className='menu-vertical-icon' src={icon9}/>
            <p>Comparte tus Assets</p>
            <div className={selectedItem === 4 ? 'menu-vertical-principal-cuadro' : ''}></div>
          </li>
          <li
            className={`menu-vertical-li ${selectedItem === 5 ? 'menu-vertical-principal' : ''}`}
            onClick={() => handleItemClick(5)}
          >
            <img className='menu-vertical-icon' src={icon7}/>
            <p>Perfil</p>
            <div className={selectedItem === 5 ? 'menu-vertical-principal-cuadro' : ''}></div>
          </li>
          <li
            className={`menu-vertical-li ${selectedItem === 6 ? 'menu-vertical-principal' : ''}`}
            onClick={() => handleItemClick(6)}
          >
            <img className='menu-vertical-icon' src={icon3}/>
            <p>Configuraciones</p>
            <div className={selectedItem === 6 ? 'menu-vertical-principal-cuadro' : ''}></div>
          </li>
          <li
            className={`menu-vertical-li ${selectedItem === 7 ? 'menu-vertical-principal' : ''}`}
            onClick={() => handleItemClick(7)}
          >
            <img className='menu-vertical-icon' src={icon6}/>
            <p>Seguridad</p>
            <div className={selectedItem === 7 ? 'menu-vertical-principal-cuadro' : ''}></div>
          </li>
          <li
            className={`menu-vertical-li ${selectedItem === 8 ? 'menu-vertical-principal' : ''}`}
            onClick={() => handleItemClick(8)}
          >
            <img className='menu-vertical-icon' src={icon8}/>
            <p>Privacidad</p>
            <div className={selectedItem === 8 ? 'menu-vertical-principal-cuadro' : ''}></div>
          </li>
        </ul>
    </div>    
  );
}

export default MenuVertical;