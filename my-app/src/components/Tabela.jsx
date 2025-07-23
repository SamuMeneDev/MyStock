import { useNavigate } from "react-router-dom";

function Tabela(props) {
    const navigate = useNavigate();
    function editItem(task) {
        const query = new URLSearchParams();
        query.set("id", task.id);
        query.set("nome", task.nome);
        query.set("quantD", task.quantD);
        query.set("quantN", task.quantN);
        query.set("categoria", task.categoria);
        navigate(`/edit?${query.toString()}`);

    }
    
    return (
        <div className="container">
            <h2>Seus produtos</h2>
            <table border={1}>
                <thead>
                    {props.lista.length>0 && <tr>
                        <th>Nome</th>
                        <th>Quant. Disponível</th>
                        <th>Quant. Necessária</th>
                        <th>Categoria</th>
                        <th>Editar valores</th>
                        <th>Remover item</th>
                    </tr>}
                </thead> 
                <tbody>
                    {props.lista.map(item => (
                        <tr key={item.id}>
                            <td><span>{item.nome}</span></td>
                            
                            <td className="tdQuantAction" >
                                <span>{item.quantD}</span>
                                <div>
                                    <button onClick={() => {props.incrementoButton(item.id, 0, true)}}>
                                        <span>&#43;</span>
                                    </button>
                                    <button onClick={() => {props.incrementoButton(item.id, 0, false)}}>
                                        <span>&minus;</span>
                                        </button>
                                </div>
                            </td>
                            <td className="tdQuantAction" ><span>{item.quantN}</span>
                                <div>
                                    <button onClick={() => {props.incrementoButton(item.id, 1, true)}}>
                                        <span>&#43;</span>
                                    </button>
                                    <button onClick={() => {props.incrementoButton(item.id, 1 , false)}}>
                                        <span>&minus;</span>
                                    </button>
                                </div>
                            </td>
                            <td><span>{item.categoria}</span></td>
                            
                            <td className="tdActionTable">
                                <button className="actionTableFull" onClick={() => {editItem(item)}}>
                                    <span className="material-symbols-outlined">edit_note</span>
                                </button>
                            </td>

                            <td className="tdActionTable tdDelete">
                                <button className="actionTableFull" onClick={() => {props.removeItem(item.id)}}>
                                    <span className="material-symbols-outlined">delete</span>
                                </button>
                            </td>
                        
                        </tr>
                    ))}
                </tbody>
            </table>
            {props.lista<=0 && <h2>Não há itens registrados ainda..</h2>}
        </div>
    );
}
export default Tabela;