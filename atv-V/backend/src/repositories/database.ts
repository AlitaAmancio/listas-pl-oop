import { Pool, QueryResult } from 'pg';

const pool = new Pool({
  user: process.env.DB_USER || 'seu_usuario',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'seu_banco_de_dados',
  password: process.env.DB_PASSWORD || 'sua_senha',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
});

export async function query(text: string, params?: any[]): Promise<QueryResult> {
  return pool.query(text, params);
}
