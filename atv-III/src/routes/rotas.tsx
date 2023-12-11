import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Inicio from "../components/paginaInicial";
import FormularioCadastroCliente from "../components/formularioCadastroCliente";
import FormularioCadastroProduto from "../components/formularioCadastroProduto";
import FormularioCadastroServico from "../components/formularioCadastroServico";
import FormularioEdicaoCliente from "../components/formularioEdicaoCliente";
import ListaCliente from "../components/listaClientes";
import ListaProdutos from "../components/listaProdutos";
import ListaServicos from "../components/listaServicos";
import CadastrarRG from "../components/cadastrarRg";
import CadastrarTelefone from "../components/cadastrarTelefone";
import CadastrarPet from "../components/cadastrarPet";
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

            <Route path='/editar-cliente' element={<FormularioEdicaoCliente tema="#00ced1"/>} />

            <Route path='/cadastrar-rg' element={<CadastrarRG tema="#00ced1"/>} />
            <Route path='/cadastrar-telefone' element={<CadastrarTelefone tema="#00ced1"/>} />
            <Route path='/cadastrar-pet' element={<CadastrarPet tema="#00ced1"/>} />

            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/' element={<Navigate to={'/home'} />} />
        </Routes>
    )
}