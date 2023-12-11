import pool from '../config/db';
import { Endereco } from '../models/endereco';

export class EnderecoService {
  public async getAllEnderecos(): Promise<Endereco[]> {
    const client = await pool.connect();

    try {
      const result = await client.query('SELECT * FROM Endereco');

      return result.rows as Endereco[];
    } finally {
      client.release();
    }
  }


  public async getEnderecoById(enderecoId: string): Promise<Endereco | null> {
    const client = await pool.connect();

    try {
      const result = await client.query('SELECT * FROM Endereco WHERE "EnderecoID" = $1', [enderecoId]);

      return result.rows[0] || null;
    } finally {
      client.release();
    }
  }


  public async createEndereco(endereco: Endereco): Promise<Endereco> {
    const client = await pool.connect();

    try {
      const result = await client.query(
        'INSERT INTO Endereco("EnderecoID", "Estado", "Cidade", "Bairro", "Rua", "Numero", "CodigoPostal", "InformacoesAdicionais") VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
        [endereco.EnderecoID, endereco.Estado, endereco.Cidade, endereco.Bairro, endereco.Rua, endereco.Numero, endereco.CodigoPostal, endereco.InformacoesAdicionais]
      );

      return result.rows[0] as Endereco;
    } finally {
      client.release();
    }
  }


  public async updateEndereco(endereco: Endereco): Promise<Endereco | null> {
    const client = await pool.connect();

    try {
      const result = await client.query(
        'UPDATE Endereco SET "Estado" = $1, "Cidade" = $2, "Bairro" = $3, "Rua" = $4, "Numero" = $5, "CodigoPostal" = $6, "InformacoesAdicionais" = $7 WHERE "EnderecoID" = $8 RETURNING *',
        [endereco.Estado, endereco.Cidade, endereco.Bairro, endereco.Rua, endereco.Numero, endereco.CodigoPostal, endereco.InformacoesAdicionais, endereco.EnderecoID]
      );

      return result.rows[0] || null;
    } finally {
      client.release();
    }
  }


  public async deleteEndereco(enderecoId: string): Promise<boolean> {
    const client = await pool.connect();

    try {
      const result = await client.query('DELETE FROM Endereco WHERE "EnderecoID" = $1', [enderecoId]);

      return (result && result.rowCount && result.rowCount > 0) || false;
    } finally {
      client.release();
    }
  }


  public async getEnderecoByCodigoPostal(codigoPostal: string): Promise<Endereco | null> {
    const client = await pool.connect();

    try {
      const result = await client.query('SELECT * FROM Endereco WHERE "CodigoPostal" = $1', [codigoPostal]);

      return result.rows[0] || null;
    } finally {
      client.release();
    }
  }

}
