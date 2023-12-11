import React from 'react';
import { ClientesCincoMais, ClientesDezMais, ListagemMaisConsumidos, ServicosMaisRequisitados } from './tabelas';
import './dashboard.css';

const Dashboard = () => {
  return (
    <>
      <div className="margin-lista">
        <h2 style={{ textAlign: "center" }}>Dashboard</h2>
      </div>
      <div className="margin-lista">
        <ClientesCincoMais />
        <ClientesDezMais />
      </div>
      <div className="double-table">
        <div className="half-width">
          <ListagemMaisConsumidos />
        </div>
        <div className="half-width">
          <ServicosMaisRequisitados />
        </div>
      </div>
    </>
  );
};


export default Dashboard;
