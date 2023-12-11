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
exports.EnderecoService = void 0;
const db_1 = __importDefault(require("../config/db"));
class EnderecoService {
    getAllEnderecos() {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('SELECT * FROM Endereco');
                return result.rows;
            }
            finally {
                client.release();
            }
        });
    }
    getEnderecoById(enderecoId) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('SELECT * FROM Endereco WHERE "EnderecoID" = $1', [enderecoId]);
                return result.rows[0] || null;
            }
            finally {
                client.release();
            }
        });
    }
    createEndereco(endereco) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('INSERT INTO Endereco("EnderecoID", "Estado", "Cidade", "Bairro", "Rua", "Numero", "CodigoPostal", "InformacoesAdicionais") VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', [endereco.EnderecoID, endereco.Estado, endereco.Cidade, endereco.Bairro, endereco.Rua, endereco.Numero, endereco.CodigoPostal, endereco.InformacoesAdicionais]);
                return result.rows[0];
            }
            finally {
                client.release();
            }
        });
    }
    updateEndereco(endereco) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('UPDATE Endereco SET "Estado" = $1, "Cidade" = $2, "Bairro" = $3, "Rua" = $4, "Numero" = $5, "CodigoPostal" = $6, "InformacoesAdicionais" = $7 WHERE "EnderecoID" = $8 RETURNING *', [endereco.Estado, endereco.Cidade, endereco.Bairro, endereco.Rua, endereco.Numero, endereco.CodigoPostal, endereco.InformacoesAdicionais, endereco.EnderecoID]);
                return result.rows[0] || null;
            }
            finally {
                client.release();
            }
        });
    }
    deleteEndereco(enderecoId) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('DELETE FROM Endereco WHERE "EnderecoID" = $1', [enderecoId]);
                return (result && result.rowCount && result.rowCount > 0) || false;
            }
            finally {
                client.release();
            }
        });
    }
    getEnderecoByCodigoPostal(codigoPostal) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('SELECT * FROM Endereco WHERE "CodigoPostal" = $1', [codigoPostal]);
                return result.rows[0] || null;
            }
            finally {
                client.release();
            }
        });
    }
}
exports.EnderecoService = EnderecoService;
