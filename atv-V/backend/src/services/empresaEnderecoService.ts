import pool from '../config/db';
import { EmpresaEndereco } from '../models/empresaEndereco';

export class EmpresaEnderecoService {
    public async getAllEmpresaEnderecos(): Promise<EmpresaEndereco[]> {
        const client = await pool.connect();

        try {
            const result = await client.query('SELECT * FROM EmpresaEndereco');

            return result.rows as EmpresaEndereco[];
        } finally {
            client.release();
        }
    }


    public async getEmpresaEnderecoById(empresaEnderecoId: string): Promise<EmpresaEndereco | null> {
        const client = await pool.connect();

        try {
            const result = await client.query('SELECT * FROM EmpresaEndereco WHERE "EmpresaEnderecoID" = $1', [empresaEnderecoId]);

            return result.rows[0] || null;
        } finally {
            client.release();
        }
    }


    public async createEmpresaEndereco(empresaEndereco: EmpresaEndereco): Promise<EmpresaEndereco> {
        const client = await pool.connect();

        try {
            const result = await client.query(
                'INSERT INTO EmpresaEndereco("EmpresaEnderecoID", "EmpresaID", "EnderecoID", "CodigoIdentificador") VALUES ($1, $2, $3, $4) RETURNING *',
                [empresaEndereco.EmpresaEnderecoID, empresaEndereco.EmpresaID, empresaEndereco.EnderecoID, empresaEndereco.CodigoIdentificador]
            );

            return result.rows[0] as EmpresaEndereco;
        } finally {
            client.release();
        }
    }


    public async updateEmpresaEndereco(empresaEndereco: EmpresaEndereco): Promise<EmpresaEndereco | null> {
        const client = await pool.connect();

        try {
            const result = await client.query(
                'UPDATE EmpresaEndereco SET "EmpresaID" = $1, "EnderecoID" = $2, "CodigoIdentificador" = $3 WHERE "EmpresaEnderecoID" = $4 RETURNING *',
                [empresaEndereco.EmpresaID, empresaEndereco.EnderecoID, empresaEndereco.CodigoIdentificador, empresaEndereco.EmpresaEnderecoID]
            );

            return result.rows[0] || null;
        } finally {
            client.release();
        }
    }


    public async deleteEmpresaEndereco(empresaEnderecoId: string): Promise<boolean> {
        const client = await pool.connect();

        try {
            const result = await client.query('DELETE FROM EmpresaEndereco WHERE "EmpresaEnderecoID" = $1', [empresaEnderecoId]);

            return (result && result.rowCount && result.rowCount > 0) || false;
        } finally {
            client.release();
        }
    }
}
