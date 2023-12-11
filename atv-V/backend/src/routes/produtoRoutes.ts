import express from 'express';
import { ProdutoController } from '../controllers/produtoController';

const produtoRouter = express.Router();
const produtoController = new ProdutoController();

produtoRouter.get('/', produtoController.getAllProdutos);
produtoRouter.get('/:partialName', produtoController.getProdutosByPartialName);
produtoRouter.get('/:produtoId', produtoController.getProdutoById);
produtoRouter.post('/', produtoController.createProduto);
produtoRouter.put('/:produtoId', produtoController.updateProduto);
produtoRouter.delete('/:produtoId', produtoController.deleteProduto);

export default produtoRouter;
