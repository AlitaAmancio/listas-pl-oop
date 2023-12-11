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
exports.ServicoService = void 0;
const db_1 = __importDefault(require("../backend/src/config/db"));
class ServicoService {
    getAllServicos() {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('SELECT * FROM Servico');
                return result.rows;
            }
            finally {
                client.release();
            }
        });
    }
    getServicosByPartialName(partialName) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('SELECT * FROM Servico WHERE "ServicoNome" ILIKE $1', [`%${partialName}%`]);
                return result.rows;
            }
            finally {
                client.release();
            }
        });
    }
    getServicoById(servicoId) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('SELECT * FROM Servico WHERE "ServicoID" = $1', [servicoId]);
                return result.rows[0] || null;
            }
            finally {
                client.release();
            }
        });
    }
    createServico(servico) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('INSERT INTO Servico("ServicoID", "ServicoNome", "ServicoPreco", "ServicoDescricao") VALUES ($1, $2, $3, $4) RETURNING *', [servico.ServicoID, servico.ServicoNome, servico.ServicoPreco, servico.ServicoDescricao]);
                return result.rows[0];
            }
            finally {
                client.release();
            }
        });
    }
    updateServico(servico) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('UPDATE Servico SET "ServicoNome" = $1, "ServicoPreco" = $2, "ServicoDescricao" = $3 WHERE "ServicoID" = $4 RETURNING *', [servico.ServicoNome, servico.ServicoPreco, servico.ServicoDescricao, servico.ServicoID]);
                return result.rows[0] || null;
            }
            finally {
                client.release();
            }
        });
    }
    deleteServico(servicoId) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('DELETE FROM Servico WHERE "ServicoID" = $1', [servicoId]);
                return (result && result.rowCount && result.rowCount > 0) || false;
            }
            finally {
                client.release();
            }
        });
    }
}
exports.ServicoService = ServicoService;
