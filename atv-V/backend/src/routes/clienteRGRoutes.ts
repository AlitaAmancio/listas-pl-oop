import express from 'express';
import { ClienteRGController } from '../controllers/clienteRGController';

const clienteRGRoutes = express.Router();
const clienteRGController = new ClienteRGController();

clienteRGRoutes.get('/', clienteRGController.getAllClienteRGs);
clienteRGRoutes.get('/:id', clienteRGController.getClienteRGById);
clienteRGRoutes.post('/', clienteRGController.createClienteRG);
clienteRGRoutes.put('/:id', clienteRGController.updateClienteRG);
clienteRGRoutes.delete('/:id', clienteRGController.deleteClienteRG);

export default clienteRGRoutes;
