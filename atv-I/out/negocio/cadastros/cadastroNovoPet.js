"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
const pet_1 = __importDefault(require("../../modelo/pet"));
function cadastrarPet(cliente) {
    let entrada = new entrada_1.default();
    let nomePet = entrada.receberTexto('• Por favor, informe o nome do pet: ');
    let especiePet = entrada.receberTexto('• Por gentileza, especifique a espécie do pet: ');
    let racaPet = entrada.receberTexto('• Por favor, informe o raça do pet: ');
    let sexoPet = entrada.receberTexto('• Informe o sexo do pet, por gentileza: ');
    let novoPet = new pet_1.default(nomePet, racaPet, sexoPet, especiePet);
    cliente.adicionarPet(novoPet);
}
exports.default = cadastrarPet;
