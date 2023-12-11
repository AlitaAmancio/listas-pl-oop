import express from 'express';
import { PetController } from '../controllers/petController';

const petRouter = express.Router();
const petController = new PetController();

petRouter.get('/', petController.getAllPets);
petRouter.get('/:id', petController.getPetById);
petRouter.post('/', petController.createPet);
petRouter.put('/:id', petController.updatePet);
petRouter.delete('/:id', petController.deletePet);

export default petRouter;
