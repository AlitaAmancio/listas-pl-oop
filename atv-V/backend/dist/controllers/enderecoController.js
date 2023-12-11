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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnderecoController = void 0;
const enderecoService_1 = require("../../../services/enderecoService");
class EnderecoController {
    constructor() {
        this.enderecoService = new enderecoService_1.EnderecoService();
    }
    getAllEnderecos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const enderecos = yield this.enderecoService.getAllEnderecos();
                res.status(200).json(enderecos);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
    getEnderecoById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const enderecoId = req.params.id;
            try {
                const endereco = yield this.enderecoService.getEnderecoById(enderecoId);
                if (endereco) {
                    res.status(200).json(endereco);
                }
                else {
                    res.status(404).send('Endereço não encontrado');
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
    createEndereco(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const enderecoData = req.body;
            try {
                const endereco = yield this.enderecoService.createEndereco(enderecoData);
                res.status(201).json(endereco);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
    updateEndereco(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const enderecoId = req.params.id;
            const enderecoData = req.body;
            try {
                const endereco = yield this.enderecoService.updateEndereco(Object.assign(Object.assign({}, enderecoData), { EnderecoID: enderecoId }));
                if (endereco) {
                    res.status(200).json(endereco);
                }
                else {
                    res.status(404).send('Endereço não encontrado');
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
    deleteEndereco(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const enderecoId = req.params.id;
            try {
                const success = yield this.enderecoService.deleteEndereco(enderecoId);
                if (success) {
                    res.status(204).send();
                }
                else {
                    res.status(404).send('Endereço não encontrado');
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
    getEnderecoByCodigoPostal(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const codigoPostal = req.params.codigoPostal;
            try {
                const endereco = yield this.enderecoService.getEnderecoByCodigoPostal(codigoPostal);
                if (endereco) {
                    res.status(200).json(endereco);
                }
                else {
                    res.status(404).send('Endereço não encontrado');
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
}
exports.EnderecoController = EnderecoController;
