import './Alerta.css';
function Alerta() {
    const lista = JSON.parse(localStorage.getItem("lista"));
    function itemFaltando() {
        const listaFaltando = [];
        lista.map(item => {
            if(item.quantD<item.quantN) {listaFaltando.push(item)}
        })
        return listaFaltando;
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
                    <li key={item.id}>Faltam {item.quantN-item.quantD} unidades de {item.nome}</li>
                ))}
            </ul>:<h2>Não itens faltando</h2>}
        </div>
    );
}
export default Alerta;