import { useState } from 'react';
import './AddItem.css';

function AddItem(props) {
    const [nome, setNome] = useState("");
    const [quantD, setQuantD] = useState("");
    const [quantN, setQuantN] = useState("");
    const [categoria, setCategoria] = useState("");
    
    const [camposCompletos, setCamposCompletos] = useState(true);

    function clearState() { // limpa os inputs do componente ao adicionar o produto
        setNome("");
        setQuantD("");
        setQuantN("");
        setCategoria("");
    }
    return (
        <div className='container'>
            <h2>Adicionar Item</h2>
            
            <div className="form">
                <input type="text" placeholder='Nome do produto' onChange={(e) => setNome(e.target.value)} value={nome}/>
                <input type="number" min={0} placeholder='Quant. Disponível' onChange={(e) => setQuantD(e.target.value)} value={quantD}/>
                <input type="number" min={1} placeholder='Quant. Necessária' onChange={(e) => setQuantN(e.target.value)} value={quantN}/>
                <select name="cat" id="cat" onChange={(e) => setCategoria(e.target.value)} value={categoria}>
                    <option value="" style={{color: "red"}} >Selecione a categoria</option>
                    {props.categorias.map((itens, index) => (
                        <option value={itens} key={index}><span>{itens}</span></option>
                    ))}
                </select>
                <button onClick={function() {
                    props.addItem(nome, quantD, quantN, categoria, clearState, setCamposCompletos);
                }}>Adicionar Produto</button>
                {!camposCompletos && <span style={{color: "var(--colorDangerPrimary)"}} >Preencha todos os campos</span>}
            </div>
        </div>
    );
}
export default AddItem;