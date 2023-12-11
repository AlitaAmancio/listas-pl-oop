import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ListaCliente from "../components/listaClientes";
import FormularioCadastroCliente from "../components/formularioCadastroCliente";
import FormularioCadastroProduto from "../components/formularioCadastroProduto";
import ListaProdutos from "../components/listaProdutos";
import FormularioCadastroServico from "../components/formularioCadastroServico";
import ListaServicos from "../components/listaServicos";
import CadastrarRG from "../components/cadastrarRg";
import CadastrarTelefone from "../components/cadastrarTelefone";
import CadastrarPet from "../components/cadastrarPet";
import Inicio from "../components/paginaInicial";
import Dashboard from "../components/dashboard";

export const Rotas = () => {
    return (
        <Routes>
            <Route path='/home' element={<Inicio />} />
            
            <Route path='/lista-clientes' element={<ListaCliente tema="#00ced1"/>} />
            <Route path='/lista-produtos' element={<ListaProdutos tema="#00ced1"/>} />
            <Route path='/lista-servicos' element={<ListaServicos tema="#00ced1"/>} />
           
            <Route path='/cadastro-cliente' element={<FormularioCadastroCliente tema="#00ced1"/>} />
            <Route path='/cadastro-produto' element={<FormularioCadastroProduto tema="#00ced1"/>} />
            <Route path='/cadastro-servico' element={<FormularioCadastroServico tema="#00ced1"/>} />

            <Route path='/cadastrar-rg' element={<CadastrarRG tema="#00ced1"/>} />
            <Route path='/cadastrar-telefone' element={<CadastrarTelefone tema="#00ced1"/>} />
            <Route path='/cadastrar-pet' element={<CadastrarPet tema="#00ced1"/>} />

            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/' element={<Navigate to={'/home'} />} />
        </Routes>
    )
}