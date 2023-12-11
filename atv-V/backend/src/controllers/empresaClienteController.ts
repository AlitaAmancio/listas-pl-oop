import { Request, Response } from 'express';
import { EmpresaClienteService } from '../../../services/empresaClienteService';
import { EmpresaCliente } from '../models/empresaCliente';

export class EmpresaClienteController {
    private empresaClienteService: EmpresaClienteService;

    constructor() {
        this.empresaClienteService = new EmpresaClienteService();
    }

    public async getAllEmpresasClientes(req: Request, res: Response): Promise<void> {
        try {
            const empresasClientes = await this.empresaClienteService.getAllEmpresasClientes();
            res.status(200).json(empresasClientes);
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro interno do servidor');
        }
    }

    public async getEmpresaClienteById(req: Request, res: Response): Promise<void> {
        const { empresaId, clienteId } = req.params;

        try {
            const empresaCliente = await this.empresaClienteService.getEmpresaClienteById(empresaId, clienteId);
            if (empresaCliente) {
                res.status(200).json(empresaCliente);
            } else {
                res.status(404).send('Relação Empresa-Cliente não encontrada');
            }
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro interno do servidor');
        }
    }

    public async createEmpresaCliente(req: Request, res: Response): Promise<void> {
        const empresaClienteData: EmpresaCliente = req.body;

        try {
            const empresaCliente = await this.empresaClienteService.createEmpresaCliente(empresaClienteData);
            res.status(201).json(empresaCliente);
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro interno do servidor');
        }
    }

    public async updateEmpresaCliente(req: Request, res: Response): Promise<void> {
        const { empresaId, clienteId } = req.params;
        const empresaClienteData: EmpresaCliente = req.body;

        try {
            const empresaCliente = await this.empresaClienteService.updateEmpresaCliente({ ...empresaClienteData, EmpresaID: empresaId, ClienteID: clienteId });
            if (empresaCliente) {
                res.status(200).json(empresaCliente);
            } else {
                res.status(404).send('Relação Empresa-Cliente não encontrada');
            }
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro interno do servidor');
        }
    }

    public async deleteEmpresaCliente(req: Request, res: Response): Promise<void> {
        const { empresaId, clienteId } = req.params;

        try {
            const success = await this.empresaClienteService.deleteEmpresaCliente(empresaId, clienteId);
            if (success) {
                res.status(204).send();
            } else {
                res.status(404).send('Relação Empresa-Cliente não encontrada');
            }
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro interno do servidor');
        }
    }
}
