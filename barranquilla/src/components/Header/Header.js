import BotonRegister from '../BotonRegister/BotonRegister';
import BotonLogin from '../BotonLogin/BotonLogin';
import Menu from '../Menu/Menu';
import '../../components/main.css';
import GameTrendsMainOK from '../../assets/img/GameTrendsMainOK.png';

function Header() {
  return (
    <div className='main-menu'>
      <div className='logo'>
        <img className='logo-img' src={GameTrendsMainOK}/>
      </div>
      <div className='menu-section'>
        <div className='menu-option'>
          <Menu/>
        </div>
        <div className='menu-button'>
            <div className='menu-button-text'>
                <BotonLogin/>
            </div>
            <div className='menu-button-text'>
               <BotonRegister/>
            </div>
        </div>
      </div>      
    </div>
  );
}

export default Header;
