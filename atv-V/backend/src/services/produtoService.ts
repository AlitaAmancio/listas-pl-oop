import { Pool } from 'pg';
import pool from '../config/db';
import { Produto } from '../models/produto';

export class ProdutoService {
    public async getAllProdutos(): Promise<Produto[]> {
        const client = await pool.connect();

        try {
            const result = await client.query('SELECT * FROM Produto');

            return result.rows as Produto[];
        } finally {
            client.release();
        }
    }


    public async getProdutosByPartialName(partialName: string): Promise<Produto[]> {
        const client = await pool.connect();

        try {
            const result = await client.query(
                'SELECT * FROM Produto WHERE "ProdutoNome" ILIKE $1',
                [`%${partialName}%`]
            );

            return result.rows as Produto[];
        } finally {
            client.release();
        }
    }


    public async getProdutoById(produtoId: string): Promise<Produto | null> {
        const client = await pool.connect();

        try {
            const result = await client.query('SELECT * FROM Produto WHERE "ProdutoID" = $1', [produtoId]);

            return result.rows[0] || null;
        } finally {
            client.release();
        }
    }


    public async createProduto(produto: Produto): Promise<Produto> {
        const client = await pool.connect();

        try {
            const result = await client.query(
                'INSERT INTO Produto("ProdutoID", "ProdutoNome", "ProdutoPreco", "ProdutoDescricao") VALUES ($1, $2, $3, $4) RETURNING *',
                [produto.ProdutoID, produto.ProdutoNome, produto.ProdutoPreco, produto.ProdutoDescricao]
            );

            return result.rows[0] as Produto;
        } finally {
            client.release();
        }
    }


    public async updateProduto(produto: Produto): Promise<Produto | null> {
        const client = await pool.connect();

        try {
            const result = await client.query(
                'UPDATE Produto SET "ProdutoNome" = $1, "ProdutoPreco" = $2, "ProdutoDescricao" = $3 WHERE "ProdutoID" = $4 RETURNING *',
                [produto.ProdutoNome, produto.ProdutoPreco, produto.ProdutoDescricao, produto.ProdutoID]
            );

            return result.rows[0] || null;
        } finally {
            client.release();
        }
    }


    public async deleteProduto(produtoId: string): Promise<boolean> {
        const client = await pool.connect();

        try {
            const result = await client.query('DELETE FROM Produto WHERE "ProdutoID" = $1', [produtoId]);

            return (result && result.rowCount && result.rowCount > 0) || false;
        } finally {
            client.release();
        }
    }
}
