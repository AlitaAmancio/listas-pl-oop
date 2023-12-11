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
exports.ClienteRGService = void 0;
const db_1 = __importDefault(require("../config/db"));
class ClienteRGService {
    getAllClienteRGs() {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('SELECT * FROM ClienteRG');
                return result.rows;
            }
            finally {
                client.release();
            }
        });
    }
    getClienteRGById(rgId) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('SELECT * FROM ClienteRG WHERE "RG_ID" = $1', [rgId]);
                return result.rows[0] || null;
            }
            finally {
                client.release();
            }
        });
    }
    createClienteRG(clienteRG) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('INSERT INTO ClienteRG("RG_ID", "ClienteID", "RGNumero", "RGDataEmissao") VALUES ($1, $2, $3, $4) RETURNING *', [clienteRG.RG_ID, clienteRG.ClienteID, clienteRG.RGNumero, clienteRG.RGDataEmissao]);
                return result.rows[0];
            }
            finally {
                client.release();
            }
        });
    }
    updateClienteRG(clienteRG) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('UPDATE ClienteRG SET "RGNumero" = $1, "RGDataEmissao" = $2 WHERE "RG_ID" = $3 RETURNING *', [clienteRG.RGNumero, clienteRG.RGDataEmissao, clienteRG.RG_ID]);
                return result.rows[0] || null;
            }
            finally {
                client.release();
            }
        });
    }
    deleteClienteRG(rgId) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('DELETE FROM ClienteRG WHERE "RG_ID" = $1', [rgId]);
                return (result && result.rowCount && result.rowCount > 0) || false;
            }
            finally {
                client.release();
            }
        });
    }
}
exports.ClienteRGService = ClienteRGService;
