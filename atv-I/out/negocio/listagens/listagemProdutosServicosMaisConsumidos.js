"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("./listagem"));
class ListagemProdutosServicosMaisConsumidos extends listagem_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
    }
    listar() {
        console.log('\nRelação dos produtos e serviços mais frequentemente utilizados:');
        let produtosMaisConsumidos = [];
        let servicosMaisConsumidos = [];
        this.clientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(produto => {
                const indice = produtosMaisConsumidos.findIndex(item => item.nome === produto.nome);
                if (indice !== -1) {
                    produtosMaisConsumidos[indice].quantidade++;
                }
                else {
                    produtosMaisConsumidos.push({ nome: produto.nome, quantidade: 1 });
                }
            });
            cliente.getServicosConsumidos.forEach(servico => {
                const indice = servicosMaisConsumidos.findIndex(item => item.nome === servico.nome);
                if (indice !== -1) {
                    servicosMaisConsumidos[indice].quantidade++;
                }
                else {
                    servicosMaisConsumidos.push({ nome: servico.nome, quantidade: 1 });
                }
            });
        });
        produtosMaisConsumidos.sort((a, b) => b.quantidade - a.quantidade);
        servicosMaisConsumidos.sort((a, b) => b.quantidade - a.quantidade);
        console.log('\nProdutos mais utilizados:');
        for (let x = 0; x < Math.min(produtosMaisConsumidos.length, 5); x++) {
            if (produtosMaisConsumidos[x].quantidade === 1) {
                console.log(`${x + 1} - ${produtosMaisConsumidos[x].nome}: ${produtosMaisConsumidos[x].quantidade} vez.`);
            }
            else {
                console.log(`${x + 1} - ${produtosMaisConsumidos[x].nome}: ${produtosMaisConsumidos[x].quantidade} vezes.`);
            }
        }
        console.log('\nServiços mais utilizados:');
        for (let y = 0; y < Math.min(servicosMaisConsumidos.length, 5); y++) {
            if (servicosMaisConsumidos[y].quantidade === 1) {
                console.log(`${y + 1} - ${servicosMaisConsumidos[y].nome}: ${servicosMaisConsumidos[y].quantidade} vez.`);
            }
            else {
                console.log(`${y + 1} - ${servicosMaisConsumidos[y].nome}: ${servicosMaisConsumidos[y].quantidade} vezes.`);
            }
        }
    }
}
exports.default = ListagemProdutosServicosMaisConsumidos;
