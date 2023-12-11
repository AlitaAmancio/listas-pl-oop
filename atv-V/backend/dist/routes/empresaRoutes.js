"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const empresaController_1 = require("../controllers/empresaController");
const empresaRouter = express_1.default.Router();
const empresaController = new empresaController_1.EmpresaController();
empresaRouter.get('/', empresaController.getAllEmpresas);
empresaRouter.get('/partialName/:partialName', empresaController.getEmpresasByPartialName);
empresaRouter.get('/:id', empresaController.getEmpresaById);
empresaRouter.post('/', empresaController.createEmpresa);
empresaRouter.put('/:id', empresaController.updateEmpresa);
empresaRouter.delete('/:id', empresaController.deleteEmpresa);
empresaRouter.get('/codigoIdentificador/:codigoIdentificador', empresaController.getEmpresaByCodigoIdentificador);
empresaRouter.put('/codigoIdentificador/:codigoIdentificador', empresaController.updateEmpresaByCodigoIdentificador);
empresaRouter.delete('/codigoIdentificador/:codigoIdentificador', empresaController.deleteEmpresaByCodigoIdentificador);
exports.default = empresaRouter;
