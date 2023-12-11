import React from "react";
import "./margin.css";

type Props = {
  tema: string;
};

export default function CadastrarPet(props: Props) {
  return (
    <div className="container-fluid">
      <form>
        <div className="margin-lista">
          <h2 style={{ textAlign: "center" }}>Cadastrar um Pet</h2>
        </div>
        <div className="margin-lista">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nome do Pet"
              aria-label="Nome do Pet"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Espécie do Pet"
              aria-label="Espécie do Pet"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Raça do Pet"
              aria-label="Raça do Pet"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Sexo do Pet"
              aria-label="Sexo do Pet"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <button
              className="btn btn-outline-secondary"
              type="button"
              style={{ background: props.tema}}
            >
              Cadastrar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
