import { useState, useEffect } from "react";

import Nav from "../components/subcomponents/Nav";
import Tabela from "../components/Tabela";
import Voltar from "../components/subcomponents/Voltar";
import AddItem from "../components/AddItem";
import Footer from "../components/subcomponents/Footer";

import "./MediaQuery.css";
import StorageManager from "../uttilities";

function PaginaTabela(props) {
  const [lista, setLista] = useState(
    JSON.parse(localStorage.getItem("lista")) || []
  ); // Lista de produtos (Tabela)

  useEffect(() => {
    localStorage.setItem("lista", JSON.stringify(lista));
  }, [lista]);

  function incrementoButton(itemId, variavel, isIncremento) {
    StorageManager.incrementoButton(
      itemId,
      variavel,
      isIncremento,
      lista,
      setLista
    );
  }
  function removeItem(itemId) {
    StorageManager.removeItem(itemId, lista, setLista);
  }
  

  return (
    <div>
      <Nav />
      <div className="app">
        <Tabela
          lista={lista}
          incrementoButton={incrementoButton}
          removeItem={removeItem}
        />
        <div className="paginaTabela">
          <Voltar url="/" />
          <AddItem categorias={props.categorias} lista={lista} setLista={setLista} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default PaginaTabela;
