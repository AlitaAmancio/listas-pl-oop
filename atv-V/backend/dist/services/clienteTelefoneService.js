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
exports.ClienteTelefoneService = void 0;
const db_1 = __importDefault(require("../config/db"));
class ClienteTelefoneService {
    getAllClienteTelefones() {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('SELECT * FROM ClienteTelefone');
                return result.rows;
            }
            finally {
                client.release();
            }
        });
    }
    getClienteTelefoneById(clienteTelefoneId) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('SELECT * FROM ClienteTelefone WHERE "ClienteTelefoneID" = $1', [clienteTelefoneId]);
                return result.rows[0] || null;
            }
            finally {
                client.release();
            }
        });
    }
    createClienteTelefone(clienteTelefone) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('INSERT INTO ClienteTelefone("ClienteTelefoneID", "ClienteID", "TelefoneDDD", "TelefoneNumero") VALUES ($1, $2, $3, $4) RETURNING *', [clienteTelefone.ClienteTelefoneID, clienteTelefone.ClienteID, clienteTelefone.TelefoneDDD, clienteTelefone.TelefoneNumero]);
                return result.rows[0];
            }
            finally {
                client.release();
            }
        });
    }
    updateClienteTelefone(clienteTelefone) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('UPDATE ClienteTelefone SET "TelefoneDDD" = $1, "TelefoneNumero" = $2 WHERE "ClienteTelefoneID" = $3 RETURNING *', [clienteTelefone.TelefoneDDD, clienteTelefone.TelefoneNumero, clienteTelefone.ClienteTelefoneID]);
                return result.rows[0] || null;
            }
            finally {
                client.release();
            }
        });
    }
    deleteClienteTelefone(clienteTelefoneId) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('DELETE FROM ClienteTelefone WHERE "ClienteTelefoneID" = $1', [clienteTelefoneId]);
                return (result && result.rowCount && result.rowCount > 0) || false;
            }
            finally {
                client.release();
            }
        });
    }
}
exports.ClienteTelefoneService = ClienteTelefoneService;
