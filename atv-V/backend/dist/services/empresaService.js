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
exports.EmpresaService = void 0;
const db_1 = __importDefault(require("../config/db"));
class EmpresaService {
    getAllEmpresas() {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('SELECT * FROM Empresa');
                return result.rows;
            }
            finally {
                client.release();
            }
        });
    }
    getEmpresasByPartialName(partialName) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('SELECT * FROM Empresa WHERE "EmpresaNome" ILIKE $1', [`%${partialName}%`]);
                return result.rows;
            }
            finally {
                client.release();
            }
        });
    }
    getEmpresaById(empresaId) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('SELECT * FROM Empresa WHERE "EmpresaID" = $1', [empresaId]);
                return result.rows[0] || null;
            }
            finally {
                client.release();
            }
        });
    }
    createEmpresa(empresa) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('INSERT INTO Empresa("EmpresaID", "CodigoIdentificador", "EmpresaNome", "EmpresaDescricao", "EmpresaEmail") VALUES ($1, $2, $3, $4, $5) RETURNING *', [
                    empresa.EmpresaID,
                    empresa.CodigoIdentificador,
                    empresa.EmpresaNome,
                    empresa.EmpresaDescricao,
                    empresa.EmpresaEmail,
                ]);
                return result.rows[0];
            }
            finally {
                client.release();
            }
        });
    }
    updateEmpresa(empresa) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('UPDATE Empresa SET "EmpresaNome" = $1, "EmpresaDescricao" = $2, "EmpresaEmail" = $3 WHERE "EmpresaID" = $4 RETURNING *', [empresa.EmpresaNome, empresa.EmpresaDescricao, empresa.EmpresaEmail, empresa.EmpresaID]);
                return result.rows[0] || null;
            }
            finally {
                client.release();
            }
        });
    }
    deleteEmpresa(empresaId) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('DELETE FROM Empresa WHERE "EmpresaID" = $1', [empresaId]);
                return (result && result.rowCount && result.rowCount > 0) || false;
            }
            finally {
                client.release();
            }
        });
    }
    getEmpresaByCodigoIdentificador(codigoIdentificador) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('SELECT * FROM Empresa WHERE "CodigoIdentificador" = $1', [codigoIdentificador]);
                return result.rows[0] || null;
            }
            finally {
                client.release();
            }
        });
    }
    updateEmpresaByCodigoIdentificador(empresa) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('UPDATE Empresa SET "EmpresaNome" = $1, "EmpresaDescricao" = $2, "EmpresaEmail" = $3 WHERE "CodigoIdentificador" = $4 RETURNING *', [
                    empresa.EmpresaNome,
                    empresa.EmpresaDescricao,
                    empresa.EmpresaEmail,
                    empresa.CodigoIdentificador,
                ]);
                return result.rows[0] || null;
            }
            finally {
                client.release();
            }
        });
    }
    deleteEmpresaByCodigoIdentificador(codigoIdentificador) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('DELETE FROM Empresa WHERE "CodigoIdentificador" = $1', [codigoIdentificador]);
                return (result && result.rowCount && result.rowCount > 0) || false;
            }
            finally {
                client.release();
            }
        });
    }
}
exports.EmpresaService = EmpresaService;
