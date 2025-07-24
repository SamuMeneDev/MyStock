import { useState } from 'react';
import Form from './subcomponents/Form';
import StorageManager from '../uttilities';

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
    function addItem() {
        StorageManager.addItem(
            nome,
            quantD,
            quantN,
            categoria,
            clearState,
            setCamposCompletos,
            props.lista,
            props.setLista
        );
    }

    return (
        <div className='container'>
            <h2>Adicionar Item</h2>
            <Form
            nome={nome}
            setNome={setNome}
            quantD={quantD}
            setQuantD={setQuantD}
            quantN={quantN}
            setQuantN={setQuantN}
            categoria={categoria}
            setCategoria={setCategoria}
            listaCategorias={props.categorias}
            buttonAction={addItem}
            camposCompletos={camposCompletos}
            textButton="Adicionar produto"/>
        </div>
    );
}
export default AddItem;