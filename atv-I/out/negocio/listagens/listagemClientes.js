"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("./listagem"));
class ListagemClientes extends listagem_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
    }
    listar() {
        console.log(`\nAqui estão todos os clientes atualmente registrados:\n`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            let listaRgs = [];
            let listaTelefones = [];
            let listaPets = [];
            let listaProdutosConsumidos = [];
            let listaServicosAtribuidos = [];
            let totalGastoProduto = 0;
            let totalGastoServico = 0;
            for (let x = 0; x < cliente.getPets.length; x++) {
                listaPets.push(cliente.getPets[x].getNome);
            }
            for (let y = 0; y < cliente.getRgs.length; y++) {
                listaRgs.push(cliente.getRgs[y].getValor);
            }
            for (let z = 0; z < cliente.getTelefones.length; z++) {
                let telefoneFormatado = `(${cliente.getTelefones[z].getDdd}) ${cliente.getTelefones[z].getNumero}`;
                listaTelefones.push(telefoneFormatado);
            }
            for (let x = 0; x < cliente.getProdutosConsumidos.length; x++) {
                listaProdutosConsumidos.push(cliente.getProdutosConsumidos[x].nome);
                totalGastoProduto += cliente.getProdutosConsumidos[x].preco;
            }
            for (let y = 0; y < cliente.getServicosConsumidos.length; y++) {
                listaServicosAtribuidos.push(cliente.getServicosConsumidos[y].nome);
                totalGastoServico += cliente.getServicosConsumidos[y].preco;
            }
            let totalGasto = totalGastoProduto + totalGastoServico;
            console.log(`RGs: ${listaRgs}`);
            console.log(`Telefones: ${listaTelefones}`);
            console.log(`Pets: ${listaPets}`);
            console.log(`Produtos consumidos: ${listaProdutosConsumidos}`);
            console.log(`Serviços atribuídos: ${listaServicosAtribuidos}`);
            console.log(cliente.getPets[0].getProdutosConsumidos);
            console.log(cliente.getPets[0].getServicosConsumidos);
            console.log(`Valor gasto: ${totalGasto.toFixed(2)}`);
            console.log(`\n━━━━━━ • ᴥ • ━━━━━━`);
        });
    }
}
exports.default = ListagemClientes;
