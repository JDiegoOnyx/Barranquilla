import '../../components/main.css'
import GameTrendsMainFooter from '../../assets/img/GameTrendsMainFooter.png';
import SocialMedia from '../../assets/img/SocialMedia/SocialMedia';
import ByOnyx from '../../assets/img/ByOnyx.png'

function Footer() {
  return (
    <div className='main-footer'>
        <div className='footer-a-1'>
            <div className='footer-b-1'>
                <div className='footer-b-1-1'>
                    <div className='footer-title'>
                        Servicios
                    </div>
                    <div className='footer-info'>
                        Mapeo de tendencias
                    </div>
                    <div className='footer-info'>
                        Comportamiento del consumidor
                    </div>
                    <div className='footer-info'>
                        Game Trends 360 en las redes
                    </div>
                    <div className='footer-info'>
                        Innovación en la indutría
                    </div>
                    <div className='footer-info'>
                        Últimas tecnologias
                    </div>
                </div>
                <div className='footer-b-1-2'>                    
                    <div className='footer-title'>
                        Sobre nosotros
                    </div>
                    <div className='footer-info'>
                        Cultura de la innovación
                    </div>
                    <div className='footer-info'>
                        I + D + I
                    </div>
                    <div className='footer-info'>
                        Colombia in Game
                    </div>
                </div>
                <div className='footer-b-1-3'>
                    <div className='footer-title'>
                        Legal
                    </div>
                    <div className='footer-info'>
                        Politicas de cookies
                    </div>
                    <div className='footer-info'>
                        Politica de privacidad
                    </div>
                    <div className='footer-info'>
                        Aviso legal y Condiciones de uso
                    </div>
                </div>
            </div>
            <div className='footer-b-2'>
                <div className='footer-title'>
                    Redes Sociales
                </div>
                <div className = 'footer-b-icon-cont'>
                    <div>
                        <img className='footer-icon-1' src={SocialMedia.facebook}/>
                    </div>
                    <div>
                        <img className='footer-icon-1' src={SocialMedia.instagram}/>
                    </div>
                    <div>
                        <img className='footer-icon-1' src={SocialMedia.tiktok}/>
                    </div>
                    <div>
                        <img className='footer-icon-1' src={SocialMedia.twitter}/>
                    </div>
                    <div>
                        <img className='footer-icon-1' src={SocialMedia.whatsapp}/>
                    </div>
                    <div>
                        <img className='footer-icon-1' src={SocialMedia.youtube}/>
                    </div>
                    <div>
                        <img className='footer-icon-1' src={SocialMedia.linkedin}/>
                    </div>
                </div>
            </div>
        </div>
        <div className='footer-a-2'>
            <div>
                <img className='footer-logo-main' src={GameTrendsMainFooter}/>
            </div>
            <div className = 'footer-info-end'>
                @ 2023 Game Trends 360. Todos los derechos reservados. Todas las marcas registradas pertenecen a sus respectivos dueños en Colombia y otros paises.
            </div>
            <div className = 'footer-info-end'>
               Términos de uso y privacidad / preferencias sobre cookies
            </div>
            <div>
            <img className='footer-logo-img' src={ByOnyx}/>
            </div>
        </div>
    </div>
  );
}

export default Footer;