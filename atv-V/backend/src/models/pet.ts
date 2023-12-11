import { Servico } from "./servico";

export interface Pet {
    servicos?: Servico[] | null;
    PetID: string;
    ClienteID: string;
    PetNome: string;
    PetRaca: string;
    PetEspecie: string;
    PetSexo: string;
  }
  