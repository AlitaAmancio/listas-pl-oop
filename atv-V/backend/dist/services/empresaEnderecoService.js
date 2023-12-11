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
exports.EmpresaEnderecoService = void 0;
const db_1 = __importDefault(require("../config/db"));
class EmpresaEnderecoService {
    getAllEmpresaEnderecos() {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('SELECT * FROM EmpresaEndereco');
                return result.rows;
            }
            finally {
                client.release();
            }
        });
    }
    getEmpresaEnderecoById(empresaEnderecoId) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('SELECT * FROM EmpresaEndereco WHERE "EmpresaEnderecoID" = $1', [empresaEnderecoId]);
                return result.rows[0] || null;
            }
            finally {
                client.release();
            }
        });
    }
    createEmpresaEndereco(empresaEndereco) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('INSERT INTO EmpresaEndereco("EmpresaEnderecoID", "EmpresaID", "EnderecoID", "CodigoIdentificador") VALUES ($1, $2, $3, $4) RETURNING *', [empresaEndereco.EmpresaEnderecoID, empresaEndereco.EmpresaID, empresaEndereco.EnderecoID, empresaEndereco.CodigoIdentificador]);
                return result.rows[0];
            }
            finally {
                client.release();
            }
        });
    }
    updateEmpresaEndereco(empresaEndereco) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('UPDATE EmpresaEndereco SET "EmpresaID" = $1, "EnderecoID" = $2, "CodigoIdentificador" = $3 WHERE "EmpresaEnderecoID" = $4 RETURNING *', [empresaEndereco.EmpresaID, empresaEndereco.EnderecoID, empresaEndereco.CodigoIdentificador, empresaEndereco.EmpresaEnderecoID]);
                return result.rows[0] || null;
            }
            finally {
                client.release();
            }
        });
    }
    deleteEmpresaEndereco(empresaEnderecoId) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('DELETE FROM EmpresaEndereco WHERE "EmpresaEnderecoID" = $1', [empresaEnderecoId]);
                return (result && result.rowCount && result.rowCount > 0) || false;
            }
            finally {
                client.release();
            }
        });
    }
}
exports.EmpresaEnderecoService = EmpresaEnderecoService;
