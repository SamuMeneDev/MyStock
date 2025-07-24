import { useNavigate } from "react-router-dom";

function Voltar({ url }) {
    const navigate = useNavigate();
    return (
        <div className="container">
            <h3>Voltar</h3>
            <button onClick={() => {navigate(url);}}>
                <span className="material-symbols-outlined">arrow_back</span>
            </button>
        </div>
    )
}
export default Voltar;