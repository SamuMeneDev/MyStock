import { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';

import './Alerta.css';

function Alerta(props) {
    const [lista, setLista] = useState(JSON.parse(localStorage.getItem("lista")) || []); // Lista de produtos (Tabela)
    const listaF = JSON.parse(localStorage.getItem("lista"));

    useEffect(() => {
        localStorage.setItem("lista", JSON.stringify(listaF))
    }, [lista]);

    function gerarPDF() {
        const date = new Date();
        const dataAtual = [ // [Dia {dia, mes, ano},  Hora {sec, min, hora}]
            {
                dia: date.getUTCDate()<=9 ? "0"+(date.getUTCDate()-1).toString() : date.getUTCDate()-1,
                mes: date.getUTCMonth()<=9 ? "0"+date.getUTCMonth().toString() : date.getUTCMonth(),
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
        doc.save(`lista-de-compras${dataAtual[0].mes}${dataAtual[0].dia}${dataAtual[0].ano}-${dataAtual[1].hora}${dataAtual[1].min}${dataAtual[1].sec}.pdf`); // Gera o arquivo com a data de criação
    }


    function itemFaltando() {
        const cat = props.categorias.sort();
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

    return (
        <div className="container">
            <h2>Itens faltando</h2>
            <table border="1" >
                <thead>
                    {itemFaltando().length>0 && 
                    <tr>
                        <th>Nome</th>
                        <th>Quant. Disponível</th>
                        <th>Quant. Necessária</th>
                        <th>Categoria</th>
                    </tr>}
                </thead>
                <tbody>
                    {itemFaltando().map(item => (
                    <tr key={item.id}>
                        <td>{item.nome}</td>
                        <td className="alert">{item.quantD}</td>
                        <td>{item.quantN}</td>
                        <td>{item.categoria}</td>
                    </tr>
                ))}
                
                </tbody>
            </table>
            {itemFaltando().length>0?
            <ul>
                {itemFaltando().map(item => (
                    <li key={item.id}><h4 style={{display: "inline"}}>Faltam {item.quantN-item.quantD} unidades de {item.nome}</h4></li>
                ))}
            </ul>:<h2>Não itens faltando</h2>}
            {itemFaltando().length>0 && <button className="print" onClick={() => gerarPDF()}>Imprimir lista de compras</button>}
        </div>
    );
}
export default Alerta;