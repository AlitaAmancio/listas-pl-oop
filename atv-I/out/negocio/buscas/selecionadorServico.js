"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const servico_1 = __importDefault(require("../../modelo/servico"));
class SelecionadorServico {
    constructor(servicos) {
        this.servicos = servicos;
    }
    selecionar(nome) {
        let servicoAlvo = new servico_1.default();
        this.servicos.forEach(servico => {
            if (nome === servico.nome) {
                servicoAlvo = servico;
            }
        });
        return servicoAlvo;
    }
}
exports.default = SelecionadorServico;
