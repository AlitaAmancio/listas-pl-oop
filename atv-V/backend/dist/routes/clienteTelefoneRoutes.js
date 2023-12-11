"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const clienteTelefoneController_1 = require("../controllers/clienteTelefoneController");
const clienteTelefoneRouter = express_1.default.Router();
const clienteTelefoneController = new clienteTelefoneController_1.ClienteTelefoneController();
clienteTelefoneRouter.get('/', clienteTelefoneController.getAllClienteTelefones);
clienteTelefoneRouter.get('/:id', clienteTelefoneController.getClienteTelefoneById);
clienteTelefoneRouter.post('/', clienteTelefoneController.createClienteTelefone);
clienteTelefoneRouter.put('/:id', clienteTelefoneController.updateClienteTelefone);
clienteTelefoneRouter.delete('/:id', clienteTelefoneController.deleteClienteTelefone);
exports.default = clienteTelefoneRouter;
