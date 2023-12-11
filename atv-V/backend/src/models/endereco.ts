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

import { DataTypes, Model } from 'sequelize';
import { sequelize } from './sequelize';

class Endereco extends Model {
  public EnderecoID!: string;
  public Estado!: string;
  public Cidade!: string;
  public Bairro!: string;
  public Rua!: string;
  public Numero!: string;
  public CodigoPostal!: string;
  public InformacoesAdicionais!: string | null;
}

Endereco.init(
  {
    EnderecoID: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: sequelize.literal('uuid_generate_v4()'),
      allowNull: false,
    },
    Estado: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    Cidade: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    Bairro: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    Rua: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    Numero: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    CodigoPostal: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    InformacoesAdicionais: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Endereco',
    tableName: 'Endereco', // O nome da tabela no banco de dados
    timestamps: false, // Para desativar a criação automática de campos createdAt e updatedAt
  }
);

export { Endereco };
