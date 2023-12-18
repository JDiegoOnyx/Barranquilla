import React from 'react'
import '../../components/main.css'
import EnlaceExterno from '../../assets/img/enlace-externo@2x.png';
import ImagenUsuario from '../../assets/img/Imagen-prueba.jpg';
import FlechaPositiva from '../../assets/svg/flecha-positiva.svg'
import FlechaNegativa from '../../assets/svg/flecha-negativa.svg'

function SeccionTablaDatos() {
  return (
    <div  className='SeccionTablaDatos-main'>  
        <div className='SeccionTablaDatos-col-1'>
            <div className='SeccionTablaDatos-subcol-1'>
                <div className='SeccionTablaDatos-title'>
                    Los videojuegos Colombianos mas exportados
                </div>
                <div className='SeccionTablaDatos-text'>
                    19 Agosto del 2023
                </div>
            </div>     
            <div className='SeccionTablaDatos-subcol-2'>
                más información <img className='SeccionTablaDatos-icon' src={EnlaceExterno}/>
            </div>   
        </div>
        <div className='SeccionTablaDatos-column-2'>
            <div className='SeccionTablaDatos-row-2'>
                <div className='SeccionTablaDatos-section-1'>
                    1
                </div>
                <div className='SeccionTablaDatos-section-2'>
                    <img className='SeccionTablaDatos-user' src={ImagenUsuario}/>
                </div>
                <div className='SeccionTablaDatos-section-3'>
                    world war DCH
                </div>
                <div className='SeccionTablaDatos-section-4'>
                    $21 Billones
                </div>
                <div className='SeccionTablaDatos-section-5'>
                    <img className='SeccionTablaDatos-flecha' src={FlechaPositiva}/> 5.05%
                </div>
                <div className='SeccionTablaDatos-section-6'>
                    Estados Unidos
                </div>
            </div> 
            <div className='SeccionTablaDatos-row-2'>
                <div className='SeccionTablaDatos-section-1'>
                    1
                </div>
                <div className='SeccionTablaDatos-section-2'>
                    <img className='SeccionTablaDatos-user' src={ImagenUsuario}/>
                </div>
                <div className='SeccionTablaDatos-section-3'>
                    world war DCH
                </div>
                <div className='SeccionTablaDatos-section-4'>
                    $21 Billones
                </div>
                <div className='SeccionTablaDatos-section-5'>
                    <img className='SeccionTablaDatos-flecha' src={FlechaNegativa}/> 5.05%
                </div>
                <div className='SeccionTablaDatos-section-6'>
                    Estados Unidos
                </div>
            </div> 
            <div className='SeccionTablaDatos-row-2'>
                <div className='SeccionTablaDatos-section-1'>
                    1
                </div>
                <div className='SeccionTablaDatos-section-2'>
                    <img className='SeccionTablaDatos-user' src={ImagenUsuario}/>
                </div>
                <div className='SeccionTablaDatos-section-3'>
                    world war DCH
                </div>
                <div className='SeccionTablaDatos-section-4'>
                    $21 Billones
                </div>
                <div className='SeccionTablaDatos-section-5'>
                    <img className='SeccionTablaDatos-flecha' src={FlechaPositiva}/> 5.05%
                </div>
                <div className='SeccionTablaDatos-section-6'>
                    Estados Unidos
                </div>
            </div> 
        </div>
    </div>    
  )
}

export default SeccionTablaDatos