"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const produtoController_1 = require("../controllers/produtoController");
const produtoRouter = express_1.default.Router();
const produtoController = new produtoController_1.ProdutoController();
produtoRouter.get('/', produtoController.getAllProdutos);
produtoRouter.get('/:partialName', produtoController.getProdutosByPartialName);
produtoRouter.get('/:produtoId', produtoController.getProdutoById);
produtoRouter.post('/', produtoController.createProduto);
produtoRouter.put('/:produtoId', produtoController.updateProduto);
produtoRouter.delete('/:produtoId', produtoController.deleteProduto);
exports.default = produtoRouter;
