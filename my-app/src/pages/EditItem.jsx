import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import Nav from "../components/Nav";
import Voltar from "../components/Voltar";
function EditItem(props) { // Editar os valores de um item
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const idUrl = searchParams.get("id");
    const nomeUrl = searchParams.get("nome");
    const quantDUrl = searchParams.get("quantD");
    const quantNUrl = searchParams.get("quantN");
    const categoriaUrl = searchParams.get("categoria");
    
    const [nome, setNome] = useState(nomeUrl);
    const [quantD, setQuantD] = useState(quantDUrl);
    const [quantN, setQuantN] = useState(quantNUrl);
    const [categoria, setCategoria] = useState(categoriaUrl);
    function saveItem(nome, quantD, quantN, categoria) {
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
            navigate("/");

        }
        
    }
    return (
        <div>
            <Nav />
            <Voltar url="/tabela" />
            <div className="container">
                <h2>Editar Item</h2>
                <div className="form">
                    <input type="text" placeholder='Nome do produto' onChange={(e) => setNome(e.target.value)} value={nome}/>
                    <input type="number" min={0} placeholder='Quant. Disponível' onChange={(e) => setQuantD(e.target.value)} value={quantD}/>
                    <input type="number" min={1} placeholder='Quant. Necessária' onChange={(e) => setQuantN(e.target.value)} value={quantN}/>
                    <select name="cat" id="cat" onChange={(e) => setCategoria(e.target.value)} value={categoria}>
                        <option value="" style={{color: "red"}} >Selecione a categoria</option>
                        {props.categorias.map(itens => (
                            <option value={itens} key={itens}>{itens}</option>
                        ))}
                </select>
                <button onClick={() => {saveItem(nome, quantD, quantN, categoria)}}>Salvar</button>
                </div>
            </div>
        </div>
    );
}
export default EditItem;