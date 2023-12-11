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
exports.ClienteController = void 0;
const clienteService_1 = require("../../../services/clienteService");
class ClienteController {
    constructor() {
        this.getAllClientes = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const clientes = yield this.clienteService.getAllClientes();
                res.status(200).json(clientes);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
        this.getClientesByPartialName = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const partialName = req.params.partialName;
                const clientes = yield this.clienteService.getClienteByPartialName(partialName);
                res.status(200).json(clientes);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
        this.getClienteByCPF = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const clienteCPF = req.params.clienteCPF;
                const cliente = yield this.clienteService.getClienteByCPF(clienteCPF);
                if (cliente) {
                    res.status(200).json(cliente);
                }
                else {
                    res.status(404).send('Cliente não encontrado');
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
        this.createCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const cliente = req.body;
                const newCliente = yield this.clienteService.createCliente(cliente);
                res.status(201).json(newCliente);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
        this.updateCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const cliente = req.body;
                const updatedCliente = yield this.clienteService.updateCliente(cliente);
                if (updatedCliente) {
                    res.status(200).json(updatedCliente);
                }
                else {
                    res.status(404).send('Cliente não encontrado');
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
        this.deleteCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const clienteCPF = req.params.clienteCPF;
                const deleted = yield this.clienteService.deleteCliente(clienteCPF);
                if (deleted) {
                    res.status(204).send();
                }
                else {
                    res.status(404).send('Cliente não encontrado');
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
        this.clienteService = new clienteService_1.ClienteService();
    }
}
exports.ClienteController = ClienteController;
const clienteController = new ClienteController();
exports.default = clienteController;
