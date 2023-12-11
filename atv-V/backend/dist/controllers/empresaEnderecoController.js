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
exports.EmpresaEnderecoController = void 0;
const empresaEnderecoService_1 = require("../../../services/empresaEnderecoService");
class EmpresaEnderecoController {
    constructor() {
        this.empresaEnderecoService = new empresaEnderecoService_1.EmpresaEnderecoService();
    }
    getAllEmpresaEnderecos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const empresaEnderecos = yield this.empresaEnderecoService.getAllEmpresaEnderecos();
                res.status(200).json(empresaEnderecos);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
    getEmpresaEnderecoById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const empresaEnderecoId = req.params.id;
            try {
                const empresaEndereco = yield this.empresaEnderecoService.getEmpresaEnderecoById(empresaEnderecoId);
                if (empresaEndereco) {
                    res.status(200).json(empresaEndereco);
                }
                else {
                    res.status(404).send('EmpresaEndereco não encontrado');
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
    createEmpresaEndereco(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const empresaEnderecoData = req.body;
            try {
                const empresaEndereco = yield this.empresaEnderecoService.createEmpresaEndereco(empresaEnderecoData);
                res.status(201).json(empresaEndereco);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
    updateEmpresaEndereco(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const empresaEnderecoId = req.params.id;
            const empresaEnderecoData = req.body;
            try {
                const empresaEndereco = yield this.empresaEnderecoService.updateEmpresaEndereco(Object.assign(Object.assign({}, empresaEnderecoData), { EmpresaEnderecoID: empresaEnderecoId }));
                if (empresaEndereco) {
                    res.status(200).json(empresaEndereco);
                }
                else {
                    res.status(404).send('EmpresaEndereco não encontrado');
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
    deleteEmpresaEndereco(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const empresaEnderecoId = req.params.id;
            try {
                const success = yield this.empresaEnderecoService.deleteEmpresaEndereco(empresaEnderecoId);
                if (success) {
                    res.status(204).send();
                }
                else {
                    res.status(404).send('EmpresaEndereco não encontrado');
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
}
exports.EmpresaEnderecoController = EmpresaEnderecoController;
