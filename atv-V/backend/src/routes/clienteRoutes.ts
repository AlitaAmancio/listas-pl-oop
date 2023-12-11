import express from 'express';
import { ClienteController } from '../controllers/clienteController';

const clienteRouter = express.Router();
const clienteController = new ClienteController();

clienteRouter.get('/', clienteController.getAllClientes);
clienteRouter.get('/:partialName', clienteController.getClientesByPartialName);
clienteRouter.get('/:clienteCPF', clienteController.getClienteByCPF);
clienteRouter.post('/', clienteController.createCliente);
clienteRouter.put('/:clienteCPF', clienteController.updateCliente);
clienteRouter.delete('/:clienteCPF', clienteController.deleteCliente);

export default clienteRouter;
