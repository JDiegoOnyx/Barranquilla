import './components/main.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';
import MenuVertical from './components/MenuVertical/MenuVertical';
//import LoginForm from './components/LoginForm/LoginForm';

function App() {
  return (
    <div className='main-app'>
      <div className='seccion-header'>
        <Header/>
      </div>
      <div className='seccion-body-dash-main'>
      {/*<div className='seccion-body'>*/}
        
        <div className='seccion-menu-vertical'>
          <MenuVertical/>
        </div>
        <div className='seccion-body-dash'>
          <Body/>
        </div>
        
        {/*<Body/>*/}
      </div>
      <div className='seccion-footer'>
        <Footer/>
      </div>      
    </div>
  );
}

export default App;
