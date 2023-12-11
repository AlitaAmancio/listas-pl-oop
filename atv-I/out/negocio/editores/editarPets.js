"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
class EditorPets {
    constructor() {
        this.entrada = new entrada_1.default();
    }
    editar(pet) {
        console.log(`\nEditando informações do pet... ( • ᴥ • )`);
        console.log('O que gostaria de editar?');
        console.log('1 — Nome');
        console.log('2 — Especie');
        console.log('3 — Raça');
        console.log('4 — Gênero');
        let escolha = this.entrada.receberNumero('\nDigite a opção desejada: ');
        switch (escolha) {
            case 1:
                let nome = this.entrada.receberTexto(`• Por favor, informe o novo nome do pet: `);
                pet.setNome(nome);
                console.log(`\nEdição concluída!   ✓ ( • ᴥ • )\n`);
                break;
            case 2:
                let especie = this.entrada.receberTexto(`• Por favor, informe a nova especie do pet: `);
                pet.setEspecie(especie);
                console.log(`\nEdição concluída!   ✓ ( • ᴥ • )\n`);
                break;
            case 3:
                let raca = this.entrada.receberTexto(`• Por favor, informe a nova raça do pet: `);
                pet.setRaca(raca);
                console.log(`\nEdição concluída!   ✓ ( • ᴥ • )\n`);
                break;
            case 4:
                let sexo = this.entrada.receberTexto(`• Por favor, informe o novo sexo do pet: `);
                pet.setSexo(sexo);
                console.log(`\nEdição concluída!   ✓ ( • ᴥ • )\n`);
                break;
            default:
                console.log('Não existe esta opção!   ⋯ ( • ᴥ • )');
        }
    }
}
exports.default = EditorPets;
