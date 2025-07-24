class StorageManager {
    static removeItem(itemId, lista, setLista) {
      const el = lista.filter(item => item.id==itemId);
      const confi = confirm(`Deletar ${el[0].nome}?`);
      if (confi) {
        const newLista = lista.filter(item=> item.id!=itemId);
        setLista(newLista);
      }
    }
    static incrementoButton(itemId, variavel, isIncremento, lista, setLista) {
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
    static addItem(nome, quantD, quantN, categoria, limpaInput, status, lista, setLista) {
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
    static saveItem(idUrl, nome, quantD, quantN, categoria, status, navigate) {
        if (nome!="" && quantD!="" && quantN!="" && categoria!="") {
            const listaAtual = JSON.parse(localStorage.getItem("lista"));
            const newItem = {
                nome,
                quantD,
                quantN,
                categoria
            }
            listaAtual.map(item => {
                if (item.id == idUrl) {
                    item.nome = newItem.nome;
                    item.quantD = newItem.quantD;
                    item.quantN = newItem.quantN;
                    item.categoria = newItem.categoria;
                }
            })
    
            localStorage.setItem("lista", JSON.stringify(listaAtual));
            alert("Item atualizado com sucesso!");
            navigate("/tabela");
            status(true);
        } else {status(false);}
        
    }

}
    
export default StorageManager;