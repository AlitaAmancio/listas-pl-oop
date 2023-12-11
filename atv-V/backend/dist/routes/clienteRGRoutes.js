"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const clienteRGController_1 = require("../controllers/clienteRGController");
const clienteRGRoutes = express_1.default.Router();
const clienteRGController = new clienteRGController_1.ClienteRGController();
clienteRGRoutes.get('/', clienteRGController.getAllClienteRGs);
clienteRGRoutes.get('/:id', clienteRGController.getClienteRGById);
clienteRGRoutes.post('/', clienteRGController.createClienteRG);
clienteRGRoutes.put('/:id', clienteRGController.updateClienteRG);
clienteRGRoutes.delete('/:id', clienteRGController.deleteClienteRG);
exports.default = clienteRGRoutes;
