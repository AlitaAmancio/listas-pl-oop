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
exports.EmpresaClienteService = void 0;
const db_1 = __importDefault(require("../config/db"));
class EmpresaClienteService {
    getAllEmpresasClientes() {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('SELECT * FROM EmpresaCliente');
                return result.rows;
            }
            finally {
                client.release();
            }
        });
    }
    getEmpresaClienteById(empresaId, clienteId) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('SELECT * FROM EmpresaCliente WHERE "EmpresaID" = $1 AND "ClienteID" = $2', [empresaId, clienteId]);
                return result.rows[0] || null;
            }
            finally {
                client.release();
            }
        });
    }
    createEmpresaCliente(empresaCliente) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('INSERT INTO EmpresaCliente("EmpresaID", "ClienteID", "CodigoIdentificador") VALUES ($1, $2, $3) RETURNING *', [empresaCliente.EmpresaID, empresaCliente.ClienteID, empresaCliente.CodigoIdentificador]);
                return result.rows[0];
            }
            finally {
                client.release();
            }
        });
    }
    updateEmpresaCliente(empresaCliente) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('UPDATE EmpresaCliente SET "CodigoIdentificador" = $1 WHERE "EmpresaID" = $2 AND "ClienteID" = $3 RETURNING *', [empresaCliente.CodigoIdentificador, empresaCliente.EmpresaID, empresaCliente.ClienteID]);
                return result.rows[0] || null;
            }
            finally {
                client.release();
            }
        });
    }
    deleteEmpresaCliente(empresaId, clienteId) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('DELETE FROM EmpresaCliente WHERE "EmpresaID" = $1 AND "ClienteID" = $2', [empresaId, clienteId]);
                return (result && result.rowCount && result.rowCount > 0) || false;
            }
            finally {
                client.release();
            }
        });
    }
}
exports.EmpresaClienteService = EmpresaClienteService;
