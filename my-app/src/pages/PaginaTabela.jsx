import { useState, useEffect } from "react";
import Tabela from "../components/Tabela";
import AddItem from "../components/AddItem";
import Nav from "../components/Nav";
import Voltar from "../components/Voltar";
import './PaginaTabela.css';

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
            <div className="master">
                <AddItem categorias={props.categorias} addItem={addItem} />
                <div className="paginaTabela">
                    <Voltar url="/" />
                    <Tabela lista={lista} incrementoButton={incrementoButton} removeItem={removeItem} />
                </div>
            </div>
        </div>
    );
}
export default PaginaTabela;