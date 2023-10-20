import React from 'react'
import '../../components/main.css'
import BotonRegister2 from '../BotonRegister2/BotonRegister2'

function Register() {
  return (
    <div className=''>
        <div className='register-main'>
            <div className='register-text-title-1'>
                Regístrate en nuestra plataforma!
            </div>
            <div className='register-text-1'>
            Recibe los beneficios de nuestra inteligencia artificial enfocada para la industria de los videojuegos
            </div>
        </div>
        <div>
            <BotonRegister2/>
        </div>
    </div>
  )
}

export default Register