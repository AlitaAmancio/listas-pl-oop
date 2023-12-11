"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const petController_1 = require("../controllers/petController");
const petRouter = express_1.default.Router();
const petController = new petController_1.PetController();
petRouter.get('/', petController.getAllPets);
petRouter.get('/:id', petController.getPetById);
petRouter.post('/', petController.createPet);
petRouter.put('/:id', petController.updatePet);
petRouter.delete('/:id', petController.deletePet);
exports.default = petRouter;
