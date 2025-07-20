import { useState } from 'react';
import './App.css';
import AddItem from './components/AddItem';
import Nav from './components/Nav';

import Tabela from './components/Tabela';
function App() {
 
  const categorias = [ // Categorias de produtos
    "Hortifruti",
    "Frios",
    "Carnes",
    "Higiene",
    "Bebidas",
    "Padaria",
    "Mercearia",
    "Congelados",
    "Doces",
    "Embalagens"];

  const [lista, setLista] = useState( // Lista de produtos (Tabela)
    [
      {
        id: 1,
        nome: "Banana",
        quantD: 5,
        quantN: 3,
        categoria: "Hortifruti"
      },
      {
        id: 2,
        nome: "Maça",
        quantD: 2,
        quantN: 5,
        categoria: "Hortifruti"
      },
      {
        id: 3,
        nome: "Pão Francês",
        quantD: 1,
        quantN: 8,
        categoria: "Padaria"
      }
  ])
  
  // Métodos dos botões
  function addItem(nome, quantD, quantN, categoria, callback) {
    if (nome!="" && quantD!="" && quantN!="" && categoria!="") {
      const newItem = {
      id: lista.length==0 ? 1 : lista[lista.length-1].id +1,
      nome,
      quantD,
      quantN,
      categoria
    }
      setLista([...lista, newItem]);
      callback(); // Limpa os inputs de <AddItem />
    }
  }

  return (
    <div>
      <Nav />
      <div className='app'>
        <AddItem categorias={categorias} addItem={addItem} />
        <Tabela lista={lista} />
      </div>
    </div>
  );
}

export default App;
