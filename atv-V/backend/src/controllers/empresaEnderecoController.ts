import { Request, Response } from 'express';
import { EmpresaEnderecoService } from '../../../services/empresaEnderecoService';
import { EmpresaEndereco } from '../models/empresaEndereco';

export class EmpresaEnderecoController {
  private empresaEnderecoService: EmpresaEnderecoService;

  constructor() {
    this.empresaEnderecoService = new EmpresaEnderecoService();
  }

  public async getAllEmpresaEnderecos(req: Request, res: Response): Promise<void> {
    try {
      const empresaEnderecos = await this.empresaEnderecoService.getAllEmpresaEnderecos();
      res.status(200).json(empresaEnderecos);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  public async getEmpresaEnderecoById(req: Request, res: Response): Promise<void> {
    const empresaEnderecoId = req.params.id;

    try {
      const empresaEndereco = await this.empresaEnderecoService.getEmpresaEnderecoById(empresaEnderecoId);
      if (empresaEndereco) {
        res.status(200).json(empresaEndereco);
      } else {
        res.status(404).send('EmpresaEndereco não encontrado');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  public async createEmpresaEndereco(req: Request, res: Response): Promise<void> {
    const empresaEnderecoData: EmpresaEndereco = req.body;

    try {
      const empresaEndereco = await this.empresaEnderecoService.createEmpresaEndereco(empresaEnderecoData);
      res.status(201).json(empresaEndereco);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  public async updateEmpresaEndereco(req: Request, res: Response): Promise<void> {
    const empresaEnderecoId = req.params.id;
    const empresaEnderecoData: EmpresaEndereco = req.body;

    try {
      const empresaEndereco = await this.empresaEnderecoService.updateEmpresaEndereco({
        ...empresaEnderecoData,
        EmpresaEnderecoID: empresaEnderecoId,
      });
      if (empresaEndereco) {
        res.status(200).json(empresaEndereco);
      } else {
        res.status(404).send('EmpresaEndereco não encontrado');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  public async deleteEmpresaEndereco(req: Request, res: Response): Promise<void> {
    const empresaEnderecoId = req.params.id;

    try {
      const success = await this.empresaEnderecoService.deleteEmpresaEndereco(empresaEnderecoId);
      if (success) {
        res.status(204).send();
      } else {
        res.status(404).send('EmpresaEndereco não encontrado');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  }
}
