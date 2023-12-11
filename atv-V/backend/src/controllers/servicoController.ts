import express, { Request, Response } from 'express';
import { ServicoService } from '../../../services/servicoService';
import { Servico } from '../models/servico';

export class ServicoController {
  private servicoService: ServicoService;

  constructor() {
    this.servicoService = new ServicoService();
  }

  public getAllServicos = async (req: Request, res: Response): Promise<void> => {
    try {
      const servicos = await this.servicoService.getAllServicos();
      res.status(200).json(servicos);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  };

  public getServicosByPartialName = async (req: Request, res: Response): Promise<void> => {
    const partialName = req.params.partialName;

    try {
      const servicos = await this.servicoService.getServicosByPartialName(partialName);
      res.status(200).json(servicos);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  };

  public getServicoById = async (req: Request, res: Response): Promise<void> => {
    const servicoId = req.params.servicoId;

    try {
      const servico = await this.servicoService.getServicoById(servicoId);
      if (servico) {
        res.status(200).json(servico);
      } else {
        res.status(404).send('Serviço não encontrado');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  };

  public createServico = async (req: Request, res: Response): Promise<void> => {
    const novoServico: Servico = req.body;

    try {
      const servicoCriado = await this.servicoService.createServico(novoServico);
      res.status(201).json(servicoCriado);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  };

  public updateServico = async (req: Request, res: Response): Promise<void> => {
    const servicoId = req.params.servicoId;
    const dadosAtualizados: Servico = req.body;

    try {
      const servicoAtualizado = await this.servicoService.updateServico({
        ...dadosAtualizados,
        ServicoID: servicoId,
      });
      if (servicoAtualizado) {
        res.status(200).json(servicoAtualizado);
      } else {
        res.status(404).send('Serviço não encontrado');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  };

  public deleteServico = async (req: Request, res: Response): Promise<void> => {
    const servicoId = req.params.servicoId;

    try {
      const sucesso = await this.servicoService.deleteServico(servicoId);
      if (sucesso) {
        res.status(204).send();
      } else {
        res.status(404).send('Serviço não encontrado');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  };
}
