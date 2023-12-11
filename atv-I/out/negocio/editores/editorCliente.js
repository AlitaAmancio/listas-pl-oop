"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
class EditorCliente {
    constructor() {
        this.entrada = new entrada_1.default();
    }
    editar(cliente) {
        console.log(`\nEditando informações da(o) cliente... ( • ᴥ • )`);
        console.log(`O que gostaria de editar?`);
        console.log(`1 — Nome`);
        console.log(`2 — Nome social`);
        console.log(`3 — Pets`);
        let escolha = this.entrada.receberNumero(`Digite a opção desejada: `);
        switch (escolha) {
            case 1:
                let nome = this.entrada.receberTexto(`• Por favor, informe o novo nome: `);
                cliente.nome = nome;
                console.log(`\nEdição concluída!   ✓ ( • ᴥ • )\n`);
                break;
            case 2:
                let nomeSocial = this.entrada.receberTexto(`• Por favor, informe o novo nome social: `);
                cliente.nomeSocial = nomeSocial;
                console.log(`\nEdição concluída!   ✓ ( • ᴥ • )\n`);
                break;
            default:
                console.log('Não existe esta opção!   ⋯ ( • ᴥ • )');
        }
    }
}
exports.default = EditorCliente;
