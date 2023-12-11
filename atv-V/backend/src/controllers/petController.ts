import { Request, Response } from 'express';
import { PetService } from '../../../services/petService';
import { Pet } from '../models/pet';

export class PetController {
  private petService: PetService;

  constructor() {
    this.petService = new PetService();
  }

  public async getAllPets(req: Request, res: Response): Promise<void> {
    try {
      const pets = await this.petService.getAllPets();
      res.status(200).json(pets);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  public async getPetById(req: Request, res: Response): Promise<void> {
    const petId = req.params.id;

    try {
      const pet = await this.petService.getPetById(petId);
      if (pet) {
        res.status(200).json(pet);
      } else {
        res.status(404).send('Pet não encontrado');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  public async createPet(req: Request, res: Response): Promise<void> {
    const petData: Pet = req.body;

    try {
      const pet = await this.petService.createPet(petData);
      res.status(201).json(pet);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  public async updatePet(req: Request, res: Response): Promise<void> {
    const petId = req.params.id;
    const petData: Pet = req.body;

    try {
      const pet = await this.petService.updatePet({ ...petData, PetID: petId });
      if (pet) {
        res.status(200).json(pet);
      } else {
        res.status(404).send('Pet não encontrado');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  public async deletePet(req: Request, res: Response): Promise<void> {
    const petId = req.params.id;

    try {
      const success = await this.petService.deletePet(petId);
      if (success) {
        res.status(204).send();
      } else {
        res.status(404).send('Pet não encontrado');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  }
}
