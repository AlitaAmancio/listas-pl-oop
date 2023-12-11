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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoService = void 0;
const db_1 = __importDefault(require("../config/db"));
class ProdutoService {
    getAllProdutos() {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('SELECT * FROM Produto');
                return result.rows;
            }
            finally {
                client.release();
            }
        });
    }
    getProdutosByPartialName(partialName) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('SELECT * FROM Produto WHERE "ProdutoNome" ILIKE $1', [`%${partialName}%`]);
                return result.rows;
            }
            finally {
                client.release();
            }
        });
    }
    getProdutoById(produtoId) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('SELECT * FROM Produto WHERE "ProdutoID" = $1', [produtoId]);
                return result.rows[0] || null;
            }
            finally {
                client.release();
            }
        });
    }
    createProduto(produto) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('INSERT INTO Produto("ProdutoID", "ProdutoNome", "ProdutoPreco", "ProdutoDescricao") VALUES ($1, $2, $3, $4) RETURNING *', [produto.ProdutoID, produto.ProdutoNome, produto.ProdutoPreco, produto.ProdutoDescricao]);
                return result.rows[0];
            }
            finally {
                client.release();
            }
        });
    }
    updateProduto(produto) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('UPDATE Produto SET "ProdutoNome" = $1, "ProdutoPreco" = $2, "ProdutoDescricao" = $3 WHERE "ProdutoID" = $4 RETURNING *', [produto.ProdutoNome, produto.ProdutoPreco, produto.ProdutoDescricao, produto.ProdutoID]);
                return result.rows[0] || null;
            }
            finally {
                client.release();
            }
        });
    }
    deleteProduto(produtoId) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('DELETE FROM Produto WHERE "ProdutoID" = $1', [produtoId]);
                return (result && result.rowCount && result.rowCount > 0) || false;
            }
            finally {
                client.release();
            }
        });
    }
}
exports.ProdutoService = ProdutoService;
