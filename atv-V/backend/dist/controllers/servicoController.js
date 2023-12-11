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
exports.ServicoController = void 0;
const servicoService_1 = require("../../../services/servicoService");
class ServicoController {
    constructor() {
        this.getAllServicos = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const servicos = yield this.servicoService.getAllServicos();
                res.status(200).json(servicos);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
        this.getServicosByPartialName = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const partialName = req.params.partialName;
            try {
                const servicos = yield this.servicoService.getServicosByPartialName(partialName);
                res.status(200).json(servicos);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
        this.getServicoById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const servicoId = req.params.servicoId;
            try {
                const servico = yield this.servicoService.getServicoById(servicoId);
                if (servico) {
                    res.status(200).json(servico);
                }
                else {
                    res.status(404).send('Serviço não encontrado');
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
        this.createServico = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const novoServico = req.body;
            try {
                const servicoCriado = yield this.servicoService.createServico(novoServico);
                res.status(201).json(servicoCriado);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
        this.updateServico = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const servicoId = req.params.servicoId;
            const dadosAtualizados = req.body;
            try {
                const servicoAtualizado = yield this.servicoService.updateServico(Object.assign(Object.assign({}, dadosAtualizados), { ServicoID: servicoId }));
                if (servicoAtualizado) {
                    res.status(200).json(servicoAtualizado);
                }
                else {
                    res.status(404).send('Serviço não encontrado');
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
        this.deleteServico = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const servicoId = req.params.servicoId;
            try {
                const sucesso = yield this.servicoService.deleteServico(servicoId);
                if (sucesso) {
                    res.status(204).send();
                }
                else {
                    res.status(404).send('Serviço não encontrado');
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
            }
        });
        this.servicoService = new servicoService_1.ServicoService();
    }
}
exports.ServicoController = ServicoController;
