"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
const telefone_1 = __importDefault(require("../../modelo/telefone"));
function cadastrarTelefone(cliente) {
    let entrada = new entrada_1.default();
    let ddd = entrada.receberTexto(`• Por favor, informe o DDD de seu telefone: `);
    let numeroTelefone = entrada.receberTexto(`• Informe o número de telefone, por favor: `);
    let telefone = new telefone_1.default(ddd, numeroTelefone);
    cliente.adicionarTelefone(telefone);
}
exports.default = cadastrarTelefone;
