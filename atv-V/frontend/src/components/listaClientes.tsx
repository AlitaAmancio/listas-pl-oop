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
      <div className="list-group">
        {clientes &&
          clientes.length > 0 &&
          clientes.map((cliente) => (
            <a
              key={cliente.id}
              className={`list-group-item list-group-item-action mt-2 ${props.tema}`}
            >
              <h3 className="col">{cliente.nome} </h3>
              <p>Nome social: {cliente.nomeSocial}</p>
              <p>Email: {cliente.email}</p>
              <p>Endereço: {formatEndereco(cliente.endereco)}</p>
              {cliente.endereco.informacoesAdicionais &&
                cliente.endereco.informacoesAdicionais.length > 0 ? (
                <p>({cliente.endereco.informacoesAdicionais})</p>
              ) : (
                ""
              )}
              {cliente.telefones && cliente.telefones.length > 0 && (
                <>
                  <p>Telefone(s):</p>
                  {formatTelefone(cliente.telefones)}
                </>
              )}


              <button
                className="col m-2 btn btn-light"
                onClick={(e) => editarCliente(cliente)}
              >
                Editar
              </button>
              <button
                className="col m-2 btn btn-light"
                onClick={(e) => excluirCliente(cliente.id)}
              >
                Excluir
              </button>
            </a>
          ))}
      </div>
    </div>
  );
};

