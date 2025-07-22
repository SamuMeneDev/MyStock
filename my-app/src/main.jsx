import { StrictMode, useState, } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './pages/App.jsx'
import EditItem from './pages/EditItem.jsx';
import PaginaTabela from './pages/PaginaTabela.jsx';
const categoria = [ // Categorias de produtos
    "Bebidas",
    "Mercearia",
    "Limpeza",
    "Higiene",
    "Padaria",
    "Biscoitos/Lanches",
    "Papelaria",
    "Pet-Shop",
    "Frios",
    "Hortifruti",
    "Carnes",
    "Congelados",
    "Doces",
    "Embalagens"];

const router = createBrowserRouter([
{
  path: "/",
  element: <App />
},
{
  path: "/tabela",
  element: <PaginaTabela categorias={categoria} />
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
