"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pet_1 = __importDefault(require("../../modelo/pet"));
class SelecionadorPet {
    constructor(pets) {
        this.pets = pets;
    }
    selecionar(nome) {
        let petAlvo = new pet_1.default(nome, '', '', '');
        this.pets.forEach(pet => {
            if (nome === pet.getNome) {
                petAlvo = pet;
            }
        });
        return petAlvo;
    }
}
exports.default = SelecionadorPet;
