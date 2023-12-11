import pool from '../config/db';
import { ClienteTelefone } from '../models/clienteTelefone';

export class ClienteTelefoneService {
  public async getAllClienteTelefones(): Promise<ClienteTelefone[]> {
    const client = await pool.connect();

    try {
      const result = await client.query('SELECT * FROM ClienteTelefone');
      return result.rows as ClienteTelefone[];
    } finally {
      client.release();
    }
  }


  public async getClienteTelefoneById(clienteTelefoneId: string): Promise<ClienteTelefone | null> {
    const client = await pool.connect();

    try {
      const result = await client.query('SELECT * FROM ClienteTelefone WHERE "ClienteTelefoneID" = $1', [clienteTelefoneId]);
      return result.rows[0] || null;
    } finally {
      client.release();
    }
  }


  public async createClienteTelefone(clienteTelefone: ClienteTelefone): Promise<ClienteTelefone> {
    const client = await pool.connect();

    try {
      const result = await client.query(
        'INSERT INTO ClienteTelefone("ClienteTelefoneID", "ClienteID", "TelefoneDDD", "TelefoneNumero") VALUES ($1, $2, $3, $4) RETURNING *',
        [clienteTelefone.ClienteTelefoneID, clienteTelefone.ClienteID, clienteTelefone.TelefoneDDD, clienteTelefone.TelefoneNumero]
      );
      return result.rows[0] as ClienteTelefone;
    } finally {
      client.release();
    }
  }


  public async updateClienteTelefone(clienteTelefone: ClienteTelefone): Promise<ClienteTelefone | null> {
    const client = await pool.connect();

    try {
      const result = await client.query(
        'UPDATE ClienteTelefone SET "TelefoneDDD" = $1, "TelefoneNumero" = $2 WHERE "ClienteTelefoneID" = $3 RETURNING *',
        [clienteTelefone.TelefoneDDD, clienteTelefone.TelefoneNumero, clienteTelefone.ClienteTelefoneID]
      );
      return result.rows[0] || null;
    } finally {
      client.release();
    }
  }

  
  public async deleteClienteTelefone(clienteTelefoneId: string): Promise<boolean> {
    const client = await pool.connect();

    try {
      const result = await client.query('DELETE FROM ClienteTelefone WHERE "ClienteTelefoneID" = $1', [clienteTelefoneId]);
      return (result && result.rowCount && result.rowCount > 0) || false;
    } finally {
      client.release();
    }
  }
}
