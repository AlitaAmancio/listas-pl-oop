import express from 'express';
import { EmpresaClienteController } from '../controllers/empresaClienteController';

const empresaClienteRouter = express.Router();
const empresaClienteController = new EmpresaClienteController();

empresaClienteRouter.get('/', empresaClienteController.getAllEmpresasClientes);
empresaClienteRouter.get('/:empresaId/:clienteId', empresaClienteController.getEmpresaClienteById);
empresaClienteRouter.post('/', empresaClienteController.createEmpresaCliente);
empresaClienteRouter.put('/:empresaId/:clienteId', empresaClienteController.updateEmpresaCliente);
empresaClienteRouter.delete('/:empresaId/:clienteId', empresaClienteController.deleteEmpresaCliente);

export default empresaClienteRouter;
