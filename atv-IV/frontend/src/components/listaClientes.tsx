import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./margin.css";

type Cliente = {
  id: number;
  nome: string;
  nomeSocial: string;
  email: string;
  endereco: {
    rua: string;
    numero: number;
    codigoPostal: string;
    bairro: string;
    cidade: string;
    estado: string;
    informacoesAdicionais?: string;
  };
  telefones?: { id: number; ddd: string; numero: string }[];
};

type Props = {
  tema: string;
};

export default function ListaCliente(props: Props) {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (clientes.length > 0) return;
    loadClientes();
  }, []);

  function loadClientes() {
    fetch("http://localhost:32831/cliente/clientes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((r: Cliente[]) => {
        setClientes(r);
        console.log(r);
      });
  }

  function excluirCliente(id: number) {
    fetch("http://localhost:32831/cliente/excluir", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    }).then((r) => {
      alert(
        r.status === 200
          ? "Cliente excluído com sucesso!"
          : "Erro ao excluir cliente."
      );
      setClientes([]);
      loadClientes();
    });
  }

  function editarCliente(cliente: Cliente) {
    navigate("/editar-cliente", { state: cliente });
  }

  function formatEndereco(endereco: Cliente["endereco"]) {
    return `${endereco.rua} - ${endereco.numero}, ${endereco.codigoPostal}, ${endereco.bairro}, ${endereco.cidade}, ${endereco.estado}`;
  }

  function formatTelefone(telefones: Cliente["telefones"]) {
    if (telefones && telefones.length > 0) {
      return telefones.map((telefone) => (
        <p key={telefone.id}>{`(${telefone.ddd}) ${telefone.numero}`}</p>
      ));
    }
    return '';
  }



return (
  <div className="container-fluid">
    <div className={`list-group ${props.tema}`}>
      {clientes &&
        clientes.length > 0 &&
        clientes.map((cliente) => (
          <div
            key={cliente.id}
            className="list-group-item list-group-item-action mt-2"
          >
            <div className="d-flex w-100 justify-content-between">
              <h3 className="mb-1">{cliente.nome}</h3>
              <div>
                <button
                  className="btn btn-light mr-2"
                  onClick={(e) => editarCliente(cliente)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-light"
                  onClick={(e) => excluirCliente(cliente.id)}
                >
                  Excluir
                </button>
              </div>
            </div>
            <p className="mb-1">Nome social: {cliente.nomeSocial}</p>
            <p className="mb-1">Email: {cliente.email}</p>
            <p className="mb-1">Endereço: {formatEndereco(cliente.endereco)}</p>
            {cliente.endereco.informacoesAdicionais &&
              cliente.endereco.informacoesAdicionais.length > 0 && (
                <p className="mb-1">
                  Informações Adicionais: {cliente.endereco.informacoesAdicionais}
                </p>
              )}
            {cliente.telefones && cliente.telefones.length > 0 && (
              <div>
                <p className="mb-1">Telefone(s):</p>
                {formatTelefone(cliente.telefones)}
              </div>
            )}
          </div>
        ))}
    </div>
  </div>
);

};

