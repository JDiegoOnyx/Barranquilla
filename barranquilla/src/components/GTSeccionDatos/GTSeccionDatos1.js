import React from 'react'
import '../../components/main.css'
import EnlaceExterno from '../../assets/img/enlace-externo@2x.png';
import ImagenUsuario from '../../assets/img/Imagen-prueba.jpg';

function GTSeccionDatos1() {
  return (
    <div  className='gt-seccion-datos-1-main'>  
        <div className='gt-seccion-datos-col-1'>
            <div className='gt-seccion-datos-subcol-1'>
                <div className='gt-seccion-datos-title'>
                    Los videojuegos Colombianos mas exportados
                </div>
                <div className='gt-seccion-datos-text'>
                    19 Agosto del 2023
                </div>
            </div>     
            <div className='gt-seccion-datos-subcol-2'>
                más información <img className='gt-seccion-datos-icon' src={EnlaceExterno}/>
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
                <div className='gt-seccion-datos-section-4'>
                    $21 Billones
                </div>
                <div className='gt-seccion-datos-section-5'>
                    Estados Unidos
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
                <div className='gt-seccion-datos-section-4'>
                    $21 Billones
                </div>
                <div className='gt-seccion-datos-section-5'>
                    Estados Unidos
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
                <div className='gt-seccion-datos-section-4'>
                    $21 Billones
                </div>
                <div className='gt-seccion-datos-section-5'>
                    Estados Unidos
                </div>
            </div> 
                       
        </div>
    </div>    
  )
}

export default GTSeccionDatos1