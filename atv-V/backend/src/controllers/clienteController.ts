import express, { Request, Response } from 'express';
import { ClienteService } from '../../../services/clienteService';
import { Cliente } from '../models/cliente';

export class ClienteController {
  private clienteService: ClienteService;

  constructor() {
    this.clienteService = new ClienteService();
  }

  public getAllClientes = async (req: Request, res: Response): Promise<void> => {
    try {
      const clientes = await this.clienteService.getAllClientes();
      res.status(200).json(clientes);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  };

  public getClientesByPartialName = async (req: Request, res: Response): Promise<void> => {
    try {
      const partialName = req.params.partialName as string;
      const clientes = await this.clienteService.getClienteByPartialName(partialName);
      res.status(200).json(clientes);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  };

  public getClienteByCPF = async (req: Request, res: Response): Promise<void> => {
    try {
      const clienteCPF = req.params.clienteCPF as string;
      const cliente = await this.clienteService.getClienteByCPF(clienteCPF);
      if (cliente) {
        res.status(200).json(cliente);
      } else {
        res.status(404).send('Cliente não encontrado');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  };

  public createCliente = async (req: Request, res: Response): Promise<void> => {
    try {
      const cliente: Cliente = req.body;
      const newCliente = await this.clienteService.createCliente(cliente);
      res.status(201).json(newCliente);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  };

  public updateCliente = async (req: Request, res: Response): Promise<void> => {
    try {
      const cliente: Cliente = req.body;
      const updatedCliente = await this.clienteService.updateCliente(cliente);
      if (updatedCliente) {
        res.status(200).json(updatedCliente);
      } else {
        res.status(404).send('Cliente não encontrado');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  };

  public deleteCliente = async (req: Request, res: Response): Promise<void> => {
    try {
      const clienteCPF = req.params.clienteCPF as string;
      const deleted = await this.clienteService.deleteCliente(clienteCPF);
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).send('Cliente não encontrado');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  };
}

const clienteController = new ClienteController();
export default clienteController;
