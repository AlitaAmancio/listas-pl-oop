import pool from '../config/db';
import { EmpresaCliente } from '../models/empresaCliente';

export class EmpresaClienteService {
    public async getAllEmpresasClientes(): Promise<EmpresaCliente[]> {
        const client = await pool.connect();

        try {
            const result = await client.query('SELECT * FROM EmpresaCliente');

            return result.rows as EmpresaCliente[];
        } finally {
            client.release();
        }
    }


    public async getEmpresaClienteById(empresaId: string, clienteId: string): Promise<EmpresaCliente | null> {
        const client = await pool.connect();

        try {
            const result = await client.query('SELECT * FROM EmpresaCliente WHERE "EmpresaID" = $1 AND "ClienteID" = $2', [empresaId, clienteId]);

            return result.rows[0] || null;
        } finally {
            client.release();
        }
    }


    public async createEmpresaCliente(empresaCliente: EmpresaCliente): Promise<EmpresaCliente> {
        const client = await pool.connect();

        try {
            const result = await client.query(
                'INSERT INTO EmpresaCliente("EmpresaID", "ClienteID", "CodigoIdentificador") VALUES ($1, $2, $3) RETURNING *',
                [empresaCliente.EmpresaID, empresaCliente.ClienteID, empresaCliente.CodigoIdentificador]
            );

            return result.rows[0] as EmpresaCliente;
        } finally {
            client.release();
        }
    }


    public async updateEmpresaCliente(empresaCliente: EmpresaCliente): Promise<EmpresaCliente | null> {
        const client = await pool.connect();

        try {
            const result = await client.query(
                'UPDATE EmpresaCliente SET "CodigoIdentificador" = $1 WHERE "EmpresaID" = $2 AND "ClienteID" = $3 RETURNING *',
                [empresaCliente.CodigoIdentificador, empresaCliente.EmpresaID, empresaCliente.ClienteID]
            );

            return result.rows[0] || null;
        } finally {
            client.release();
        }
    }

    
    public async deleteEmpresaCliente(empresaId: string, clienteId: string): Promise<boolean> {
        const client = await pool.connect();

        try {
            const result = await client.query('DELETE FROM EmpresaCliente WHERE "EmpresaID" = $1 AND "ClienteID" = $2', [empresaId, clienteId]);

            return (result && result.rowCount && result.rowCount > 0) || false;
        } finally {
            client.release();
        }
    }
}
