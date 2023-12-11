"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
const rg_1 = __importDefault(require("../../modelo/rg"));
function cadastrarRG(cliente) {
    let entrada = new entrada_1.default();
    let valorRG = entrada.receberTexto(`• Por favor, informe o número do RG: `);
    let dataRG = entrada.receberTexto(`• Por gentileza, informe a data de emissão do RG (no formato dd/mm/yyyy): `);
    let partesDataRG = dataRG.split('/');
    let anoRG = new Number(partesDataRG[2].valueOf()).valueOf();
    let mesRG = new Number(partesDataRG[1].valueOf()).valueOf();
    let diaRG = new Number(partesDataRG[0].valueOf()).valueOf();
    let dataEmissaoRG = new Date(anoRG, mesRG, diaRG);
    let rg = new rg_1.default(valorRG, dataEmissaoRG);
    cliente.adicionarRG(rg);
}
exports.default = cadastrarRG;
