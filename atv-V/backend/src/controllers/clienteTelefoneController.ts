import { Request, Response } from 'express';
import { ClienteTelefoneService } from '../../../services/clienteTelefoneService';
import { ClienteTelefone } from '../models/clienteTelefone';

export class ClienteTelefoneController {
  private clienteTelefoneService: ClienteTelefoneService;

  constructor() {
    this.clienteTelefoneService = new ClienteTelefoneService();
  }

  public async getAllClienteTelefones(req: Request, res: Response): Promise<void> {
    try {
      const clienteTelefones = await this.clienteTelefoneService.getAllClienteTelefones();
      res.status(200).json(clienteTelefones);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  public async getClienteTelefoneById(req: Request, res: Response): Promise<void> {
    const clienteTelefoneId = req.params.id;

    try {
      const clienteTelefone = await this.clienteTelefoneService.getClienteTelefoneById(clienteTelefoneId);
      if (clienteTelefone) {
        res.status(200).json(clienteTelefone);
      } else {
        res.status(404).send('Telefone de cliente não encontrado');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  public async createClienteTelefone(req: Request, res: Response): Promise<void> {
    const clienteTelefoneData: ClienteTelefone = req.body;

    try {
      const clienteTelefone = await this.clienteTelefoneService.createClienteTelefone(clienteTelefoneData);
      res.status(201).json(clienteTelefone);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  public async updateClienteTelefone(req: Request, res: Response): Promise<void> {
    const clienteTelefoneId = req.params.id;
    const clienteTelefoneData: ClienteTelefone = req.body;

    try {
      const clienteTelefone = await this.clienteTelefoneService.updateClienteTelefone({ ...clienteTelefoneData, ClienteTelefoneID: clienteTelefoneId });
      if (clienteTelefone) {
        res.status(200).json(clienteTelefone);
      } else {
        res.status(404).send('Telefone de cliente não encontrado');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  public async deleteClienteTelefone(req: Request, res: Response): Promise<void> {
    const clienteTelefoneId = req.params.id;

    try {
      const success = await this.clienteTelefoneService.deleteClienteTelefone(clienteTelefoneId);
      if (success) {
        res.status(204).send();
      } else {
        res.status(404).send('Telefone de cliente não encontrado');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  }
}
