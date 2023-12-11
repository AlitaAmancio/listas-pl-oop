import { Request, Response } from 'express';
import { ClienteRGService } from '../../../services/clienteRGService';
import { ClienteRG } from '../models/clienteRg';

export class ClienteRGController {
  private clienteRGService: ClienteRGService;

  constructor() {
    this.clienteRGService = new ClienteRGService();
  }

  public async getAllClienteRGs(req: Request, res: Response): Promise<void> {
    try {
      const clienteRGs = await this.clienteRGService.getAllClienteRGs();
      res.status(200).json(clienteRGs);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  public async getClienteRGById(req: Request, res: Response): Promise<void> {
    const clienteRGId = req.params.id;

    try {
      const clienteRG = await this.clienteRGService.getClienteRGById(clienteRGId);
      if (clienteRG) {
        res.status(200).json(clienteRG);
      } else {
        res.status(404).send('ClienteRG não encontrado');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  public async createClienteRG(req: Request, res: Response): Promise<void> {
    const clienteRGData: ClienteRG = req.body;

    try {
      const clienteRG = await this.clienteRGService.createClienteRG(clienteRGData);
      res.status(201).json(clienteRG);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  public async updateClienteRG(req: Request, res: Response): Promise<void> {
    const clienteRGId = req.params.id;
    const clienteRGData: ClienteRG = req.body;

    try {
      const clienteRG = await this.clienteRGService.updateClienteRG({ ...clienteRGData, RG_ID: clienteRGId });
      if (clienteRG) {
        res.status(200).json(clienteRG);
      } else {
        res.status(404).send('ClienteRG não encontrado');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  public async deleteClienteRG(req: Request, res: Response): Promise<void> {
    const clienteRGId = req.params.id;

    try {
      const success = await this.clienteRGService.deleteClienteRG(clienteRGId);
      if (success) {
        res.status(204).send();
      } else {
        res.status(404).send('ClienteRG não encontrado');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  }
}
