import express from 'express';
import { EnderecoController } from '../controllers/enderecoController';

const enderecoRouter = express.Router();
const enderecoController = new EnderecoController();

enderecoRouter.get('/', enderecoController.getAllEnderecos);
enderecoRouter.get('/:id', enderecoController.getEnderecoById);
enderecoRouter.post('/', enderecoController.createEndereco);
enderecoRouter.put('/:id', enderecoController.updateEndereco);
enderecoRouter.delete('/:id', enderecoController.deleteEndereco);
enderecoRouter.get('/codigoPostal/:codigoPostal', enderecoController.getEnderecoByCodigoPostal);

export default enderecoRouter;
