import '../../components/main.css'
import GameTrends from '../GameTrends/GameTrends';
import Register from '../Register/Register';
import SeccionDatos from '../SeccionDatos/SeccionDatos';
import SeccionDatos2 from '../SeccionDatos2/SeccionDatos2';
import Slider from '../Slider/Slider';
import GTSeccionDatos1 from '../GTSeccionDatos/GTSeccionDatos1';
import BotonRegister2 from '../BotonRegister2/BotonRegister2';
import LoginForm from '../LoginForm/LoginForm';

function Body() {
  return (
    <div className='body-main'>
        <div>
          <Slider/>
        </div>
        <div className='body-width'>
          <div>
            <SeccionDatos/>
          </div>
          <div>
            <Register/>
          </div>
          <div>
            <SeccionDatos2/>
          </div>
          <div>
            <GameTrends/>
          </div>
          <div>
            Sección 6
          </div>
          <div>
            Sección 7
          </div>
          <div>
            Sección 8
          </div>
          <div>
            <GTSeccionDatos1/>
          </div>
          <div>
            Sección 10
          </div>
          <div>
            <BotonRegister2/>
          </div>
        </div>
        
    </div>
  );
}

export default Body;