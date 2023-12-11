-- Inserir endereços
INSERT INTO Endereco (Estado, Cidade, Bairro, Rua, Numero, CodigoPostal, InformacoesAdicionais)
VALUES 
    ('São Paulo', 'São Paulo', 'Centro', 'Avenida Paulista', '123', '01234-567', 'Apartamento 101'),
    ('Rio de Janeiro', 'Rio de Janeiro', 'Copacabana', 'Rua Nossa Senhora de Copacabana', '456', '98765-432', NULL),
    ('Minas Gerais', 'Belo Horizonte', 'Savassi', 'Rua da Bahia', '789', '54321-678', 'Andar 15'),
    ('Bahia', 'Salvador', 'Barra', 'Avenida Oceânica', '101', '87654-321', 'Frente ao Farol'),
    ('Rio Grande do Sul', 'Porto Alegre', 'Moinhos de Vento', 'Rua Padre Chagas', '222', '34567-890', NULL);

-- Inserir produtos para pets
INSERT INTO Produto (ProdutoNome, ProdutoPreco, ProdutoDescricao)
VALUES 
    ('Ração para Cães', 39.99, 'Ração premium para cães de porte médio'),
    ('Areia para Gatos', 15.99, 'Areia higiênica para gatos'),
    ('Brinquedo para Cães', 24.99, 'Bola de borracha para mastigar'),
    ('Caixa de Transporte', 49.99, 'Caixa de transporte resistente para gatos'),
    ('Coleira Antipulgas', 9.99, 'Coleira para prevenção de pulgas e carrapatos');

-- Inserir serviços veterinários
INSERT INTO Servico (ServicoNome, ServicoPreco, ServicoDescricao)
VALUES 
    ('Consulta Veterinária', 120.00, 'Consulta padrão para avaliação de saúde'),
    ('Vacinação Anual', 50.00, 'Vacinação anual para cães e gatos'),
    ('Banho e Tosa', 60.00, 'Banho e tosa para manter a higiene do pet'),
    ('Exames Laboratoriais', 80.00, 'Realização de exames para diagnóstico de saúde'),
    ('Tratamento Odontológico', 90.00, 'Procedimento para cuidados com a saúde bucal');

-- Inserir clientes
INSERT INTO Cliente (ClienteID, ClienteNome, ClienteNomeSocial, ClienteCPF, ClienteCPFDataEmissao, ClienteEmail, ClienteDataCadastro, EnderecoID)
VALUES 
    (uuid_generate_v4(), 'João Silva', NULL, '12345678901', '01/01/2000', 'joao@email.com', '2023-01-01', 1),
    (uuid_generate_v4(), 'Maria Oliveira', 'Maria da Silva Oliveira', '98765432109', '15/05/1995', 'maria@email.com', '2023-02-15', 2),
    (uuid_generate_v4(), 'Carlos Pereira', NULL, '45678901234', '10/03/2008', 'carlos@email.com', '2023-03-10', 3),
    (uuid_generate_v4(), 'Ana Souza', NULL, '78901234567', '20/07/2012', 'ana@email.com', '2023-04-20', 4),
    (uuid_generate_v4(), 'Rodrigo Santos', 'Rodrigo Silva Santos', '23456789012', '05/11/2019', 'rodrigo@email.com', '2023-05-05', 5);

-- Inserir pets
INSERT INTO Pets (PetID, ClienteID, PetNome, PetRaca, PetEspecie, PetSexo)
VALUES 
    (uuid_generate_v4(), (SELECT ClienteID FROM Cliente WHERE ClienteNome = 'João Silva'), 'Buddy', 'Labrador', 'Cachorro', 'Macho'),
    (uuid_generate_v4(), (SELECT ClienteID FROM Cliente WHERE ClienteNome = 'Maria Oliveira'), 'Luna', 'Persa', 'Gato', 'Fêmea'),
    (uuid_generate_v4(), (SELECT ClienteID FROM Cliente WHERE ClienteNome = 'Carlos Pereira'), 'Max', 'Poodle', 'Cachorro', 'Macho'),
    (uuid_generate_v4(), (SELECT ClienteID FROM Cliente WHERE ClienteNome = 'Ana Souza'), 'Bella', 'Siamese', 'Gato', 'Fêmea'),
    (uuid_generate_v4(), (SELECT ClienteID FROM Cliente WHERE ClienteNome = 'Rodrigo Santos'), 'Charlie', 'Golden Retriever', 'Cachorro', 'Macho');

-- Inserir telefones dos clientes
INSERT INTO ClienteTelefone (ClienteTelefoneID, ClienteID, TelefoneDDD, TelefoneNumero)
VALUES 
    (uuid_generate_v4(), (SELECT ClienteID FROM Cliente WHERE ClienteNome = 'João Silva'), '11', '111111111'),
    (uuid_generate_v4(), (SELECT ClienteID FROM Cliente WHERE ClienteNome = 'Maria Oliveira'), '21', '222222222'),
    (uuid_generate_v4(), (SELECT ClienteID FROM Cliente WHERE ClienteNome = 'Carlos Pereira'), '31', '333333333'),
    (uuid_generate_v4(), (SELECT ClienteID FROM Cliente WHERE ClienteNome = 'Ana Souza'), '41', '444444444'),
    (uuid_generate_v4(), (SELECT ClienteID FROM Cliente WHERE ClienteNome = 'Rodrigo Santos'), '51', '555555555');
