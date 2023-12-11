"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const empresaEnderecoController_1 = require("../controllers/empresaEnderecoController");
const empresaEnderecoRouter = express_1.default.Router();
const empresaEnderecoController = new empresaEnderecoController_1.EmpresaEnderecoController();
empresaEnderecoRouter.get('/', empresaEnderecoController.getAllEmpresaEnderecos);
empresaEnderecoRouter.get('/:id', empresaEnderecoController.getEmpresaEnderecoById);
empresaEnderecoRouter.post('/', empresaEnderecoController.createEmpresaEndereco);
empresaEnderecoRouter.put('/:id', empresaEnderecoController.updateEmpresaEndereco);
empresaEnderecoRouter.delete('/:id', empresaEnderecoController.deleteEmpresaEndereco);
exports.default = empresaEnderecoRouter;
