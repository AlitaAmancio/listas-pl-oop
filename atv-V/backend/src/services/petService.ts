import pool from '../backend/src/config/db';
import { Pet } from '../backend/src/models/pet';

export class PetService {
  public async getAllPets(): Promise<Pet[]> {
    const client = await pool.connect();

    try {
      const result = await client.query('SELECT * FROM Pets');

      return result.rows as Pet[];
    } finally {
      client.release();
    }
  }

  public async getPetById(petId: string): Promise<Pet | null> {
    const client = await pool.connect();

    try {
      const result = await client.query('SELECT * FROM Pets WHERE "PetID" = $1', [petId]);

      return result.rows[0] || null;
    } finally {
      client.release();
    }
  }

  public async createPet(pet: Pet): Promise<Pet> {
    const client = await pool.connect();

    try {
      const result = await client.query(
        'INSERT INTO Pets("PetID", "ClienteID", "PetNome", "PetRaca", "PetEspecie", "PetSexo") VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [pet.PetID, pet.ClienteID, pet.PetNome, pet.PetRaca, pet.PetEspecie, pet.PetSexo]
      );

      return result.rows[0] as Pet;
    } finally {
      client.release();
    }
  }

  public async updatePet(pet: Pet): Promise<Pet | null> {
    const client = await pool.connect();

    try {
      const result = await client.query(
        'UPDATE Pets SET "PetNome" = $1, "PetRaca" = $2, "PetEspecie" = $3, "PetSexo" = $4 WHERE "PetID" = $5 RETURNING *',
        [pet.PetNome, pet.PetRaca, pet.PetEspecie, pet.PetSexo, pet.PetID]
      );

      return result.rows[0] || null;
    } finally {
      client.release();
    }
  }

  public async deletePet(petId: string): Promise<boolean> {
    const client = await pool.connect();

    try {
      const result = await client.query('DELETE FROM Pets WHERE "PetID" = $1', [petId]);

      return (result && result.rowCount && result.rowCount > 0) || false;
    } finally {
      client.release();
    }
  }
}
