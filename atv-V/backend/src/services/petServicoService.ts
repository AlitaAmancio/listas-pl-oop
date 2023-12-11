import pool from '../config/db';
import { PetServico } from '../models/petServico';

export class PetServicoService {
  public async getAllPetServicos(): Promise<PetServico[]> {
    const client = await pool.connect();

    try {
      const result = await client.query('SELECT * FROM PetServico');

      return result.rows as PetServico[];
    } finally {
      client.release();
    }
  }

  public async getPetServicoById(petServicoId: string): Promise<PetServico | null> {
    const client = await pool.connect();

    try {
      const result = await client.query('SELECT * FROM PetServico WHERE "PetServicoID" = $1', [petServicoId]);

      return result.rows[0] || null;
    } finally {
      client.release();
    }
  }

  public async createPetServico(petServico: PetServico): Promise<PetServico> {
    const client = await pool.connect();

    try {
      const result = await client.query(
        'INSERT INTO PetServico("PetServicoID", "PetID", "ServicoID") VALUES ($1, $2, $3) RETURNING *',
        [petServico.PetServicoID, petServico.PetID, petServico.ServicoID]
      );

      return result.rows[0] as PetServico;
    } finally {
      client.release();
    }
  }

  public async updatePetServico(petServico: PetServico): Promise<PetServico | null> {
    const client = await pool.connect();

    try {
      const result = await client.query(
        'UPDATE PetServico SET "PetID" = $1, "ServicoID" = $2 WHERE "PetServicoID" = $3 RETURNING *',
        [petServico.PetID, petServico.ServicoID, petServico.PetServicoID]
      );

      return result.rows[0] || null;
    } finally {
      client.release();
    }
  }

  public async deletePetServico(petServicoId: string): Promise<boolean> {
    const client = await pool.connect();

    try {
      const result = await client.query('DELETE FROM PetServico WHERE "PetServicoID" = $1', [petServicoId]);

      return (result && result.rowCount && result.rowCount > 0) || false;
    } finally {
      client.release();
    }
  }
}
