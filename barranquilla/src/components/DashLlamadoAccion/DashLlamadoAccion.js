import React from 'react'
import '../../components/main.css'
import ImagenUser from '../../assets/img/Imagen-prueba.jpg'

function DashLlamadoAccion() {
  return (
    <div  className=''>
        <div className="dash-llamado-accion">
            <div className="dash-llamado-datos-header">
                <img src={ImagenUser} className="dash-llamado-header-image" />
                <div className="dash-llamado-card-overlay"></div>
                <p className='dash-llamado-datos-title'>Videojuegos en cooperativo es mejor</p>
                <p className='dash-llamado-datos-descripcion'>Invita a tus amigos y juguemos juntos en el mismo equipo y capturemos la bandera, danos tu referido y convoca a tu manada...</p>
                <button className='dash-llamado-boton'><i><strong>¡Invita aquí!</strong> a tus amigos</i></button>
            </div>
        </div>
    </div>    
  )
}

export default DashLlamadoAccion