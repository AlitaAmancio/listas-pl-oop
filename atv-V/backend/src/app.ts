import express from 'express';
import dotenv from 'dotenv';
import servicoRouter from './routes/servicoRoutes';
import produtoRouter from './routes/produtoRoutes';
import enderecoRouter from './routes/enderecoRoutes';
import clienteRouter from './routes/clienteRoutes';
import clienteRGRoutes from './routes/clienteRGRoutes';
import clienteTelefoneRouter from './routes/clienteTelefoneRoutes';
import empresaRouter from './routes/empresaRoutes';
import empresaClienteRouter from './routes/empresaClienteRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// app.use('/clientes', clienteRouter);
// app.use('/clienteRGs', clienteRGRoutes);
// app.use('/clienteTelefones', clienteTelefoneRouter);
// app.use('/enderecos', enderecoRouter); 
// app.use('/produtos', produtoRouter);
// app.use('/servicos', servicoRouter);
// app.use('/empresas', empresaRouter);
// app.use('/empresaClientes', empresaClienteRouter)

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
