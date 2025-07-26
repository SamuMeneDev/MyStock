import { useState, useEffect } from 'react';
import StorageManager from '../uttilities';
import { jsPDF } from 'jspdf';

function Alerta(props) {
    const [lista, setLista] = useState(JSON.parse(localStorage.getItem("lista")) || []); // Lista de produtos (Tabela)
    const listaF = JSON.parse(localStorage.getItem("lista"));

    useEffect(() => {
        localStorage.setItem("lista", JSON.stringify(listaF))
    }, [lista]);

    function gerarPDF() {
        StorageManager.gerarPDF(itemFaltando);
    }
    function itemFaltando() {
        return StorageManager.itemFaltando(props.categorias, lista);
    }

    return (
        <div className="container table">
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
            </ul>:<span>Não há itens faltando</span>}
            {itemFaltando().length>0 && <button className="print" onClick={() => gerarPDF()}>Imprimir lista de compras</button>}
        </div>
    );
}
export default Alerta;