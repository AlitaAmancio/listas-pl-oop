import { Request, Response } from 'express';
import { EnderecoService } from '../../../services/enderecoService';
import { Endereco } from '../models/endereco';

export class EnderecoController {
  private enderecoService: EnderecoService;

  constructor() {
    this.enderecoService = new EnderecoService();
  }

  public async getAllEnderecos(req: Request, res: Response): Promise<void> {
    try {
      const enderecos = await this.enderecoService.getAllEnderecos();
      res.status(200).json(enderecos);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  public async getEnderecoById(req: Request, res: Response): Promise<void> {
    const enderecoId = req.params.id;

    try {
      const endereco = await this.enderecoService.getEnderecoById(enderecoId);
      if (endereco) {
        res.status(200).json(endereco);
      } else {
        res.status(404).send('Endereço não encontrado');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  public async createEndereco(req: Request, res: Response): Promise<void> {
    const enderecoData: Endereco = req.body;

    try {
      const endereco = await this.enderecoService.createEndereco(enderecoData);
      res.status(201).json(endereco);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  public async updateEndereco(req: Request, res: Response): Promise<void> {
    const enderecoId = req.params.id;
    const enderecoData: Endereco = req.body;

    try {
      const endereco = await this.enderecoService.updateEndereco({ ...enderecoData, EnderecoID: enderecoId });
      if (endereco) {
        res.status(200).json(endereco);
      } else {
        res.status(404).send('Endereço não encontrado');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  public async deleteEndereco(req: Request, res: Response): Promise<void> {
    const enderecoId = req.params.id;

    try {
      const success = await this.enderecoService.deleteEndereco(enderecoId);
      if (success) {
        res.status(204).send();
      } else {
        res.status(404).send('Endereço não encontrado');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  public async getEnderecoByCodigoPostal(req: Request, res: Response): Promise<void> {
    const codigoPostal = req.params.codigoPostal;

    try {
      const endereco = await this.enderecoService.getEnderecoByCodigoPostal(codigoPostal);
      if (endereco) {
        res.status(200).json(endereco);
      } else {
        res.status(404).send('Endereço não encontrado');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  }
}
