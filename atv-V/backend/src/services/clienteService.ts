import pool from '../config/db';
import { Cliente } from '../models/cliente';

export class ClienteService {
    public async getAllClientes(): Promise<Cliente[]> {
        const client = await pool.connect();

        try {
            const result = await client.query('SELECT * FROM Cliente');

            return result.rows as Cliente[];
        } finally {
            client.release();
        }
    }


    public async getClienteByPartialName(partialName: string): Promise<Cliente[]> {
        const client = await pool.connect();

        try {
            const result = await client.query(
                'SELECT * FROM Cliente WHERE "ClienteNome" ILIKE $1',
                [`%${partialName}%`]
            );

            return result.rows as Cliente[];
        } finally {
            client.release();
        }
    }


    public async getClienteByCPF(clienteCPF: string): Promise<Cliente | null> {
        const client = await pool.connect();

        try {
            const result = await client.query('SELECT * FROM Cliente WHERE "ClienteCPF" = $1', [
                clienteCPF,
            ]);

            return result.rows[0] || null;
        } finally {
            client.release();
        }
    }


    public async createCliente(cliente: Cliente): Promise<Cliente> {
        const client = await pool.connect();

        try {
            const result = await client.query(
                'INSERT INTO Cliente("ClienteID", "ClienteNome", "ClienteNomeSocial", "ClienteCPF", "ClienteCPFDataEmissao", "ClienteEmail", "ClienteDataCadastro", "EnderecoID") VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
                [
                    cliente.ClienteID,
                    cliente.ClienteNome,
                    cliente.ClienteNomeSocial,
                    cliente.ClienteCPF,
                    cliente.ClienteCPFDataEmissao,
                    cliente.ClienteEmail,
                    cliente.ClienteDataCadastro,
                    cliente.EnderecoID,
                ]
            );

            return result.rows[0] as Cliente;
        } finally {
            client.release();
        }
    }


    public async updateCliente(cliente: Cliente): Promise<Cliente | null> {
        const client = await pool.connect();

        try {
            const result = await client.query(
                'UPDATE Cliente SET "ClienteNome" = $1, "ClienteNomeSocial" = $2, "ClienteEmail" = $3, "EnderecoID" = $4 WHERE "ClienteCPF" = $5 RETURNING *',
                [
                    cliente.ClienteNome,
                    cliente.ClienteNomeSocial,
                    cliente.ClienteEmail,
                    cliente.EnderecoID,
                    cliente.ClienteCPF,
                ]
            );

            return result.rows[0] || null;
        } finally {
            client.release();
        }
    }


    public async deleteCliente(clienteCPF: string): Promise<boolean> {
        const client = await pool.connect();

        try {
            const result = await client.query('DELETE FROM Cliente WHERE "ClienteCPF" = $1', [
                clienteCPF,
            ]);

            return (result && result.rowCount && result.rowCount > 0) || false;
        } finally {
            client.release();
        }
    }
}
