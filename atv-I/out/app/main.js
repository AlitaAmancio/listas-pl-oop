"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
const empresa_1 = __importDefault(require("../modelo/empresa"));
const cadastroCliente_1 = __importDefault(require("../negocio/cadastros/cadastroCliente"));
const cadastroProduto_1 = __importDefault(require("../negocio/cadastros/cadastroProduto"));
const cadastroServicos_1 = __importDefault(require("../negocio/cadastros/cadastroServicos"));
const editorCliente_1 = __importDefault(require("../negocio/editores/editorCliente"));
const editorProduto_1 = __importDefault(require("../negocio/editores/editorProduto"));
const listagemClientes_1 = __importDefault(require("../negocio/listagens/listagemClientes"));
const listagemProdutos_1 = __importDefault(require("../negocio/listagens/listagemProdutos"));
const listagemServicos_1 = __importDefault(require("../negocio/listagens/listagemServicos"));
const selecionador_1 = __importDefault(require("../negocio/buscas/selecionador"));
const selecionadorProduto_1 = __importDefault(require("../negocio/buscas/selecionadorProduto"));
const selecionadorServico_1 = __importDefault(require("../negocio/buscas/selecionadorServico"));
const editorServico_1 = __importDefault(require("../negocio/editores/editorServico"));
const cadastroNovoRG_1 = __importDefault(require("../negocio/cadastros/cadastroNovoRG"));
const cadastroNovoPet_1 = __importDefault(require("../negocio/cadastros/cadastroNovoPet"));
const cadastroNovoTelefone_1 = __importDefault(require("../negocio/cadastros/cadastroNovoTelefone"));
const listagemConsumoProduto_1 = __importDefault(require("../negocio/listagens/listagemConsumoProduto"));
const listagemServicosAtribuidos_1 = __importDefault(require("../negocio/listagens/listagemServicosAtribuidos"));
const listagemConsumoEmValor_1 = __importDefault(require("../negocio/listagens/listagemConsumoEmValor"));
const listagemConsumoEmQuantidade_1 = __importDefault(require("../negocio/listagens/listagemConsumoEmQuantidade"));
const listagemProdutosServicosMaisConsumidos_1 = __importDefault(require("../negocio/listagens/listagemProdutosServicosMaisConsumidos"));
const selecionadorPet_1 = __importDefault(require("../negocio/buscas/selecionadorPet"));
const editarPets_1 = __importDefault(require("../negocio/editores/editarPets"));
console.log(`\nBem-vinda(o) ao PetLovers!   ♡ ( • ᴥ • )\nEsse é nosso sistema de gerenciamento de pet shops e clínicas veterinarias.`);
let empresa = new empresa_1.default();
let execucao = true;
while (execucao) {
    console.log(`Selecione uma das opções abaixo para prosseguir:`);
    console.log('\nSobre os clientes');
    console.log('━━━━━━ • ᴥ • ━━━━━━');
    console.log('• Operações Base');
    console.log(`1 — Cadastrar cliente`);
    console.log(`2 — Editar um cliente`);
    console.log(`3 — Excluir um cliente`);
    console.log(`4 — Listar todos os clientes`);
    console.log('\n• Operações Complementares (ATENÇÃO: operações exclusivas para clientes já cadastrados!)');
    console.log('5 — Cadastrar pet');
    console.log(`6 — Editar pet`);
    console.log('7 — Adicionar RG');
    console.log('8 — Adicionar telefone');
    console.log('━━━━━━ • ᴥ • ━━━━━━');
    console.log('\nSobre os produtos');
    console.log('━━━━━━ • ᴥ • ━━━━━━');
    console.log(`9 — Cadastrar produto`);
    console.log(`10 — Editar um produto`);
    console.log(`11 — Excluir um produto`);
    console.log(`12 — Listar todos os produtos`);
    console.log('━━━━━━ • ᴥ • ━━━━━━');
    console.log('\nSobre os serviços');
    console.log('━━━━━━ • ᴥ • ━━━━━━');
    console.log(`13 — Cadastrar serviço`);
    console.log(`14 — Editar um serviço`);
    console.log(`15 — Excluir um serviço`);
    console.log(`16 — Listar todos os serviços`);
    console.log('━━━━━━ • ᴥ • ━━━━━━');
    console.log('\nAções (ATENÇÃO: operações exclusivas para clientes, produtos e serviços já cadastrados!)');
    console.log('━━━━━━ • ᴥ • ━━━━━━');
    console.log('17 — Atribuir produto');
    console.log('18 — Solicitar serviço');
    console.log('━━━━━━ • ᴥ • ━━━━━━');
    console.log('\nListagens específicas');
    console.log('━━━━━━ • ᴥ • ━━━━━━');
    console.log('19 — Listar produtos e serviços mais consumidos');
    console.log('20 — Listar top cinco clientes que mais consumiram produtos e serviços (em valor)');
    console.log('21 — Listar top dez clientes que mais consumiram produtos e serviços (em quantidade)');
    console.log('━━━━━━ • ᴥ • ━━━━━━');
    console.log(`\n0 — Sair`);
    let entrada = new entrada_1.default();
    let opcao = entrada.receberNumero(`Por favor, selecione uma das opções disponíveis: `);
    console.log('━━━━━━ • ᴥ • ━━━━━━');
    switch (opcao) {
        // ᨆ CRUD - Cliente ᨆ
        case 1:
            let cadastro = new cadastroCliente_1.default(empresa.getClientes);
            cadastro.cadastrar();
            break;
        case 2:
            let cpfEditar = entrada.receberTexto('Informe o CPF do cliente que será editado: ');
            let selecionadorClienteEditar = new selecionador_1.default(empresa.getClientes);
            let clienteEditar = selecionadorClienteEditar.selecionar(cpfEditar);
            let editor = new editorCliente_1.default();
            editor.editar(clienteEditar);
            console.log('\nCliente editado com sucesso!   ✓ ( • ᴥ • )');
            break;
        case 3:
            let cpf = entrada.receberTexto('Informe o CPF do cliente que será excluído: ');
            let selecionadorCliente = new selecionador_1.default(empresa.getClientes);
            let cliente = selecionadorCliente.selecionar(cpf);
            console.log(`Nome do cliente selecionado: ${cliente.nome}`);
            let indice = empresa.getClientes.indexOf(cliente);
            delete empresa.getClientes[indice];
            console.log('\nCliente exluído com sucesso.   ✓ ( • ᴥ • )');
            break;
        case 4:
            let listagem = new listagemClientes_1.default(empresa.getClientes);
            listagem.listar();
            break;
        // ᨆ CRUD - Cadastros Complementares ᨆ
        case 5:
            let cpfCliente = entrada.receberTexto('Informe o CPF do cliente para adicionar um novo pet: ');
            let selecionarCliente = new selecionador_1.default(empresa.getClientes);
            let clienteSelecionado = selecionarCliente.selecionar(cpfCliente);
            console.log(`Nome do cliente selecionado: ${clienteSelecionado.nome}`);
            (0, cadastroNovoPet_1.default)(clienteSelecionado);
            console.log(`\nPet adicionado com sucesso ao cliente ${clienteSelecionado.nome}!   ✓ ( • ᴥ • )`);
            break;
        case 6:
            let cpfEditarPet = entrada.receberTexto('Informe o CPF do cliente para editar um Pet: ');
            let selecionaCliente = new selecionador_1.default(empresa.getClientes);
            let cliente_buscado = selecionaCliente.selecionar(cpfEditarPet);
            console.log('Nome do cliente: ' + cliente_buscado.nome);
            let pet = entrada.receberTexto('Informe o nome do Pet que gostaria de editar: ');
            let selecionaPet = new selecionadorPet_1.default(cliente_buscado.getPets);
            let petEncontrado = selecionaPet.selecionar(pet);
            console.log(`Pet selecionado: ${petEncontrado.getNome}`);
            let editorPet = new editarPets_1.default();
            editorPet.editar(petEncontrado);
            break;
        case 7:
            let rgCliente = entrada.receberTexto('Informe o CPF do cliente para adicionar um RG: ');
            let selecionarClienteRG = new selecionador_1.default(empresa.getClientes);
            let clienteSelecionadoRG = selecionarClienteRG.selecionar(rgCliente);
            console.log(`\nNome do cliente selecionado: ${clienteSelecionadoRG.nome}`);
            (0, cadastroNovoRG_1.default)(clienteSelecionadoRG);
            console.log(`\nRG adicionado com sucesso ao cliente ${clienteSelecionadoRG.nome}!   ✓ ( • ᴥ • )`);
            break;
        case 8:
            let clienteCpf = entrada.receberTexto('Informe o CPF do cliente para adicionar um telefone: ');
            let selecionarClienteTelefone = new selecionador_1.default(empresa.getClientes);
            let clienteSelecionadoTelefone = selecionarClienteTelefone.selecionar(clienteCpf);
            console.log(`Nome do cliente selecionado: ${clienteSelecionadoTelefone.nome}`);
            (0, cadastroNovoTelefone_1.default)(clienteSelecionadoTelefone);
            console.log(`\nTelefone adicionado com sucesso ao cliente ${clienteSelecionadoTelefone.nome}!   ✓ ( • ᴥ • )`);
            console.log(clienteSelecionadoTelefone.getTelefones);
            break;
        // ᨆ CRUD - Produto ᨆ
        case 9:
            let cadastroProduto = new cadastroProduto_1.default(empresa.getProdutos);
            cadastroProduto.cadastrar();
            break;
        case 10:
            let produtoNome = entrada.receberTexto('Informe o nome do produto que você gostaria de modificar: ');
            let selecionadorProdutoEditar = new selecionadorProduto_1.default(empresa.getProdutos);
            let produtoEditar = selecionadorProdutoEditar.selecionar(produtoNome);
            let editorProduto = new editorProduto_1.default();
            editorProduto.editar(produtoEditar);
            console.log('\nProduto editado com sucesso!   ✓ ( • ᴥ • )');
            break;
        case 11:
            let nomeProduto = entrada.receberTexto('Informe o nome do produto que você gostaria de excluir: ');
            let selecionadorProduto = new selecionadorProduto_1.default(empresa.getProdutos);
            let produto = selecionadorProduto.selecionar(nomeProduto);
            console.log(`Nome do produto selecionado: ${produto.nome}`);
            let indiceProduto = empresa.getProdutos.indexOf(produto);
            delete empresa.getProdutos[indiceProduto];
            console.log('\nProduto excluído com sucesso.   ✓ ( • ᴥ • )');
            break;
        case 12:
            let listagemProdutos = new listagemProdutos_1.default(empresa.getProdutos);
            listagemProdutos.listar();
            break;
        // ᨆ CRUD - Serviço ᨆ
        case 13:
            let cadastroServico = new cadastroServicos_1.default(empresa.getServicos);
            cadastroServico.cadastrar();
            break;
        case 14:
            let nomeServico = entrada.receberTexto('Informe o nome do serviço que você gostaria de modificar: ');
            let selecionadorServicoEditar = new selecionadorServico_1.default(empresa.getServicos);
            let novoServico = selecionadorServicoEditar.selecionar(nomeServico);
            let editarServico = new editorServico_1.default();
            editarServico.editar(novoServico);
            console.log('\nServiço editado com sucesso!   ✓ ( • ᴥ • )');
            break;
        case 15:
            let servicoNome = entrada.receberTexto('Informe o nome do serviço que você gostaria de excluir: ');
            let selecionadorServico = new selecionadorServico_1.default(empresa.getServicos);
            let servico = selecionadorServico.selecionar(servicoNome);
            console.log(`Serviço selecionado: ${servico.nome}`);
            let indiceServico = empresa.getServicos.indexOf(servico);
            delete empresa.getServicos[indiceServico];
            console.log('\nServiço excluído com sucesso.   ✓ ( • ᴥ • )');
            break;
        case 16:
            let listagemServicos = new listagemServicos_1.default(empresa.getServicos);
            listagemServicos.listar();
            break;
        // ᨆ Atribuições de Produtos e Serviços ᨆ
        case 17:
            let input = entrada.receberTexto('Informe o CPF do cliente a quem gostaria de atribuir um produto: ');
            let encontraCliente = new selecionador_1.default(empresa.getClientes);
            let clienteEncontrado = encontraCliente.selecionar(input);
            let inputPetProduto = entrada.receberTexto('Informe o nome do Pet a que o produto está atribuído: ');
            let selecionarPetProduto = new selecionadorPet_1.default(clienteEncontrado.getPets);
            let petFiltradoProduto = selecionarPetProduto.selecionar(inputPetProduto);
            console.log(`\nNome do cliente selecionado: ${clienteEncontrado.nome}`);
            let inputProduto = entrada.receberTexto('Informe o nome do produto que será atribuído: ');
            let buscaProduto = new selecionadorProduto_1.default(empresa.getProdutos);
            let produtoEncontrado = buscaProduto.selecionar(inputProduto);
            clienteEncontrado.consumirProduto(produtoEncontrado);
            petFiltradoProduto.consumirProduto(produtoEncontrado);
            (0, listagemConsumoProduto_1.default)(clienteEncontrado);
            break;
        case 18:
            let input_cpf = entrada.receberTexto('Informe o CPF do cliente que gostaria de solicitar um serviço: ');
            let encontrarCliente = new selecionador_1.default(empresa.getClientes);
            let cliente_encontrado = encontrarCliente.selecionar(input_cpf);
            let inputPetServico = entrada.receberTexto('Informe o nome do Pet para o qual deseja solicitar o serviço: ');
            let selecionarPetServico = new selecionadorPet_1.default(cliente_encontrado.getPets);
            let petFiltradoServico = selecionarPetServico.selecionar(inputPetServico);
            console.log(`\nNome do cliente selecionado: ${cliente_encontrado.nome}`);
            let inputServico = entrada.receberTexto('Informe o nome do serviço que gostaria de solicitar: ');
            let buscaServico = new selecionadorServico_1.default(empresa.getServicos);
            let servicoEncontrado = buscaServico.selecionar(inputServico);
            cliente_encontrado.solicitarServico(servicoEncontrado);
            petFiltradoServico.solicitarServico(servicoEncontrado);
            (0, listagemServicosAtribuidos_1.default)(cliente_encontrado);
            break;
        // ᨆ Listagens Específicas ᨆ
        case 19:
            let listagemProdutoServicos = new listagemProdutosServicosMaisConsumidos_1.default(empresa.getClientes);
            listagemProdutoServicos.listar();
            break;
        case 20:
            let listagemCincoMais = new listagemConsumoEmValor_1.default(empresa.getClientes);
            listagemCincoMais.listar();
            break;
        case 21:
            let listagemDezMais = new listagemConsumoEmQuantidade_1.default(empresa.getClientes);
            listagemDezMais.listar();
            break;
        // ᨆ Encerrar ᨆ
        case 0:
            execucao = false;
            console.log(`Obrigada por utilizar o PetLovers! Até mais!   ♡ ( • ᴥ • )\n`);
            break;
        default:
            console.log(`Operação não entendida!   ⋯ ( • ᴥ • )`);
    }
}
