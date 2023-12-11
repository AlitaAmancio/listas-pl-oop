"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const enderecoController_1 = require("../controllers/enderecoController");
const enderecoRouter = express_1.default.Router();
const enderecoController = new enderecoController_1.EnderecoController();
enderecoRouter.get('/', enderecoController.getAllEnderecos);
enderecoRouter.get('/:id', enderecoController.getEnderecoById);
enderecoRouter.post('/', enderecoController.createEndereco);
enderecoRouter.put('/:id', enderecoController.updateEndereco);
enderecoRouter.delete('/:id', enderecoController.deleteEndereco);
enderecoRouter.get('/codigoPostal/:codigoPostal', enderecoController.getEnderecoByCodigoPostal);
exports.default = enderecoRouter;
