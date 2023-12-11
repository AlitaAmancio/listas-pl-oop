import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./margin.css";

const clienteObj = {
  nome: "",
  nomeSocial: "",
  email: "",
  endereco: {
    estado: "",
    cidade: "",
    bairro: "",
    rua: "",
    numero: "",
    codigoPostal: "",
    informacoesAdicionais: "",
  },
  telefones: [],
};

type Props = {
  tema: string;
};


export default function FormularioCadastroCliente(props: Props) {
  const navigate = useNavigate();
  const [cliente, setCliente] = useState(clienteObj);
  const [telefones, setTelefones] = useState<{ ddd: string; numero: string }[]>([]);
  const [pets, setPets] = useState<{ nome: string; especie: string; raca: string; sexo: string }[]>([]);

  const adicionarPet = () => {
    setPets([...pets, { nome: "", especie: "", raca: "", sexo: "" }]);
  };

  const removerPet = (index: number) => {
    const newPets = [...pets];
    newPets.splice(index, 1);
    setPets(newPets);
  };


  const adicionarTelefone = () => {
    setTelefones([...telefones, { ddd: "", numero: "" }]);
  };

  const removerTelefone = (index: number) => {
    const novosTelefones = [...telefones];
    novosTelefones.splice(index, 1);
    setTelefones(novosTelefones);
  };

  const validar = () => {
    // Validar campos obrigatórios
    if (
      cliente.nome.trim().length === 0 ||
      cliente.nomeSocial.trim().length === 0 ||
      cliente.email.trim().length === 0 ||
      cliente.endereco.codigoPostal.trim().length === 0 ||
      cliente.endereco.bairro.trim().length === 0 ||
      cliente.endereco.cidade.trim().length === 0 ||
      cliente.endereco.estado.trim().length === 0 ||
      cliente.endereco.numero.trim().length === 0 ||
      cliente.endereco.rua.trim().length === 0 ||
      telefones.length === 0
    ) {
      return false;
    }

    // Validar telefones
    for (let i = 0; i < telefones.length; i++) {
      if (
        telefones[i].ddd.trim().length === 0 ||
        telefones[i].numero.trim().length === 0
      ) {
        return false;
      }
    }

    return true;
  };

  const salvar = () => {
    const isValid = validar();
    if (!isValid) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }

    // Criar o cliente completo com telefones
    const clienteCompleto = { ...cliente, telefones };

    // Enviar clienteCompleto para o servidor
    fetch("http://localhost:32831/cliente/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(clienteCompleto),
    }).then((response) => {
      if (response.status === 200) {
        alert("Cliente criado com sucesso!");
      } else {
        alert("Erro ao criar cliente.");
      }
      navigate("/");
    });
  };

  return (
    <div className="container-fluid">
        <div className="margin-lista">
          <h2 style={{ textAlign: "center" }}>Cadastro de clientes</h2>

          {/* Campos de entrada */}
          <div className="input-group mb-3">
            <input
              value={cliente.nome}
              onChange={(e) => setCliente({ ...cliente, nome: e.target.value })}
              type="text"
              className="form-control"
              placeholder="Nome *"
              aria-label="Nome"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <input
              value={cliente.nomeSocial}
              onChange={(e) =>
                setCliente({ ...cliente, nomeSocial: e.target.value })
              }
              type="text"
              className="form-control"
              placeholder="Nome Social *"
              aria-label="Nome Social"
              aria-describedby="basic-addon1"
            />
          </div>

          {/* Campos desabilitados CPF e RG */}
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="CPF *"
              aria-label="CPF"
              aria-describedby="basic-addon1"
              disabled
            />
          </div>

          <div className="input-group mb-3">
            <span
              className="input-group-text"
              id="basic-addon1"
              style={{ background: props.tema}}
            >
              dd/mm/yyyy
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Data de emissão do CPF *"
              aria-label="Data de emissão do CPF"
              aria-describedby="basic-addon1"
              disabled
            />
          </div>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="RG *"
              aria-label="RG"
              aria-describedby="basic-addon1"
              disabled
            />
          </div>
          <div className="input-group mb-3">
            <span
              className="input-group-text"
              id="basic-addon1"
              style={{ background: props.tema}}
            >
              dd/mm/yyyy
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Data de emissão do RG *"
              aria-label="Data de emissão do RG"
              aria-describedby="basic-addon1"
              disabled
            />
          </div>

          {/* Campo de E-mail */}
          <div className="input-group mb-3">
            <input
              value={cliente.email}
              onChange={(e) => setCliente({ ...cliente, email: e.target.value })}
              type="email"
              className="form-control"
              placeholder="E-mail *"
              aria-label="E-mail"
              aria-describedby="basic-addon1"
            />
          </div>

          {/* Campos de endereço */}
          <h4 className="mt-2">Endereço:</h4>
          <div className="input-group mb-3">
            <input
              value={cliente.endereco.estado}
              onChange={(e) =>
                setCliente({ ...cliente, endereco: { ...cliente.endereco, estado: e.target.value } })
              }
              type="text"
              className="form-control"
              placeholder="Estado *"
              aria-label="Estado"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <input
              value={cliente.endereco.cidade}
              onChange={(e) =>
                setCliente({ ...cliente, endereco: { ...cliente.endereco, cidade: e.target.value } })
              }
              type="text"
              className="form-control"
              placeholder="Cidade *"
              aria-label="Cidade"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <input
              value={cliente.endereco.bairro}
              onChange={(e) =>
                setCliente({ ...cliente, endereco: { ...cliente.endereco, bairro: e.target.value } })
              }
              type="text"
              className="form-control"
              placeholder="Bairro *"
              aria-label="Bairro"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <input
              value={cliente.endereco.rua}
              onChange={(e) =>
                setCliente({ ...cliente, endereco: { ...cliente.endereco, rua: e.target.value } })
              }
              type="text"
              className="form-control"
              placeholder="Rua *"
              aria-label="Rua"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <input
              value={cliente.endereco.numero}
              onChange={(e) =>
                setCliente({ ...cliente, endereco: { ...cliente.endereco, numero: e.target.value } })
              }
              type="text"
              className="form-control"
              placeholder="Número *"
              aria-label="Número"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <input
              value={cliente.endereco.codigoPostal}
              onChange={(e) =>
                setCliente({ ...cliente, endereco: { ...cliente.endereco, codigoPostal: e.target.value } })
              }
              type="text"
              className="form-control"
              placeholder="Código Postal *"
              aria-label="Código Postal"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <textarea
              value={cliente.endereco.informacoesAdicionais}
              onChange={(e) =>
                setCliente({ ...cliente, endereco: { ...cliente.endereco, informacoesAdicionais: e.target.value } })
              }
              className="form-control"
              placeholder="Informações Adicionais (Opcional)"
              aria-label="Informações Adicionais"
            />
          </div>

          {/* Pets */}
          <h4 className="mt-2">Pets:</h4>
          <div className="m-4">
            {pets.map((pet, index) => (
              <div key={index} className="input-group mb-3">
                <input
                  value={pet.nome}
                  onChange={(e) => {
                    const newPets = [...pets];
                    newPets[index].nome = e.target.value;
                    setPets(newPets);
                  }}
                  type="text"
                  className="form-control"
                  placeholder="Nome do Pet *"
                  aria-label="Nome do Pet"
                  aria-describedby="basic-addon1"
                />
                <input
                  value={pet.especie}
                  onChange={(e) => {
                    const newPets = [...pets];
                    newPets[index].especie = e.target.value;
                    setPets(newPets);
                  }}
                  type="text"
                  className="form-control"
                  placeholder="Espécie do Pet *"
                  aria-label="Espécie do Pet"
                  aria-describedby="basic-addon1"
                />
                <input
                  value={pet.raca}
                  onChange={(e) => {
                    const newPets = [...pets];
                    newPets[index].raca = e.target.value;
                    setPets(newPets);
                  }}
                  type="text"
                  className="form-control"
                  placeholder="Raça do Pet *"
                  aria-label="Raça do Pet"
                  aria-describedby="basic-addon1"
                />
                <input
                  value={pet.sexo}
                  onChange={(e) => {
                    const newPets = [...pets];
                    newPets[index].sexo = e.target.value;
                    setPets(newPets);
                  }}
                  type="text"
                  className="form-control"
                  placeholder="Sexo do Pet *"
                  aria-label="Sexo do Pet"
                  aria-describedby="basic-addon1"
                />
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => removerPet(index)}
                >
                  Remover
                </button>
              </div>
            ))}
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={adicionarPet}
              disabled
            >
              + Adicionar Pet
            </button>
          </div>


          {/* Telefones */}
          <h4 className="mt-2">Telefones:</h4>
          <div className="m-4">
            {telefones.map((tel, i) => (
              <div key={i} className="input-group mb-3">
                <input
                  value={tel.ddd}
                  onChange={(e) => {
                    const newTelefones = [...telefones];
                    newTelefones[i].ddd = e.target.value;
                    setTelefones(newTelefones);
                  }}
                  type="number"
                  className="form-control"
                  placeholder="DDD *"
                  aria-label="DDD"
                  aria-describedby="basic-addon1"
                />
                <input
                  value={tel.numero}
                  onChange={(e) => {
                    const newTelefones = [...telefones];
                    newTelefones[i].numero = e.target.value;
                    setTelefones(newTelefones);
                  }}
                  type="number"
                  className="form-control"
                  placeholder="Telefone *"
                  aria-label="Telefone"
                  aria-describedby="basic-addon1"
                />
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => removerTelefone(i)}
                >
                  Remover
                </button>
              </div>
            ))}
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={adicionarTelefone}>
              + Adicionar Telefone
            </button>
          </div>
        </div>
        <div className="input-group mb-3">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={salvar}
          >
            Cadastrar
          </button>
        </div>
    </div>
  );
};
