import { useEffect, useState } from 'react';
import './App.css';
import AddItem from './components/AddItem';
import Nav from './components/Nav';

import Tabela from './components/Tabela';
function App(props) {
 
  const categorias = props.categorias;

  const [lista, setLista] = useState(JSON.parse(localStorage.getItem("lista")) || []); // Lista de produtos (Tabela)
  
  useEffect(() => { // Atualiza no LocalStorage os dados dos produtos
    localStorage.setItem("lista", JSON.stringify(lista))
  }, [lista]);


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
  function incrementoButton(itemId, variavel, isIncremento) {
    // {variavel} 0: quantD; 1: quantN;
    // {operador} false: Decremento; true: Incremento
    const newLista = [...lista];
    newLista.map(item => {
      if (itemId === item.id) { // Checa qual é o item clicado em <Tabela />
        if (isIncremento) { // Caso Incremento
          if(variavel===0) {item.quantD++; // Caso quantD
          } else {item.quantN++;} // Caso quantN
        } else { // Caso decremento
          if(variavel===0) {if(item.quantD>0) {item.quantD--;} // Caso quantD
          } else {if(item.quantN>1){item.quantN--;}} // Caso quantN
        }
        
      }
    });
    setLista(newLista);
  }
  function removeItem(itemId) {
    const newLista = lista.filter(item=> item.id!=itemId);
    setLista(newLista);
  }


  return (
    <div>
      <Nav />
      <div className='app'>
        <AddItem categorias={categorias} addItem={addItem} />
        <Tabela lista={lista} incrementoButton={incrementoButton} removeItem={removeItem} />
      </div>
    </div>
  );
}

export default App;
