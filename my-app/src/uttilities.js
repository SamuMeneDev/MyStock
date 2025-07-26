class StorageManager {
  static removeItem(itemId, lista, setLista) {
    const el = lista.filter(item => item.id==itemId);
    const confi = confirm(`Deletar ${el[0].nome}?`);
    if (confi) {
      const newLista = lista.filter(item=> item.id!=itemId);
      setLista(newLista);
    }
  }
  static incrementoButton(itemId, variavel, isIncremento=true, lista, setLista) {
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
  static itemFaltando(categorias, lista) {
    const cat = categorias.sort();
    const listaFaltandoOrg = [];
    const listaFaltando = [];
    lista.map(item => {
      if(item.quantD<item.quantN) {listaFaltando.push(item)}
    })
    for(let i=0; i<cat.length; i++) {
      for(let j=0; j<listaFaltando.length; j++) { // Para cada categoria...
        if (listaFaltando[j].categoria==cat[i]) { // Para cada item faltando...
          listaFaltandoOrg.push(listaFaltando[j]);
        }
      }
    }
    return listaFaltandoOrg;
  }
  static gerarPDF(itemFaltando) {
    const date = new Date();
    const dataAtual = [ // [Dia {dia, mes, ano},  Hora {sec, min, hora}]
      {
          dia: date.getUTCDate()<=9 ? "0"+(date.getUTCDate()-1).toString() : date.getUTCDate()-1,
          mes: date.getUTCMonth()<=9 ? "0"+(date.getUTCMonth()-1).toString() : date.getUTCMonth()-1,
          ano: date.getFullYear()
      },
      { 
          sec: date.getSeconds()<=9 ? "0"+date.getSeconds().toString() : date.getSeconds(),
          min: date.getMinutes()<=9 ? "0"+date.getMinutes().toString() : date.getMinutes(),
          hora: date.getHours()<=9 ? "0"+date.getHours().toString() : date.getHours()
      }
    ];
    const doc = new jsPDF();
    doc.text("MyStock - Lista de compras", 10, 10);
    for (let i=0; i<itemFaltando().length; i++) {
      doc.text(`${i+1}. ${itemFaltando()[i].nome} - ${itemFaltando()[i].quantN - itemFaltando()[i].quantD} unidades [${itemFaltando()[i].categoria}]`, 10, (10*(i+1))+10); // linha com ajuda da Sarinha kk
    }
    doc.save(`lista-de-compras${dataAtual[0].mes}${dataAtual[0].dia}${dataAtual[0].ano}_${dataAtual[1].hora}${dataAtual[1].min}${dataAtual[1].sec}.pdf`); // Gera o arquivo com a data de criação
  }



}
    
export default StorageManager;