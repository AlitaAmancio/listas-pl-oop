import { Request, Response } from 'express';
import { EmpresaService } from '../../../services/empresaService';
import { Empresa } from '../models/empresa';

export class EmpresaController {
  private empresaService: EmpresaService;

  constructor() {
    this.empresaService = new EmpresaService();
  }

  public async getAllEmpresas(req: Request, res: Response): Promise<void> {
    try {
      const empresas = await this.empresaService.getAllEmpresas();
      res.status(200).json(empresas);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  public async getEmpresasByPartialName(req: Request, res: Response): Promise<void> {
    const partialName = req.params.partialName;

    try {
      const empresas = await this.empresaService.getEmpresasByPartialName(partialName);
      res.status(200).json(empresas);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  public async getEmpresaById(req: Request, res: Response): Promise<void> {
    const empresaId = req.params.id;

    try {
      const empresa = await this.empresaService.getEmpresaById(empresaId);
      if (empresa) {
        res.status(200).json(empresa);
      } else {
        res.status(404).send('Empresa não encontrada');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  public async createEmpresa(req: Request, res: Response): Promise<void> {
    const empresaData: Empresa = req.body;

    try {
      const empresa = await this.empresaService.createEmpresa(empresaData);
      res.status(201).json(empresa);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  public async updateEmpresa(req: Request, res: Response): Promise<void> {
    const empresaId = req.params.id;
    const empresaData: Empresa = req.body;

    try {
      const empresa = await this.empresaService.updateEmpresa({ ...empresaData, EmpresaID: empresaId });
      if (empresa) {
        res.status(200).json(empresa);
      } else {
        res.status(404).send('Empresa não encontrada');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  public async deleteEmpresa(req: Request, res: Response): Promise<void> {
    const empresaId = req.params.id;

    try {
      const success = await this.empresaService.deleteEmpresa(empresaId);
      if (success) {
        res.status(204).send();
      } else {
        res.status(404).send('Empresa não encontrada');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  public async getEmpresaByCodigoIdentificador(req: Request, res: Response): Promise<void> {
    const codigoIdentificador = req.params.codigoIdentificador;

    try {
      const empresa = await this.empresaService.getEmpresaByCodigoIdentificador(codigoIdentificador);
      if (empresa) {
        res.status(200).json(empresa);
      } else {
        res.status(404).send('Empresa não encontrada');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  public async updateEmpresaByCodigoIdentificador(req: Request, res: Response): Promise<void> {
    const codigoIdentificador = req.params.codigoIdentificador;
    const empresaData: Empresa = req.body;

    try {
      const empresa = await this.empresaService.updateEmpresaByCodigoIdentificador({
        ...empresaData,
        CodigoIdentificador: codigoIdentificador,
      });
      if (empresa) {
        res.status(200).json(empresa);
      } else {
        res.status(404).send('Empresa não encontrada');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  public async deleteEmpresaByCodigoIdentificador(req: Request, res: Response): Promise<void> {
    const codigoIdentificador = req.params.codigoIdentificador;

    try {
      const success = await this.empresaService.deleteEmpresaByCodigoIdentificador(codigoIdentificador);
      if (success) {
        res.status(204).send();
      } else {
        res.status(404).send('Empresa não encontrada');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  }
}
