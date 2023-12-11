"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cliente {
    constructor(nome, nomeSocial, cpf) {
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.cpf = cpf;
        this.rgs = [];
        this.telefones = [];
        this.dataCadastro = new Date();
        this.produtosConsumidos = [];
        this.servicosConsumidos = [];
        this.pets = [];
        this.valorGasto = 0;
        this.quantidadeTotalConsumida = 0;
    }
    get getCpf() {
        return this.cpf;
    }
    get getRgs() {
        return this.rgs;
    }
    get getTelefones() {
        return this.telefones;
    }
    get getDataCadastro() {
        return this.dataCadastro;
    }
    get getProdutosConsumidos() {
        return this.produtosConsumidos;
    }
    get getServicosConsumidos() {
        return this.servicosConsumidos;
    }
    get getPets() {
        return this.pets;
    }
    // ᨆ PET ᨆ
    adicionarPet(pet) {
        this.pets.push(pet);
    }
    removerPet(pet) {
        const index = this.pets.indexOf(pet);
        if (index !== -1) {
            this.pets.splice(index, 1);
        }
    }
    // ᨆ RG ᨆ
    adicionarRG(rg) {
        this.rgs.push(rg);
    }
    removerRG(rg) {
        const index = this.rgs.indexOf(rg);
        if (index !== -1) {
            this.rgs.splice(index, 1);
        }
    }
    // ᨆ TELEFONE ᨆ
    adicionarTelefone(telefone) {
        this.telefones.push(telefone);
    }
    removerTelefone(telefone) {
        const index = this.telefones.indexOf(telefone);
        if (index !== -1) {
            this.telefones.splice(index, 1);
        }
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
exports.default = Cliente;
