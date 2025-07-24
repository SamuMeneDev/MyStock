import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import StorageManager from "../uttilities";

import Nav from "../components/subcomponents/Nav";
import Voltar from "../components/subcomponents/Voltar";
import Footer from "../components/subcomponents/Footer";
import Form from "../components/subcomponents/Form";

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
    const [camposCompletos, setCamposCompletos] = useState(true);

    function saveItem() {
        StorageManager.saveItem(idUrl, nome, quantD, quantN, categoria, setCamposCompletos, navigate);
    }
    return (
        <div className="edit">
            <Nav />
            <Voltar url="/tabela" />
            <div className="container">
              <h2>Editar Item</h2>
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
              buttonAction={saveItem}
              camposCompletos={camposCompletos}
              textButton="Salvar"
              />
            </div>
            <Footer />
        </div>
    );
}
export default EditItem;