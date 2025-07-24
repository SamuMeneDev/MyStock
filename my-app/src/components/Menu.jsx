import { useNavigate } from "react-router-dom";
function Menu() {
    const navigate = useNavigate();
    
    return (
        <div>
            <div className="container">
            <h2>Ver estoque completo</h2>
            <button onClick={() => navigate("/tabela")}>
                <span className="material-symbols-outlined">storefront</span>
            </button>
            </div>
        </div>
    );
}
export default Menu;