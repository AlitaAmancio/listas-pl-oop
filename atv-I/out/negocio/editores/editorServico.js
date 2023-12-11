"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
class EditorServico {
    constructor() {
        this.entrada = new entrada_1.default();
    }
    editar(servico) {
        console.log(`\nEditando informações do serviço... ( • ᴥ • )`);
        let nome = this.entrada.receberTexto(`• Por favor, informe o novo nome do serviço: `);
        let preco = this.entrada.receberNumero(`• Por favor, informe o novo preço do serviço: `);
        servico.nome = nome;
        servico.preco = preco;
        console.log(`\nEdição concluída!   ✓ ( • ᴥ • )\n`);
    }
}
exports.default = EditorServico;
