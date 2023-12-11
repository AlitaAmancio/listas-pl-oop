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
exports.PetServicoService = void 0;
const db_1 = __importDefault(require("../config/db"));
class PetServicoService {
    getAllPetServicos() {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('SELECT * FROM PetServico');
                return result.rows;
            }
            finally {
                client.release();
            }
        });
    }
    getPetServicoById(petServicoId) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('SELECT * FROM PetServico WHERE "PetServicoID" = $1', [petServicoId]);
                return result.rows[0] || null;
            }
            finally {
                client.release();
            }
        });
    }
    createPetServico(petServico) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('INSERT INTO PetServico("PetServicoID", "PetID", "ServicoID") VALUES ($1, $2, $3) RETURNING *', [petServico.PetServicoID, petServico.PetID, petServico.ServicoID]);
                return result.rows[0];
            }
            finally {
                client.release();
            }
        });
    }
    updatePetServico(petServico) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('UPDATE PetServico SET "PetID" = $1, "ServicoID" = $2 WHERE "PetServicoID" = $3 RETURNING *', [petServico.PetID, petServico.ServicoID, petServico.PetServicoID]);
                return result.rows[0] || null;
            }
            finally {
                client.release();
            }
        });
    }
    deletePetServico(petServicoId) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('DELETE FROM PetServico WHERE "PetServicoID" = $1', [petServicoId]);
                return (result && result.rowCount && result.rowCount > 0) || false;
            }
            finally {
                client.release();
            }
        });
    }
}
exports.PetServicoService = PetServicoService;
