import React from 'react'
import '../../components/main.css'
import BotonRegisterBlanco from '../BotonRegisterBlanco/BotonRegisterBlanco'

function Register2() {
  return (
    <div className='register-main-2'>
        <div className='register-column-1'>
            <p className='register-2-text'>
                <i>
                    Nuestra plataforma <strong> tiene beneficios para ti </strong>
                </i>
            </p>
        </div>
        <div className='register-column-2'>
            <BotonRegisterBlanco/>
        </div>
    </div>
  )
}

export default Register2