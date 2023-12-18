import '../../components/main.css';
import React from 'react';
import PersonaRobotico from '../../assets/img/persona-robotico.webp';
import LlamadoAccion from '../../assets/img/llamadoAction.png'

function LoginForm() {
    return (
        <div className="container">
            <div className="login-container">
                <img className='login-img' src={PersonaRobotico} alt="Imagen de fondo"/>
                <div className='login-section-form'>
                    <div className="headline">
                        Únete a la comunidad más importante de videojuegos en Colombia
                    </div>
                    <form className="login-form">
                        <div className="edt-form">
                            <label className='label-form'>Usuario</label>
                            <input className='login-input' type="text" id="username" name="username" required />
                        </div>
                        <div className="edt-form">
                            <label className='label-form'>Contraseña</label>
                            <input className='login-input' type="text" id="password" name="password" required />
                        </div>
                        <p className='forgot-password-text'>¿Perdiste tu contraseña? <a href="/reset-password" className="forgot-password">Reiníciala aquí</a></p>
                        <button type="submit" className="login-button">
                            <i>LOGIN para ingresar</i>
                            <div className='login-btn-action'>
                            <input type="checkbox" id="cbox2" className="custom-checkbox" value="second_checkbox" />
                            <span className='custom-checkbox-text'>Recuérdame</span>
                            </div>
                        </button>
                    </form>
                </div>
                <div>
                    <img className='login-img-icon' src={LlamadoAccion} alt="Imagen de fondo"/>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
