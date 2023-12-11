"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const clienteController_1 = require("../controllers/clienteController");
const clienteRouter = express_1.default.Router();
const clienteController = new clienteController_1.ClienteController();
clienteRouter.get('/', clienteController.getAllClientes);
clienteRouter.get('/:partialName', clienteController.getClientesByPartialName);
clienteRouter.get('/:clienteCPF', clienteController.getClienteByCPF);
clienteRouter.post('/', clienteController.createCliente);
clienteRouter.put('/:clienteCPF', clienteController.updateCliente);
clienteRouter.delete('/:clienteCPF', clienteController.deleteCliente);
exports.default = clienteRouter;
