import './App.css';
import Menu from '../components/Menu';
import Nav from '../components/Nav';
import Alerta from '../components/Alerta';
function App() {

  return (
    <div>
      <Nav />
      <div className='app'>
        <Menu />
        <Alerta />
      </div>
    </div>
  );
}

export default App;
