import Boton from '../BotonRegister/Boton';
//import './menu.css';
import '../../components/main.css'

function Header() {
  return (
    <div className='main-menu'>
      <div className='logo'>
        <img className='logo-img' src="" />
      </div>
      <div className='menu-section'>
        <div className='menu-option'>
            <div className='menu-text'>
                <button>
                    Menu
                </button>
            </div>
            <div className='menu-option-sub'>
                <div className='menu-text'>Inicio</div>
                <div className='menu-text'>Industria</div>
                <div className='menu-text'>Últimas novedades</div>
                <div className='menu-text'>Zonas Geográficas</div>
            </div>            
        </div>
        <div className='menu-button'>
            <div className='menu-button-text'>
                <button>
                    Login
                </button>
            </div>
            <div className='menu-button-text'>
               <Boton/>
            </div>
        </div>
      </div>      
    </div>
  );
}

export default Header;
