import { useNavigate } from "react-router-dom";

function Menu() {
    const navigate = useNavigate();
    
    return (
        <div className="container">
            <h2>Ver tabela completa</h2>
            <button onClick={() => navigate("/tabela")}>
                <span className="material-symbols-outlined">data_table</span>
            </button>
        </div>
    );
}
export default Menu;