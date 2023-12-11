import express, { Request, Response } from 'express';
import { ProdutoService } from '../../../services/produtoService';
import { Produto } from '../models/produto';

export class ProdutoController {
    private produtoService: ProdutoService;

    constructor() {
        this.produtoService = new ProdutoService();
    }

    public getAllProdutos = async (req: Request, res: Response): Promise<void> => {
        try {
            const produtos = await this.produtoService.getAllProdutos();
            res.status(200).json(produtos);
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro interno do servidor');
        }
    };

    public getProdutosByPartialName = async (req: Request, res: Response): Promise<void> => {
        try {
            const partialName = req.params.partialName;
            const produtos = await this.produtoService.getProdutosByPartialName(partialName);
            res.status(200).json(produtos);
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro interno do servidor');
        }
    };

    public getProdutoById = async (req: Request, res: Response): Promise<void> => {
        try {
            const produtoId = req.params.produtoId;
            const produto = await this.produtoService.getProdutoById(produtoId);

            if (produto) {
                res.status(200).json(produto);
            } else {
                res.status(404).send('Produto não encontrado');
            }
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro interno do servidor');
        }
    };

    public createProduto = async (req: Request, res: Response): Promise<void> => {
        try {
            const novoProduto: Produto = req.body;
            const produtoCriado = await this.produtoService.createProduto(novoProduto);
            res.status(201).json(produtoCriado);
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro interno do servidor');
        }
    };

    public updateProduto = async (req: Request, res: Response): Promise<void> => {
        try {
            const produtoId = req.params.produtoId;
            const dadosAtualizados: Produto = req.body;
            dadosAtualizados.ProdutoID = produtoId;

            const produtoAtualizado = await this.produtoService.updateProduto(dadosAtualizados);

            if (produtoAtualizado) {
                res.status(200).json(produtoAtualizado);
            } else {
                res.status(404).send('Produto não encontrado');
            }
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro interno do servidor');
        }
    };

    public deleteProduto = async (req: Request, res: Response): Promise<void> => {
        try {
            const produtoId = req.params.produtoId;
            const sucesso = await this.produtoService.deleteProduto(produtoId);

            if (sucesso) {
                res.status(204).send();
            } else {
                res.status(404).send('Produto não encontrado');
            }
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro interno do servidor');
        }
    };
}
