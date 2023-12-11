import express from 'express';
import { EmpresaController } from '../controllers/empresaController';

const empresaRouter = express.Router();
const empresaController = new EmpresaController();

empresaRouter.get('/', empresaController.getAllEmpresas);
empresaRouter.get('/partialName/:partialName', empresaController.getEmpresasByPartialName);
empresaRouter.get('/:id', empresaController.getEmpresaById);
empresaRouter.post('/', empresaController.createEmpresa);
empresaRouter.put('/:id', empresaController.updateEmpresa);
empresaRouter.delete('/:id', empresaController.deleteEmpresa);
empresaRouter.get('/codigoIdentificador/:codigoIdentificador', empresaController.getEmpresaByCodigoIdentificador);
empresaRouter.put('/codigoIdentificador/:codigoIdentificador', empresaController.updateEmpresaByCodigoIdentificador);
empresaRouter.delete('/codigoIdentificador/:codigoIdentificador', empresaController.deleteEmpresaByCodigoIdentificador);

export default empresaRouter;
