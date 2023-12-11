-- Tabela Endereco
CREATE TABLE Endereco (
    EnderecoID UUID PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
    Estado VARCHAR(255) NOT NULL,
    Cidade VARCHAR(255) NOT NULL,
    Bairro VARCHAR(255) NOT NULL,
    Rua VARCHAR(255) NOT NULL,
    Numero VARCHAR(10) NOT NULL,
    CodigoPostal VARCHAR(10) NOT NULL,
    InformacoesAdicionais VARCHAR(255) NULL
);

-- Tabela Produto
CREATE TABLE Produto (
    ProdutoID UUID PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
    ProdutoNome VARCHAR(255) NOT NULL,
    ProdutoPreco DECIMAL(10, 2) NOT NULL,
    ProdutoDescricao VARCHAR(255) NULL
);

-- Tabela Servico
CREATE TABLE Servico (
    ServicoID UUID PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
    ServicoNome VARCHAR(255) NOT NULL,
    ServicoPreco DECIMAL(10, 2) NOT NULL,
    ServicoDescricao VARCHAR(255) NULL
);

-- Tabela Cliente
CREATE TABLE Cliente (
    ClienteID UUID PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
    ClienteNome VARCHAR(255) NOT NULL,
    ClienteNomeSocial VARCHAR(255) NULL,
    ClienteCPF VARCHAR(11) NOT NULL,
    ClienteCPFDataEmissao VARCHAR(30) NOT NULL,
    ClienteEmail VARCHAR(255) NULL,
    ClienteDataCadastro DATE DEFAULT CURRENT_DATE NOT NULL,
    EnderecoID UUID NULL,
    FOREIGN KEY (EnderecoID) REFERENCES Endereco(EnderecoID)
);

-- Tabela Pets
CREATE TABLE Pets (
    PetID UUID PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
    ClienteID UUID NOT NULL,
    PetNome VARCHAR(255) NOT NULL,
    PetRaca VARCHAR(255) NOT NULL,
    PetEspecie VARCHAR(255) NOT NULL,
    PetSexo VARCHAR(255) NOT NULL,
    FOREIGN KEY (ClienteID) REFERENCES Cliente(ClienteID)
);

-- Tabela ClienteTelefone
CREATE TABLE ClienteTelefone (
    ClienteTelefoneID UUID PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
    ClienteID UUID NOT NULL,
    TelefoneDDD VARCHAR(3) NULL,
    TelefoneNumero VARCHAR(9) NULL,
    FOREIGN KEY (ClienteID) REFERENCES Cliente(ClienteID)
);

-- Tabela ClienteRG
CREATE TABLE ClienteRG (
    RG_ID UUID PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
    ClienteID UUID NOT NULL,
    RGNumero VARCHAR(20) NULL,
    RGDataEmissao VARCHAR(30) NULL,
    FOREIGN KEY (ClienteID) REFERENCES Cliente(ClienteID)
);

-- Tabela ClienteProduto
CREATE TABLE ClienteProduto (
    ClienteProdutoID UUID PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
    ProdutoID UUID NOT NULL,
    ClienteID UUID NOT NULL,
    PetID UUID NOT NULL,
    FOREIGN KEY (ProdutoID) REFERENCES Produto(ProdutoID),
    FOREIGN KEY (ClienteID) REFERENCES Cliente(ClienteID),
    FOREIGN KEY (PetID) REFERENCES Pets(PetID)
);

-- Tabela ClienteServico
CREATE TABLE ClienteServico (
    ClienteServicoID UUID PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
    ServicoID UUID NOT NULL,
    ClienteID UUID NOT NULL,
    PetID UUID NOT NULL,
    FOREIGN KEY (ServicoID) REFERENCES Servico(ServicoID),
    FOREIGN KEY (ClienteID) REFERENCES Cliente(ClienteID),
    FOREIGN KEY (PetID) REFERENCES Pets(PetID)
);

-- Tabela PetServico
CREATE TABLE PetServico (
    PetServicoID UUID PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
    PetID UUID NOT NULL,
    ServicoID UUID NOT NULL,
    FOREIGN KEY (PetID) REFERENCES Pets(PetID),
    FOREIGN KEY (ServicoID) REFERENCES Servico(ServicoID)
);

-- Tabela ClientePet
CREATE TABLE ClientePet (
    ClientePetID UUID PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
    ClienteID UUID NOT NULL,
    PetID UUID NOT NULL,
    PRIMARY KEY (ClienteID, PetID),
    FOREIGN KEY (ClienteID) REFERENCES Cliente(ClienteID),
    FOREIGN KEY (PetID) REFERENCES Pets(PetID)
);

-- Tabela Empresa
CREATE TABLE Empresa (
    EmpresaID UUID PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
    CodigoIdentificador UUID DEFAULT uuid_generate_v4() NOT NULL,
    EmpresaNome VARCHAR(255) NOT NULL,
    EmpresaDescricao VARCHAR(255) NULL,
    EmpresaEmail VARCHAR(255) NULL
);

-- Tabela EmpresaTelefone
CREATE TABLE EmpresaTelefone (
    EmpresaTelefoneID UUID PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
    EmpresaID UUID NOT NULL,
    TelefoneDDD VARCHAR(3) NULL,
    TelefoneNumero VARCHAR(9) NULL,
    CodigoIdentificador UUID DEFAULT uuid_generate_v4() NOT NULL,
    FOREIGN KEY (EmpresaID, CodigoIdentificador) REFERENCES Empresa(EmpresaID, CodigoIdentificador)
);

-- Tabela EmpresaEndereco
CREATE TABLE EmpresaEndereco (
    EmpresaEnderecoID UUID PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
    EmpresaID UUID NOT NULL,
    EnderecoID UUID NOT NULL,
    CodigoIdentificador UUID DEFAULT uuid_generate_v4() NOT NULL,
    PRIMARY KEY (EmpresaID, EnderecoID, CodigoIdentificador),
    FOREIGN KEY (EmpresaID, CodigoIdentificador) REFERENCES Empresa(EmpresaID, CodigoIdentificador),
    FOREIGN KEY (EnderecoID) REFERENCES Endereco(EnderecoID)
);

-- Tabela EmpresaCliente
CREATE TABLE EmpresaCliente (
    EmpresaID UUID NOT NULL,
    ClienteID UUID NOT NULL,
    CodigoIdentificador UUID NOT NULL,
    PRIMARY KEY (EmpresaID, ClienteID),
    FOREIGN KEY (EmpresaID, CodigoIdentificador) REFERENCES Empresa(EmpresaID, CodigoIdentificador),
    FOREIGN KEY (ClienteID) REFERENCES Cliente(ClienteID)
);

-- Tabela EmpresaProduto
CREATE TABLE EmpresaProduto (
    EmpresaProdutoID UUID PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
    EmpresaID UUID NOT NULL,
    ProdutoID UUID NOT NULL,
    PRIMARY KEY (EmpresaID, ProdutoID),
    FOREIGN KEY (EmpresaID) REFERENCES Empresa(EmpresaID),
    FOREIGN KEY (ProdutoID) REFERENCES Produto(ProdutoID)
);

-- Tabela EmpresaServico
CREATE TABLE EmpresaServico (
    EmpresaServicoID UUID PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
    EmpresaID UUID NOT NULL,
    ServicoID UUID NOT NULL,
    PRIMARY KEY (EmpresaID, ServicoID),
    FOREIGN KEY (EmpresaID) REFERENCES Empresa(EmpresaID),
    FOREIGN KEY (ServicoID) REFERENCES Servico(ServicoID)
);
