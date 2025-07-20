import { useNavigate } from "react-router-dom";

function Nav() { // Título da aplicação que leva à home
    const navigate = useNavigate()
    return (
        <div className="nav">
            <a onClick={() => navigate("/")}><h1>MyStock</h1></a>
        </div>
    );
}
export default Nav;