"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoController = void 0;
const produtoService_1 = require("../../../services/produtoService");
class ProdutoController {
    constructor() {
        this.getAllProdutos = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const produtos = yield this.produtoService.getAllProdutos();
                res.status(200).json(produtos);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
        this.getProdutosByPartialName = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const partialName = req.params.partialName;
                const produtos = yield this.produtoService.getProdutosByPartialName(partialName);
                res.status(200).json(produtos);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
        this.getProdutoById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const produtoId = req.params.produtoId;
                const produto = yield this.produtoService.getProdutoById(produtoId);
                if (produto) {
                    res.status(200).json(produto);
                }
                else {
                    res.status(404).send('Produto não encontrado');
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
        this.createProduto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const novoProduto = req.body;
                const produtoCriado = yield this.produtoService.createProduto(novoProduto);
                res.status(201).json(produtoCriado);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
        this.updateProduto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const produtoId = req.params.produtoId;
                const dadosAtualizados = req.body;
                dadosAtualizados.ProdutoID = produtoId;
                const produtoAtualizado = yield this.produtoService.updateProduto(dadosAtualizados);
                if (produtoAtualizado) {
                    res.status(200).json(produtoAtualizado);
                }
                else {
                    res.status(404).send('Produto não encontrado');
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
        this.deleteProduto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const produtoId = req.params.produtoId;
                const sucesso = yield this.produtoService.deleteProduto(produtoId);
                if (sucesso) {
                    res.status(204).send();
                }
                else {
                    res.status(404).send('Produto não encontrado');
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
        this.produtoService = new produtoService_1.ProdutoService();
    }
}
exports.ProdutoController = ProdutoController;
