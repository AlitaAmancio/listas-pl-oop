"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetController = void 0;
const petService_1 = require("../../../services/petService");
class PetController {
    constructor() {
        this.petService = new petService_1.PetService();
    }
    getAllPets(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pets = yield this.petService.getAllPets();
                res.status(200).json(pets);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
    getPetById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const petId = req.params.id;
            try {
                const pet = yield this.petService.getPetById(petId);
                if (pet) {
                    res.status(200).json(pet);
                }
                else {
                    res.status(404).send('Pet não encontrado');
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
    createPet(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const petData = req.body;
            try {
                const pet = yield this.petService.createPet(petData);
                res.status(201).json(pet);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
    updatePet(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const petId = req.params.id;
            const petData = req.body;
            try {
                const pet = yield this.petService.updatePet(Object.assign(Object.assign({}, petData), { PetID: petId }));
                if (pet) {
                    res.status(200).json(pet);
                }
                else {
                    res.status(404).send('Pet não encontrado');
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
    deletePet(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const petId = req.params.id;
            try {
                const success = yield this.petService.deletePet(petId);
                if (success) {
                    res.status(204).send();
                }
                else {
                    res.status(404).send('Pet não encontrado');
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
}
exports.PetController = PetController;
