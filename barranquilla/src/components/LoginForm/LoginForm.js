import '../../components/main.css'
import React from 'react';
import PersonaRobotico from '../../assets/img/persona-robotico.webp';

function LoginForm() {
    return (
        <div class="container">            
    <div class="login-container">
        <img class='login-img' src={PersonaRobotico} alt="Imagen de fondo"/>
        <div class='login-section-form'>
            <div class="headline">
                Únete a la comunidad más importante de videojuegos en Colombia
            </div>
            <form class="login-form">
                        
                <div className="form-group">
                            <input className='login-input' type="text" id="username" name="username" placeholder="Usuario" required />
                        </div>
                        <div className="form-group">
                            <input className='login-input' type="password" id="password" name="password" placeholder="Contraseña" required />
                        </div>
                        <p className='forgot-password-text'>¿Perdiste tu contraseña? <a href="/reset-password" className="forgot-password">Reiníciala aquí</a></p>
                        <button type="submit" className="login-button">
                            LOGIN para ingresar
                            <div className='login-btn-action'>
                                <input type="checkbox" id="cbox2" value="second_checkbox" />
                                <label for="cbox2">Recuérdame</label>
                            </div>
                        </button>
            </form>
        </div>
    </div>
</div>


    );
}

export default LoginForm;