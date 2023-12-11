"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const servicoController_1 = require("../controllers/servicoController");
const servicoRouter = express_1.default.Router();
const servicoController = new servicoController_1.ServicoController();
servicoRouter.get('/', servicoController.getAllServicos);
servicoRouter.get('/:partialName', servicoController.getServicosByPartialName);
servicoRouter.get('/:servicoId', servicoController.getServicoById);
servicoRouter.post('/', servicoController.createServico);
servicoRouter.put('/:servicoId', servicoController.updateServico);
servicoRouter.delete('/:servicoId', servicoController.deleteServico);
exports.default = servicoRouter;
