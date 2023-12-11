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
exports.EmpresaClienteController = void 0;
const empresaClienteService_1 = require("../../../services/empresaClienteService");
class EmpresaClienteController {
    constructor() {
        this.empresaClienteService = new empresaClienteService_1.EmpresaClienteService();
    }
    getAllEmpresasClientes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const empresasClientes = yield this.empresaClienteService.getAllEmpresasClientes();
                res.status(200).json(empresasClientes);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
    getEmpresaClienteById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { empresaId, clienteId } = req.params;
            try {
                const empresaCliente = yield this.empresaClienteService.getEmpresaClienteById(empresaId, clienteId);
                if (empresaCliente) {
                    res.status(200).json(empresaCliente);
                }
                else {
                    res.status(404).send('Relação Empresa-Cliente não encontrada');
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
    createEmpresaCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const empresaClienteData = req.body;
            try {
                const empresaCliente = yield this.empresaClienteService.createEmpresaCliente(empresaClienteData);
                res.status(201).json(empresaCliente);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
    updateEmpresaCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { empresaId, clienteId } = req.params;
            const empresaClienteData = req.body;
            try {
                const empresaCliente = yield this.empresaClienteService.updateEmpresaCliente(Object.assign(Object.assign({}, empresaClienteData), { EmpresaID: empresaId, ClienteID: clienteId }));
                if (empresaCliente) {
                    res.status(200).json(empresaCliente);
                }
                else {
                    res.status(404).send('Relação Empresa-Cliente não encontrada');
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
    deleteEmpresaCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { empresaId, clienteId } = req.params;
            try {
                const success = yield this.empresaClienteService.deleteEmpresaCliente(empresaId, clienteId);
                if (success) {
                    res.status(204).send();
                }
                else {
                    res.status(404).send('Relação Empresa-Cliente não encontrada');
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
}
exports.EmpresaClienteController = EmpresaClienteController;
