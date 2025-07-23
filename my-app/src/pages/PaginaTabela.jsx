import { useState, useEffect } from "react";

import Nav from "../components/Nav";
import Tabela from "../components/Tabela";
import Voltar from "../components/Voltar";
import AddItem from "../components/AddItem";

import './MediaQuery.css';
import Footer from "../components/Footer";

function PaginaTabela(props) {
    const [lista, setLista] = useState(JSON.parse(localStorage.getItem("lista")) || []); // Lista de produtos (Tabela)
    
    useEffect(() => {
    localStorage.setItem("lista", JSON.stringify(lista))
  }, [lista]);
    
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

    function addItem(nome, quantD, quantN, categoria, limpaInput, status) {
      if (nome!="" && quantD!="" && quantN!="" && categoria!="") {
        const newItem = {
          id: lista.length==0 ? 1 : lista[lista.length-1].id +1,
          nome,
          quantD,
          quantN,
          categoria
        }
        setLista([...lista, newItem]);
        limpaInput(); // Limpa os inputs de <AddItem />
        status(true); // Todos os campos foram preenchidos
      } else {status(false)} // Algum dos campos não foram preenchidos (mensagem exibida no componente)
    }

    return (
        <div>
            <Nav />
            <div className="app">
                <Tabela lista={lista} incrementoButton={incrementoButton} removeItem={removeItem} />
                <div className="paginaTabela">
                    <Voltar url="/" />
                    <AddItem categorias={props.categorias} addItem={addItem} />
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default PaginaTabela;