"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("./listagem"));
class ListagemServicos extends listagem_1.default {
    constructor(servicos) {
        super();
        this.servicos = servicos;
    }
    listar() {
        console.log(`\nRelação completa de todos os serviços disponíveis:\n`);
        this.servicos.forEach(servico => {
            console.log(`Nome: ${servico.nome}`);
        });
        console.log(`━━━━━━ • ᴥ • ━━━━━━\n`);
    }
}
exports.default = ListagemServicos;
