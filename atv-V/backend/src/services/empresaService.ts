import pool from '../config/db';
import { Empresa } from '../models/empresa';

export class EmpresaService {
    public async getAllEmpresas(): Promise<Empresa[]> {
        const client = await pool.connect();

        try {
            const result = await client.query('SELECT * FROM Empresa');

            return result.rows as Empresa[];
        } finally {
            client.release();
        }
    }


    public async getEmpresasByPartialName(partialName: string): Promise<Empresa[]> {
        const client = await pool.connect();

        try {
            const result = await client.query(
                'SELECT * FROM Empresa WHERE "EmpresaNome" ILIKE $1',
                [`%${partialName}%`]
            );

            return result.rows as Empresa[];
        } finally {
            client.release();
        }
    }


    public async getEmpresaById(empresaId: string): Promise<Empresa | null> {
        const client = await pool.connect();

        try {
            const result = await client.query('SELECT * FROM Empresa WHERE "EmpresaID" = $1', [empresaId]);

            return result.rows[0] || null;
        } finally {
            client.release();
        }
    }


    public async createEmpresa(empresa: Empresa): Promise<Empresa> {
        const client = await pool.connect();

        try {
            const result = await client.query(
                'INSERT INTO Empresa("EmpresaID", "CodigoIdentificador", "EmpresaNome", "EmpresaDescricao", "EmpresaEmail") VALUES ($1, $2, $3, $4, $5) RETURNING *',
                [
                    empresa.EmpresaID,
                    empresa.CodigoIdentificador,
                    empresa.EmpresaNome,
                    empresa.EmpresaDescricao,
                    empresa.EmpresaEmail,
                ]
            );

            return result.rows[0] as Empresa;
        } finally {
            client.release();
        }
    }


    public async updateEmpresa(empresa: Empresa): Promise<Empresa | null> {
        const client = await pool.connect();

        try {
            const result = await client.query(
                'UPDATE Empresa SET "EmpresaNome" = $1, "EmpresaDescricao" = $2, "EmpresaEmail" = $3 WHERE "EmpresaID" = $4 RETURNING *',
                [empresa.EmpresaNome, empresa.EmpresaDescricao, empresa.EmpresaEmail, empresa.EmpresaID]
            );

            return result.rows[0] || null;
        } finally {
            client.release();
        }
    }


    public async deleteEmpresa(empresaId: string): Promise<boolean> {
        const client = await pool.connect();

        try {
            const result = await client.query('DELETE FROM Empresa WHERE "EmpresaID" = $1', [empresaId]);

            return (result && result.rowCount && result.rowCount > 0) || false;
        } finally {
            client.release();
        }
    }


    public async getEmpresaByCodigoIdentificador(codigoIdentificador: string): Promise<Empresa | null> {
        const client = await pool.connect();

        try {
            const result = await client.query(
                'SELECT * FROM Empresa WHERE "CodigoIdentificador" = $1',
                [codigoIdentificador]
            );

            return result.rows[0] || null;
        } finally {
            client.release();
        }
    }


    public async updateEmpresaByCodigoIdentificador(
        empresa: Empresa
    ): Promise<Empresa | null> {
        const client = await pool.connect();

        try {
            const result = await client.query(
                'UPDATE Empresa SET "EmpresaNome" = $1, "EmpresaDescricao" = $2, "EmpresaEmail" = $3 WHERE "CodigoIdentificador" = $4 RETURNING *',
                [
                    empresa.EmpresaNome,
                    empresa.EmpresaDescricao,
                    empresa.EmpresaEmail,
                    empresa.CodigoIdentificador,
                ]
            );

            return result.rows[0] || null;
        } finally {
            client.release();
        }
    }


    public async deleteEmpresaByCodigoIdentificador(
        codigoIdentificador: string
    ): Promise<boolean> {
        const client = await pool.connect();

        try {
            const result = await client.query(
                'DELETE FROM Empresa WHERE "CodigoIdentificador" = $1',
                [codigoIdentificador]
            );

            return (result && result.rowCount && result.rowCount > 0) || false;
        } finally {
            client.release();
        }
    }

}
