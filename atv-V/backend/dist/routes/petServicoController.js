"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const petServicoController_1 = require("../controllers/petServicoController");
const petServicoRouter = express_1.default.Router();
const petServicoController = new petServicoController_1.PetServicoController();
petServicoRouter.get('/', petServicoController.getAllPetServicos);
petServicoRouter.get('/:id', petServicoController.getPetServicoById);
petServicoRouter.post('/', petServicoController.createPetServico);
petServicoRouter.put('/:id', petServicoController.updatePetServico);
petServicoRouter.delete('/:id', petServicoController.deletePetServico);
exports.default = petServicoRouter;
