"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
class EditorProduto {
    constructor() {
        this.entrada = new entrada_1.default();
    }
    editar(produto) {
        console.log(`\nEditando informações do produto... ( • ᴥ • )`);
        let nome = this.entrada.receberTexto(`• Por favor, informe o novo nome do produto: `);
        let preco = this.entrada.receberNumero(`• Por favor, informe o novo preço do produto: `);
        produto.nome = nome;
        produto.preco = preco;
        console.log(`\nEdição concluída!   ✓ ( • ᴥ • )\n`);
    }
}
exports.default = EditorProduto;
