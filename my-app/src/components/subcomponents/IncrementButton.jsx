function IncrementoButton(props) {
    return(
        <div>
            <button onClick={() => {props.incrementoButton(item.id, props.variavel, false)}}>
                <span>&minus;</span>
            </button>
            <button onClick={() => {props.incrementoButton(item.id, props.variavel, true)}}>
                <span>&#43;</span>
            </button>
        </div>
    );
}
export default IncrementoButton;