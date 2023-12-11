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
exports.EmpresaController = void 0;
const empresaService_1 = require("../../../services/empresaService");
class EmpresaController {
    constructor() {
        this.empresaService = new empresaService_1.EmpresaService();
    }
    getAllEmpresas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const empresas = yield this.empresaService.getAllEmpresas();
                res.status(200).json(empresas);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
    getEmpresasByPartialName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const partialName = req.params.partialName;
            try {
                const empresas = yield this.empresaService.getEmpresasByPartialName(partialName);
                res.status(200).json(empresas);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
    getEmpresaById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const empresaId = req.params.id;
            try {
                const empresa = yield this.empresaService.getEmpresaById(empresaId);
                if (empresa) {
                    res.status(200).json(empresa);
                }
                else {
                    res.status(404).send('Empresa não encontrada');
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
    createEmpresa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const empresaData = req.body;
            try {
                const empresa = yield this.empresaService.createEmpresa(empresaData);
                res.status(201).json(empresa);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
    updateEmpresa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const empresaId = req.params.id;
            const empresaData = req.body;
            try {
                const empresa = yield this.empresaService.updateEmpresa(Object.assign(Object.assign({}, empresaData), { EmpresaID: empresaId }));
                if (empresa) {
                    res.status(200).json(empresa);
                }
                else {
                    res.status(404).send('Empresa não encontrada');
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
    deleteEmpresa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const empresaId = req.params.id;
            try {
                const success = yield this.empresaService.deleteEmpresa(empresaId);
                if (success) {
                    res.status(204).send();
                }
                else {
                    res.status(404).send('Empresa não encontrada');
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
    getEmpresaByCodigoIdentificador(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const codigoIdentificador = req.params.codigoIdentificador;
            try {
                const empresa = yield this.empresaService.getEmpresaByCodigoIdentificador(codigoIdentificador);
                if (empresa) {
                    res.status(200).json(empresa);
                }
                else {
                    res.status(404).send('Empresa não encontrada');
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
    updateEmpresaByCodigoIdentificador(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const codigoIdentificador = req.params.codigoIdentificador;
            const empresaData = req.body;
            try {
                const empresa = yield this.empresaService.updateEmpresaByCodigoIdentificador(Object.assign(Object.assign({}, empresaData), { CodigoIdentificador: codigoIdentificador }));
                if (empresa) {
                    res.status(200).json(empresa);
                }
                else {
                    res.status(404).send('Empresa não encontrada');
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
    deleteEmpresaByCodigoIdentificador(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const codigoIdentificador = req.params.codigoIdentificador;
            try {
                const success = yield this.empresaService.deleteEmpresaByCodigoIdentificador(codigoIdentificador);
                if (success) {
                    res.status(204).send();
                }
                else {
                    res.status(404).send('Empresa não encontrada');
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
    }
}
exports.EmpresaController = EmpresaController;
