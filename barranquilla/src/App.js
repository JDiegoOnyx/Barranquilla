import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';
//import LoginForm from './components/LoginForm/LoginForm';

function App() {
  return (
    <div className='main-app'>
      <div className='seccion-header'>
        <Header/>
      </div>
      <div className='seccion-body'>
        <Body/>
      </div>
      <div className='seccion-footer'>
        <Footer/>
      </div>      
    </div>
  );
}

export default App;
