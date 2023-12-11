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
exports.ClienteTelefoneController = void 0;
const clienteTelefoneService_1 = require("../../../services/clienteTelefoneService");
class ClienteTelefoneController {
    constructor() {
        this.clienteTelefoneService = new clienteTelefoneService_1.ClienteTelefoneService();
    }
    getAllClienteTelefones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clienteTelefones = yield this.clienteTelefoneService.getAllClienteTelefones();
                res.status(200).json(clienteTelefones);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
    getClienteTelefoneById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const clienteTelefoneId = req.params.id;
            try {
                const clienteTelefone = yield this.clienteTelefoneService.getClienteTelefoneById(clienteTelefoneId);
                if (clienteTelefone) {
                    res.status(200).json(clienteTelefone);
                }
                else {
                    res.status(404).send('Telefone de cliente não encontrado');
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
    createClienteTelefone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const clienteTelefoneData = req.body;
            try {
                const clienteTelefone = yield this.clienteTelefoneService.createClienteTelefone(clienteTelefoneData);
                res.status(201).json(clienteTelefone);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
    updateClienteTelefone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const clienteTelefoneId = req.params.id;
            const clienteTelefoneData = req.body;
            try {
                const clienteTelefone = yield this.clienteTelefoneService.updateClienteTelefone(Object.assign(Object.assign({}, clienteTelefoneData), { ClienteTelefoneID: clienteTelefoneId }));
                if (clienteTelefone) {
                    res.status(200).json(clienteTelefone);
                }
                else {
                    res.status(404).send('Telefone de cliente não encontrado');
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
    deleteClienteTelefone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const clienteTelefoneId = req.params.id;
            try {
                const success = yield this.clienteTelefoneService.deleteClienteTelefone(clienteTelefoneId);
                if (success) {
                    res.status(204).send();
                }
                else {
                    res.status(404).send('Telefone de cliente não encontrado');
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
}
exports.ClienteTelefoneController = ClienteTelefoneController;
