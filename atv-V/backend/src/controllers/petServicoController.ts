import { Request, Response } from 'express';
import { PetServicoService } from '../../../services/petServicoService';
import { PetServico } from '../models/petServico';

export class PetServicoController {
  private petServicoService: PetServicoService;

  constructor() {
    this.petServicoService = new PetServicoService();
  }

  public async getAllPetServicos(req: Request, res: Response): Promise<void> {
    try {
      const petServicos = await this.petServicoService.getAllPetServicos();
      res.status(200).json(petServicos);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  public async getPetServicoById(req: Request, res: Response): Promise<void> {
    const petServicoId = req.params.id;

    try {
      const petServico = await this.petServicoService.getPetServicoById(petServicoId);
      if (petServico) {
        res.status(200).json(petServico);
      } else {
        res.status(404).send('Associação Pet-Serviço não encontrada');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  public async createPetServico(req: Request, res: Response): Promise<void> {
    const petServicoData: PetServico = req.body;

    try {
      const petServico = await this.petServicoService.createPetServico(petServicoData);
      res.status(201).json(petServico);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  public async updatePetServico(req: Request, res: Response): Promise<void> {
    const petServicoId = req.params.id;
    const petServicoData: PetServico = req.body;

    try {
      const petServico = await this.petServicoService.updatePetServico({ ...petServicoData, PetServicoID: petServicoId });
      if (petServico) {
        res.status(200).json(petServico);
      } else {
        res.status(404).send('Associação Pet-Serviço não encontrada');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  public async deletePetServico(req: Request, res: Response): Promise<void> {
    const petServicoId = req.params.id;

    try {
      const success = await this.petServicoService.deletePetServico(petServicoId);
      if (success) {
        res.status(204).send();
      } else {
        res.status(404).send('Associação Pet-Serviço não encontrada');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  }
}
