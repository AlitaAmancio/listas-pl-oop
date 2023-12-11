import pool from '../backend/src/config/db';
import { Servico } from '../backend/src/models/servico';

export class ServicoService {
    public async getAllServicos(): Promise<Servico[]> {
        const client = await pool.connect();

        try {
            const result = await client.query('SELECT * FROM Servico');

            return result.rows as Servico[];
        } finally {
            client.release();
        }
    }


    public async getServicosByPartialName(partialName: string): Promise<Servico[]> {
        const client = await pool.connect();

        try {
            const result = await client.query(
                'SELECT * FROM Servico WHERE "ServicoNome" ILIKE $1',
                [`%${partialName}%`]
            );

            return result.rows as Servico[];
        } finally {
            client.release();
        }
    }


    public async getServicoById(servicoId: string): Promise<Servico | null> {
        const client = await pool.connect();

        try {
            const result = await client.query('SELECT * FROM Servico WHERE "ServicoID" = $1', [servicoId]);

            return result.rows[0] || null;
        } finally {
            client.release();
        }
    }


    public async createServico(servico: Servico): Promise<Servico> {
        const client = await pool.connect();

        try {
            const result = await client.query(
                'INSERT INTO Servico("ServicoID", "ServicoNome", "ServicoPreco", "ServicoDescricao") VALUES ($1, $2, $3, $4) RETURNING *',
                [servico.ServicoID, servico.ServicoNome, servico.ServicoPreco, servico.ServicoDescricao]
            );

            return result.rows[0] as Servico;
        } finally {
            client.release();
        }
    }


    public async updateServico(servico: Servico): Promise<Servico | null> {
        const client = await pool.connect();

        try {
            const result = await client.query(
                'UPDATE Servico SET "ServicoNome" = $1, "ServicoPreco" = $2, "ServicoDescricao" = $3 WHERE "ServicoID" = $4 RETURNING *',
                [servico.ServicoNome, servico.ServicoPreco, servico.ServicoDescricao, servico.ServicoID]
            );

            return result.rows[0] || null;
        } finally {
            client.release();
        }
    }


    public async deleteServico(servicoId: string): Promise<boolean> {
        const client = await pool.connect();

        try {
            const result = await client.query('DELETE FROM Servico WHERE "ServicoID" = $1', [servicoId]);

            return (result && result.rowCount && result.rowCount > 0) || false;
        } finally {
            client.release();
        }
    }


}
