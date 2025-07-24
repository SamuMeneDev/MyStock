import "./MediaQuery.css";

import Nav from "../components/subcomponents/Nav";
import Alerta from "../components/Alerta";
import Menu from "../components/Menu";
import Footer from "../components/subcomponents/Footer";

function App(props) {
  return (
    <div>
      <Nav />
      <div className="app">
        <Alerta categorias={props.categorias} />
        <Menu />
      </div>
      <Footer />
    </div>
  );
}

export default App;
