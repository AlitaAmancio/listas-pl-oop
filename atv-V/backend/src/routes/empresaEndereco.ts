import express from 'express';
import { EmpresaEnderecoController } from '../controllers/empresaEnderecoController';

const empresaEnderecoRouter = express.Router();
const empresaEnderecoController = new EmpresaEnderecoController();

empresaEnderecoRouter.get('/', empresaEnderecoController.getAllEmpresaEnderecos);
empresaEnderecoRouter.get('/:id', empresaEnderecoController.getEmpresaEnderecoById);
empresaEnderecoRouter.post('/', empresaEnderecoController.createEmpresaEndereco);
empresaEnderecoRouter.put('/:id', empresaEnderecoController.updateEmpresaEndereco);
empresaEnderecoRouter.delete('/:id', empresaEnderecoController.deleteEmpresaEndereco);

export default empresaEnderecoRouter;
