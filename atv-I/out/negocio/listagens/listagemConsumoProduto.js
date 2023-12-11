"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function listarProdutosConsumidos(cliente) {
    console.log(`\nRegistro dos itens adquiridos pelo cliente ${cliente.nome}`);
    for (let x = 0; x < cliente.getProdutosConsumidos.length; x++) {
        console.log(`${x + 1} - ${cliente.getProdutosConsumidos[x].nome}`);
    }
}
exports.default = listarProdutosConsumidos;
