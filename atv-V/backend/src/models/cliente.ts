export interface Cliente {
    ClienteID: string;
    ClienteNome: string;
    ClienteNomeSocial?: string | null;
    ClienteCPF: string;
    ClienteCPFDataEmissao: string;
    ClienteEmail?: string | null;
    ClienteDataCadastro: Date;
    EnderecoID?: string | null;
  }
  