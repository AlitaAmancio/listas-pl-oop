export interface Endereco {
    EnderecoID: string;
    Estado: string;
    Cidade: string;
    Bairro: string;
    Rua: string;
    Numero: string;
    CodigoPostal: string;
    InformacoesAdicionais?: string | null; // Pode ser nulo
  }
  
  export interface Produto {
    ProdutoID: string;
    ProdutoNome?: string | null; // Pode ser nulo
    ProdutoPreco?: number | null; // Pode ser nulo
    ProdutoDescricao?: string | null; // Pode ser nulo
  }
  
  export interface Servico {
    ServicoID: string;
    ServicoNome?: string | null; // Pode ser nulo
    ServicoPreco?: number | null; // Pode ser nulo
    ServicoDescricao?: string | null; // Pode ser nulo
  }
  
  export interface Cliente {
    ClienteID: string;
    ClienteNome: string;
    ClienteNomeSocial?: string | null; // Pode ser nulo
    ClienteCPF: string;
    ClienteCPFDataEmissao?: string | null; // Pode ser nulo
    ClienteEmail?: string | null; // Pode ser nulo
    ClienteDataCadastro: string;
    EnderecoID?: string | null; // Pode ser nulo
  }
  
  export interface Pets {
    PetID: string;
    ClienteID: string;
    PetNome?: string | null; // Pode ser nulo
    PetRaca?: string | null; // Pode ser nulo
    PetEspecie?: string | null; // Pode ser nulo
    PetSexo?: string | null; // Pode ser nulo
  }
  
  export interface ClienteTelefone {
    ClienteTelefoneID: string;
    ClienteID: string;
    TelefoneDDD?: string | null; // Pode ser nulo
    TelefoneNumero?: string | null; // Pode ser nulo
  }
  
  export interface ClienteRG {
    RG_ID: string;
    ClienteID: string;
    RGNumero?: string | null; // Pode ser nulo
    RGDataEmissao?: string | null; // Pode ser nulo
  }
  
  export interface ProdutosConsumidosCliente {
    ProdutosConsumidosClienteID: string;
    ProdutoID: string;
    ClienteID: string;
    PetID: string;
  }
  
  export interface ServicoConsumidosCliente {
    ServicoConsumidosClienteID: string;
    ServicoID: string;
    ClienteID: string;
    PetID: string;
  }
  
  export interface PetServico {
    PetServicoID: string;
    PetID: string;
    ServicoID: string;
  }
  
  export interface Empresa {
    EmpresaID: string;
    CodigoIdentificador: string;
    EmpresaNome: string;
    EmpresaDescricao?: string | null; // Pode ser nulo
    EmpresaEmail?: string | null; // Pode ser nulo
  }
  
  export interface EmpresaTelefone {
    EmpresaTelefoneID: string;
    EmpresaID: string;
    TelefoneDDD?: string | null; // Pode ser nulo
    TelefoneNumero?: string | null; // Pode ser nulo
    CodigoIdentificador: string;
  }
  
  export interface EmpresaEndereco {
    EmpresaEnderecoID: string;
    EmpresaID: string;
    EnderecoID: string;
    CodigoIdentificador: string;
  }
  
  export interface EmpresaCliente {
    EmpresaID: string;
    ClienteID: string;
    CodigoIdentificador: string;
  }
  
  export interface EmpresaProduto {
    EmpresaProdutoID: string;
    EmpresaID: string;
    ProdutoID: string;
  }
  
  export interface EmpresaServico {
    EmpresaServicoID: string;
    EmpresaID: string;
    ServicoID: string;
  }
  