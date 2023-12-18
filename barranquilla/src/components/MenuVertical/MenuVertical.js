import React, { useState } from 'react'
import '../../components/main.css'

function MenuVertical() {
    const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (itemIndex) => {
    setSelectedItem(itemIndex);
  };
  return (
    <div className=''>
        <div className="">
            <div className='Menu-vertical-user'>
            <div className='menu-vertical-img-fondo-tamano'>
                <img className='menu-vertical-img-tamano' src={''} alt="Descripción de la imagen" />
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
    </div>    
  );
}

export default MenuVertical;