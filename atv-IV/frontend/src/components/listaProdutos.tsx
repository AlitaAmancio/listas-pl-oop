import React from 'react';
import './margin.css';

type Props = {
  tema: string;
};

export default function ListaProdutos(props: Props) {
  return (
    <div className="container-fluid">
      <div className="list-group">
        <div className="margin-lista">
          <h2 style={{ textAlign: "center" }}>Listagem de produtos</h2>
          <a href="#" className={`list-group-item list-group-item-action ${props.tema}`}>Produto 1</a>
          <a href="#" className={`list-group-item list-group-item-action ${props.tema}`}>Produto 2</a>
          <a href="#" className={`list-group-item list-group-item-action ${props.tema}`}>Produto 3</a>
          <a href="#" className={`list-group-item list-group-item-action ${props.tema}`}>Produto 4</a>
          <a href="#" className={`list-group-item list-group-item-action ${props.tema}`}>Produto 5</a>
        </div>
      </div>
    </div>
  );
};

