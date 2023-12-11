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
exports.ClienteRGController = void 0;
const clienteRGService_1 = require("../../../services/clienteRGService");
class ClienteRGController {
    constructor() {
        this.clienteRGService = new clienteRGService_1.ClienteRGService();
    }
    getAllClienteRGs(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clienteRGs = yield this.clienteRGService.getAllClienteRGs();
                res.status(200).json(clienteRGs);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
    getClienteRGById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const clienteRGId = req.params.id;
            try {
                const clienteRG = yield this.clienteRGService.getClienteRGById(clienteRGId);
                if (clienteRG) {
                    res.status(200).json(clienteRG);
                }
                else {
                    res.status(404).send('ClienteRG não encontrado');
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
    createClienteRG(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const clienteRGData = req.body;
            try {
                const clienteRG = yield this.clienteRGService.createClienteRG(clienteRGData);
                res.status(201).json(clienteRG);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
    updateClienteRG(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const clienteRGId = req.params.id;
            const clienteRGData = req.body;
            try {
                const clienteRG = yield this.clienteRGService.updateClienteRG(Object.assign(Object.assign({}, clienteRGData), { RG_ID: clienteRGId }));
                if (clienteRG) {
                    res.status(200).json(clienteRG);
                }
                else {
                    res.status(404).send('ClienteRG não encontrado');
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
    deleteClienteRG(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const clienteRGId = req.params.id;
            try {
                const success = yield this.clienteRGService.deleteClienteRG(clienteRGId);
                if (success) {
                    res.status(204).send();
                }
                else {
                    res.status(404).send('ClienteRG não encontrado');
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
}
exports.ClienteRGController = ClienteRGController;
