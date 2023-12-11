import pool from '../config/db';
import { ClienteRG } from '../models/clienteRg';

export class ClienteRGService {
  public async getAllClienteRGs(): Promise<ClienteRG[]> {
    const client = await pool.connect();

    try {
      const result = await client.query('SELECT * FROM ClienteRG');

      return result.rows as ClienteRG[];
    } finally {
      client.release();
    }
  }

  public async getClienteRGById(rgId: string): Promise<ClienteRG | null> {
    const client = await pool.connect();

    try {
      const result = await client.query('SELECT * FROM ClienteRG WHERE "RG_ID" = $1', [rgId]);

      return result.rows[0] || null;
    } finally {
      client.release();
    }
  }

  public async createClienteRG(clienteRG: ClienteRG): Promise<ClienteRG> {
    const client = await pool.connect();

    try {
      const result = await client.query(
        'INSERT INTO ClienteRG("RG_ID", "ClienteID", "RGNumero", "RGDataEmissao") VALUES ($1, $2, $3, $4) RETURNING *',
        [clienteRG.RG_ID, clienteRG.ClienteID, clienteRG.RGNumero, clienteRG.RGDataEmissao]
      );

      return result.rows[0] as ClienteRG;
    } finally {
      client.release();
    }
  }

  public async updateClienteRG(clienteRG: ClienteRG): Promise<ClienteRG | null> {
    const client = await pool.connect();

    try {
      const result = await client.query(
        'UPDATE ClienteRG SET "RGNumero" = $1, "RGDataEmissao" = $2 WHERE "RG_ID" = $3 RETURNING *',
        [clienteRG.RGNumero, clienteRG.RGDataEmissao, clienteRG.RG_ID]
      );

      return result.rows[0] || null;
    } finally {
      client.release();
    }
  }

  public async deleteClienteRG(rgId: string): Promise<boolean> {
    const client = await pool.connect();

    try {
      const result = await client.query('DELETE FROM ClienteRG WHERE "RG_ID" = $1', [rgId]);

      return (result && result.rowCount && result.rowCount > 0) || false;
    } finally {
      client.release();
    }
  }
}
