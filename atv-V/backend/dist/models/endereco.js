"use strict";
// export interface Endereco {
//     EnderecoID: string;
//     Estado: string;
//     Cidade: string;
//     Bairro: string;
//     Rua: string;
//     Numero: string;
//     CodigoPostal: string;
//     InformacoesAdicionais?: string | null;
//   }
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endereco = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("./sequelize");
class Endereco extends sequelize_1.Model {
}
exports.Endereco = Endereco;
Endereco.init({
    EnderecoID: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_2.sequelize.literal('uuid_generate_v4()'),
        allowNull: false,
    },
    Estado: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    Cidade: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    Bairro: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    Rua: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    Numero: {
        type: sequelize_1.DataTypes.STRING(10),
        allowNull: false,
    },
    CodigoPostal: {
        type: sequelize_1.DataTypes.STRING(10),
        allowNull: false,
    },
    InformacoesAdicionais: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true,
    },
}, {
    sequelize: sequelize_2.sequelize,
    modelName: 'Endereco',
    tableName: 'Endereco',
    timestamps: false, // Para desativar a criação automática de campos createdAt e updatedAt
});
