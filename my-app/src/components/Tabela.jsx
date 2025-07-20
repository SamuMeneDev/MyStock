function Tabela({ lista }) {
    return (
        <div className="container">
            <h2>Seus produtos</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Quant. Disponível</th>
                        <th>Quant. Necessária</th>
                        <th>Categoria</th>
                        <th>Editar valores</th>
                        <th>Remover item</th>
                    </tr>
                </thead> 
                <tbody>
                    {lista.map(item => (
                        <tr key={item.id}>
                            <td>{item.nome}</td>
                            
                            <td className="tdQuantAction" ><span>{item.quantD}</span>
                                <button>
                                    <span>+</span>
                                </button>

                                <button>
                                    <span>-</span>
                                </button>
                            </td>
                            <td className="tdQuantAction" ><span>{item.quantN}</span>
                                <button>
                                    <span>+</span>
                                </button>
                                <button>
                                    <span>-</span>
                                </button>
                            </td>
                            <td>{item.categoria}</td>
                            <td className="tdActionTable"><button className="actionTableFull">
                                <span className="material-symbols-outlined">edit_note</span>
                            </button></td>
                            <td className="tdActionTable"><button className="actionTableFull">
                                <span className="material-symbols-outlined">delete</span>
                            </button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default Tabela;