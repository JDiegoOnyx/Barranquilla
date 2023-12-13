import React from 'react'
import '../../components/main.css'
import FlechaPNG from '../../assets/img/flecha.png';

function BotonRegisterBlanco() {
  return (
    <div>
        <button className='boton-register-blanco'>
            <div className='boton-register-seccion-1'>
                <div className='boton-register-title-1'>
                    Regístrate aquí con tu email
                </div>
                <div className='boton-register-button'>
                    <button className="boton-register-action-mobile"> <p className='btn-rg-ac-mb-1'>¡Empieza ahora!</p><div className='btn-rg-ac-mb-2'><img className='boton-register-icon' src={FlechaPNG}/></div></button> 
                </div>
                <div className='boton-register-check'>
                    <input type="checkbox" id="cbox1" className='cbox1' value="first_checkbox" /> <label htmlFor="cbox1">Acepto tratamiento de datos</label>
                </div>
            </div>
            <div className='boton-register-action'>
                <di className="boton-register-action-1">
                    <img className='boton-register-icon' src={FlechaPNG}/>
                </di>
            </div>
        </button>
    </div>
  )
}

export default BotonRegisterBlanco