import '../../components/main.css'
import GameTrends from '../GameTrends/GameTrends';
import Register from '../Register/Register';
import SeccionDatos from '../SeccionDatos/SeccionDatos';
import SeccionDatos2 from '../SeccionDatos2/SeccionDatos2';
import Slider from '../Slider/Slider';
import GTSeccionDatos1 from '../GTSeccionDatos/GTSeccionDatos1';
import BotonRegister2 from '../BotonRegister2/BotonRegister2';
import Noticias from '../Noticias/Noticias';
import Tendencias from '../Tendencias/Tendencias';
import CallAction from '../CallAction/CallAction';
import Register2 from '../Register2/Register2';

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
            <Noticias/>
          </div>
          <div>
            <Tendencias/>
          </div>
          <div>
            <CallAction/>
          </div>
          <div>
            Sección 9
          </div>
          <div className='seccion-angosta'>
            <GTSeccionDatos1/>
          </div>
          <div>
            Sección 10
          </div>
          <div>
            <Register2/>
          </div>
        </div>
        
    </div>
  );
}

export default Body;