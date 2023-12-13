import React from 'react'
import '../../components/main.css'
import BotonGo from '../CallAction/BotonGo';

function CallAction() {
  return (
    <div className='call-action-content'>
        <p className='call-action-text-1'>
            Únete a más de <strong><i>230 millones de usuarios</i></strong>
        </p>
        <i className='call-action-text-2'>
            Que están usando nuestra plataforma
        </i>
        <BotonGo/>
    </div>
  )
}

export default CallAction