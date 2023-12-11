"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("./listagem"));
class ListagemProdutos extends listagem_1.default {
    constructor(produtos) {
        super();
        this.produtos = produtos;
    }
    listar() {
        console.log(`\nRelação completa de todos os itens disponíveis:\n`);
        this.produtos.forEach(produto => {
            console.log(`\nNome do produto: ${produto.nome}`);
            console.log(`Preço: R$ ${produto.preco.toFixed(2)}`);
        });
        console.log(`━━━━━━ • ᴥ • ━━━━━━\n`);
    }
}
exports.default = ListagemProdutos;
