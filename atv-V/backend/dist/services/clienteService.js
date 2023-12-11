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
exports.ClienteService = void 0;
const db_1 = __importDefault(require("../config/db"));
class ClienteService {
    getAllClientes() {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('SELECT * FROM Cliente');
                return result.rows;
            }
            finally {
                client.release();
            }
        });
    }
    getClienteByPartialName(partialName) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('SELECT * FROM Cliente WHERE "ClienteNome" ILIKE $1', [`%${partialName}%`]);
                return result.rows;
            }
            finally {
                client.release();
            }
        });
    }
    getClienteByCPF(clienteCPF) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('SELECT * FROM Cliente WHERE "ClienteCPF" = $1', [
                    clienteCPF,
                ]);
                return result.rows[0] || null;
            }
            finally {
                client.release();
            }
        });
    }
    createCliente(cliente) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('INSERT INTO Cliente("ClienteID", "ClienteNome", "ClienteNomeSocial", "ClienteCPF", "ClienteCPFDataEmissao", "ClienteEmail", "ClienteDataCadastro", "EnderecoID") VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', [
                    cliente.ClienteID,
                    cliente.ClienteNome,
                    cliente.ClienteNomeSocial,
                    cliente.ClienteCPF,
                    cliente.ClienteCPFDataEmissao,
                    cliente.ClienteEmail,
                    cliente.ClienteDataCadastro,
                    cliente.EnderecoID,
                ]);
                return result.rows[0];
            }
            finally {
                client.release();
            }
        });
    }
    updateCliente(cliente) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('UPDATE Cliente SET "ClienteNome" = $1, "ClienteNomeSocial" = $2, "ClienteEmail" = $3, "EnderecoID" = $4 WHERE "ClienteCPF" = $5 RETURNING *', [
                    cliente.ClienteNome,
                    cliente.ClienteNomeSocial,
                    cliente.ClienteEmail,
                    cliente.EnderecoID,
                    cliente.ClienteCPF,
                ]);
                return result.rows[0] || null;
            }
            finally {
                client.release();
            }
        });
    }
    deleteCliente(clienteCPF) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('DELETE FROM Cliente WHERE "ClienteCPF" = $1', [
                    clienteCPF,
                ]);
                return (result && result.rowCount && result.rowCount > 0) || false;
            }
            finally {
                client.release();
            }
        });
    }
}
exports.ClienteService = ClienteService;
