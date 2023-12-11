import express from 'express';
import { PetServicoController } from '../controllers/petServicoController';

const petServicoRouter = express.Router();
const petServicoController = new PetServicoController();

petServicoRouter.get('/', petServicoController.getAllPetServicos);
petServicoRouter.get('/:id', petServicoController.getPetServicoById);
petServicoRouter.post('/', petServicoController.createPetServico);
petServicoRouter.put('/:id', petServicoController.updatePetServico);
petServicoRouter.delete('/:id', petServicoController.deletePetServico);

export default petServicoRouter;
