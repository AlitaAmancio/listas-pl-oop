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
exports.PetServicoController = void 0;
const petServicoService_1 = require("../../../services/petServicoService");
class PetServicoController {
    constructor() {
        this.petServicoService = new petServicoService_1.PetServicoService();
    }
    getAllPetServicos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const petServicos = yield this.petServicoService.getAllPetServicos();
                res.status(200).json(petServicos);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
    getPetServicoById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const petServicoId = req.params.id;
            try {
                const petServico = yield this.petServicoService.getPetServicoById(petServicoId);
                if (petServico) {
                    res.status(200).json(petServico);
                }
                else {
                    res.status(404).send('Associação Pet-Serviço não encontrada');
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
    createPetServico(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const petServicoData = req.body;
            try {
                const petServico = yield this.petServicoService.createPetServico(petServicoData);
                res.status(201).json(petServico);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
    updatePetServico(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const petServicoId = req.params.id;
            const petServicoData = req.body;
            try {
                const petServico = yield this.petServicoService.updatePetServico(Object.assign(Object.assign({}, petServicoData), { PetServicoID: petServicoId }));
                if (petServico) {
                    res.status(200).json(petServico);
                }
                else {
                    res.status(404).send('Associação Pet-Serviço não encontrada');
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
    deletePetServico(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const petServicoId = req.params.id;
            try {
                const success = yield this.petServicoService.deletePetServico(petServicoId);
                if (success) {
                    res.status(204).send();
                }
                else {
                    res.status(404).send('Associação Pet-Serviço não encontrada');
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
}
exports.PetServicoController = PetServicoController;
