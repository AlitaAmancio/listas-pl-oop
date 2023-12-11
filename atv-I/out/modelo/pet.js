"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pet {
    constructor(nome, raca, sexo, especie) {
        this.nome = nome;
        this.raca = raca;
        this.sexo = sexo;
        this.especie = especie;
        this.produtosConsumidos = [];
        this.servicosConsumidos = [];
        this.quantidadeTotalConsumida = 0;
    }
    get getNome() {
        return this.nome;
    }
    get getRaca() {
        return this.raca;
    }
    get getSexo() {
        return this.sexo;
    }
    get getEspecie() {
        return this.especie;
    }
    get getProdutosConsumidos() {
        return this.produtosConsumidos;
    }
    get getServicosConsumidos() {
        return this.servicosConsumidos;
    }
    // ᨆ PET ᨆ
    setNome(nome) {
        this.nome = nome;
    }
    setEspecie(especie) {
        this.especie = especie;
    }
    setRaca(raca) {
        this.raca = raca;
    }
    setSexo(sexo) {
        this.sexo = sexo;
    }
    // ᨆ PRODUTO ᨆ
    consumirProduto(produto) {
        this.produtosConsumidos.push(produto);
    }
    // ᨆ SERVIÇO ᨆ
    solicitarServico(servico) {
        this.servicosConsumidos.push(servico);
    }
}
exports.default = Pet;
