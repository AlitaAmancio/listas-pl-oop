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
exports.PetService = void 0;
const db_1 = __importDefault(require("../backend/src/config/db"));
class PetService {
    getAllPets() {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('SELECT * FROM Pets');
                return result.rows;
            }
            finally {
                client.release();
            }
        });
    }
    getPetById(petId) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('SELECT * FROM Pets WHERE "PetID" = $1', [petId]);
                return result.rows[0] || null;
            }
            finally {
                client.release();
            }
        });
    }
    createPet(pet) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('INSERT INTO Pets("PetID", "ClienteID", "PetNome", "PetRaca", "PetEspecie", "PetSexo") VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [pet.PetID, pet.ClienteID, pet.PetNome, pet.PetRaca, pet.PetEspecie, pet.PetSexo]);
                return result.rows[0];
            }
            finally {
                client.release();
            }
        });
    }
    updatePet(pet) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('UPDATE Pets SET "PetNome" = $1, "PetRaca" = $2, "PetEspecie" = $3, "PetSexo" = $4 WHERE "PetID" = $5 RETURNING *', [pet.PetNome, pet.PetRaca, pet.PetEspecie, pet.PetSexo, pet.PetID]);
                return result.rows[0] || null;
            }
            finally {
                client.release();
            }
        });
    }
    deletePet(petId) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield db_1.default.connect();
            try {
                const result = yield client.query('DELETE FROM Pets WHERE "PetID" = $1', [petId]);
                return (result && result.rowCount && result.rowCount > 0) || false;
            }
            finally {
                client.release();
            }
        });
    }
}
exports.PetService = PetService;
