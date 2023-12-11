import express from 'express';
import { ClienteTelefoneController } from '../controllers/clienteTelefoneController';

const clienteTelefoneRouter = express.Router();
const clienteTelefoneController = new ClienteTelefoneController();

clienteTelefoneRouter.get('/', clienteTelefoneController.getAllClienteTelefones);
clienteTelefoneRouter.get('/:id', clienteTelefoneController.getClienteTelefoneById);
clienteTelefoneRouter.post('/', clienteTelefoneController.createClienteTelefone);
clienteTelefoneRouter.put('/:id', clienteTelefoneController.updateClienteTelefone);
clienteTelefoneRouter.delete('/:id', clienteTelefoneController.deleteClienteTelefone);

export default clienteTelefoneRouter;
