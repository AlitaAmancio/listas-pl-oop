"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const empresaClienteController_1 = require("../controllers/empresaClienteController");
const empresaClienteRouter = express_1.default.Router();
const empresaClienteController = new empresaClienteController_1.EmpresaClienteController();
empresaClienteRouter.get('/', empresaClienteController.getAllEmpresasClientes);
empresaClienteRouter.get('/:empresaId/:clienteId', empresaClienteController.getEmpresaClienteById);
empresaClienteRouter.post('/', empresaClienteController.createEmpresaCliente);
empresaClienteRouter.put('/:empresaId/:clienteId', empresaClienteController.updateEmpresaCliente);
empresaClienteRouter.delete('/:empresaId/:clienteId', empresaClienteController.deleteEmpresaCliente);
exports.default = empresaClienteRouter;
