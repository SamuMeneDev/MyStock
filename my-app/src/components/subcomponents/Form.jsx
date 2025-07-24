function Form({
    nome, setNome,
    quantD, setQuantD,
    quantN, setQuantN,
    categoria, setCategoria,
    listaCategorias, buttonAction,
    camposCompletos, textButton
 }) {
    return (
        <div className="form">
            <input type="text" placeholder='Nome do produto' onChange={(e) => setNome(e.target.value)} value={nome}/>
            <input type="number" min={0} placeholder='Quant. Disponível' onChange={(e) => setQuantD(e.target.value)} value={quantD}/>
            <input type="number" min={1} placeholder='Quant. Necessária' onChange={(e) => setQuantN(e.target.value)} value={quantN}/>
            <select name="cat" id="cat" onChange={(e) => setCategoria(e.target.value)} value={categoria}>
                <option value="" style={{color: "red"}} >Selecione a categoria</option>
                {listaCategorias.map((itens, index) => (
                    <option value={itens} key={index}><span>{itens}</span></option>
                ))}
            </select>
            <button onClick={() => buttonAction()}>{textButton}</button>
            {!camposCompletos && <span style={{color: "var(--colorDangerPrimary)"}} >Preencha todos os campos</span>}
        </div>
    );
}
export default Form;