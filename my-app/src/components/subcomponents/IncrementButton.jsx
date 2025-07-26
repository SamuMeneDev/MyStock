function IncrementoButton(props) {
    return(
        <div>
            <button onClick={() => {props.incrementoButton(props.itemId, props.variavel, false, props.lista, props.setLista)}}>
                <span>&minus;</span>
            </button>
            <button onClick={() => {props.incrementoButton(props.itemId, props.variavel, true, props.lista, props.setLista)}}>
                <span>&#43;</span>
            </button>
        </div>
    );
}
export default IncrementoButton;