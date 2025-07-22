import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App.jsx'
import EditItem from './pages/EditItem.jsx';
const categoria = [ // Categorias de produtos
    "Hortifruti",
    "Frios",
    "Carnes",
    "Higiene",
    "Bebidas",
    "Padaria",
    "Mercearia",
    "Congelados",
    "Doces",
    "Embalagens"];

const router = createBrowserRouter([
{
  path: "/",
  element: <App categorias={categoria} />
},
{
  path: "/zuei",
  element: <h1>Zuei kk</h1>
},
{
  path: "/edit",
  element: <EditItem categorias={categoria} />
}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
