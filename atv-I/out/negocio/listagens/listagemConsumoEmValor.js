"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("./listagem"));
class ListagemClientesCincoMais extends listagem_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
    }
    listar() {
        console.log('\nEsses são os cinco clientes que mais gastaram em termos de valor:\n');
        this.clientes.forEach(cliente => {
            let listaProdutosConsumidos = [];
            let listaServicosAtribuidos = [];
            let totalGastoProduto = 0;
            let totalGastoServico = 0;
            for (let x = 0; x < cliente.getProdutosConsumidos.length; x++) {
                listaProdutosConsumidos.push(cliente.getProdutosConsumidos[x].nome);
                totalGastoProduto += cliente.getProdutosConsumidos[x].preco;
            }
            for (let y = 0; y < cliente.getServicosConsumidos.length; y++) {
                listaServicosAtribuidos.push(cliente.getServicosConsumidos[y].nome);
                totalGastoServico += cliente.getServicosConsumidos[y].preco;
            }
            let totalGasto = totalGastoProduto + totalGastoServico;
            cliente.valorGasto = totalGasto;
        });
        const clientesOrdenados = this.clientes.sort((a, b) => b.valorGasto - a.valorGasto);
        const cincoMais = clientesOrdenados.slice(0, 5);
        cincoMais.forEach((cliente, indice) => {
            console.log(`${indice + 1} - ${cliente.nome}: R$ ${cliente.valorGasto} gastos com produtos e/ou serviços.\n`);
        });
    }
}
exports.default = ListagemClientesCincoMais;
