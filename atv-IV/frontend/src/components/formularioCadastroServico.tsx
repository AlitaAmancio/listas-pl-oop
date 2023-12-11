import React from "react";
import "./margin.css";

type Props = {
  tema: string;
};

export default function FormularioCadastroServico(props: Props) {
  return (
    <div className="container-fluid">
      <form>
        <div className="margin-lista">
          <h2 style={{ textAlign: "center" }}>Cadastro de serviços</h2>
        </div>
        <div className="margin-lista">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nome"
              aria-label="Nome"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <span
              className="input-group-text"
              id="basic-addon1"
              style={{ background: props.tema}}
            >
              R$
            </span>
            <input
              type="number"
              className="form-control"
              placeholder="Preço"
              aria-label="E-mail"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <button
              className="btn btn-outline-secondary"
              type="button"
            >
              Cadastrar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

