import express from 'express';
import { ServicoController } from '../controllers/servicoController';

const servicoRouter = express.Router();
const servicoController = new ServicoController();

servicoRouter.get('/', servicoController.getAllServicos);
servicoRouter.get('/:partialName', servicoController.getServicosByPartialName);
servicoRouter.get('/:servicoId', servicoController.getServicoById);
servicoRouter.post('/', servicoController.createServico);
servicoRouter.put('/:servicoId', servicoController.updateServico);
servicoRouter.delete('/:servicoId', servicoController.deleteServico);

export default servicoRouter;
