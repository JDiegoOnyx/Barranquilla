import React from 'react'
import '../../components/main.css'

function BotonRegister2() {
  return (
    <div>
        <button className='boton-register-2'>
            <div className='boton-register-seccion-1'>
                <div className='boton-register-title-1'>
                    Regístrate aquí con tu email
                </div>
                <div className='boton-register-check'>
                    <input type="checkbox" id="cbox1" value="first_checkbox" /> Acepto tratamiento de datos
                </div>
            </div>
            <div className='boton-register-action'>
                <di className="boton-register-action-1">
                    GO
                </di>
            </div>
        </button>
    </div>
  )
}

export default BotonRegister2