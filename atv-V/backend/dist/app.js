"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
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
