import React from 'react';
import './margin.css';

type Props = {
  tema: string;
};

export default function ListaServicos(props: Props) {
  return (
    <div className="container-fluid">
      <div className="list-group">
        <div className="margin-lista">
          <h2 style={{ textAlign: "center" }}>Listagem de serviços</h2>
          <a href="#" className={`list-group-item list-group-item-action ${props.tema}`}>Serviço 1</a>
          <a href="#" className={`list-group-item list-group-item-action ${props.tema}`}>Serviço 2</a>
          <a href="#" className={`list-group-item list-group-item-action ${props.tema}`}>Serviço 3</a>
          <a href="#" className={`list-group-item list-group-item-action ${props.tema}`}>Serviço 4</a>
          <a href="#" className={`list-group-item list-group-item-action ${props.tema}`}>Serviço 5</a>
        </div>
      </div>
    </div>
  );
};
