import React from 'react';
import { Table } from 'react-bootstrap';
import './tabelas.css';

export const ClientesCincoMais = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className="col-12">
          <div className="card">
            <h4 className="card-title">Cinco clientes que mais consumiram (em termos de valor)</h4>
            <div className="card-body">
              <Table striped bordered hover className="custom-table">
                <thead>
                  <tr> 
                    <th></th>
                    <th>Nome</th>
                    <th>Valor gasto</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Maria</td>
                    <td>R$ 1200,00</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Júlia</td>
                    <td>R$ 850,00</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Ana</td>
                    <td>R$ 700,00</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Pedro</td>
                    <td>R$ 600,00</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Carla</td>
                    <td>R$ 450,00</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ClientesDezMais = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className="col-12">
          <div className="card">
            <h4 className="card-title">Dez clientes que mais consumiram (em termos de quantidade)</h4>
            <div className="card-body">
              <Table striped bordered hover className="custom-table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Nome</th>
                    <th>Quantidade consumida</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Laura</td>
                    <td>120</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Miguel</td>
                    <td>90</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Beatriz</td>
                    <td>80</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Rafael</td>
                    <td>70</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Isabela</td>
                    <td>60</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Lucas</td>
                    <td>55</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Sophia</td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Mateus</td>
                    <td>45</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>Juliana</td>
                    <td>40</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Fernanda</td>
                    <td>35</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ListagemMaisConsumidos = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className="col-12">
          <div className="card">
            <h4 className="card-title">Produtos mais consumidos</h4>
            <div className="card-body">
              <Table striped bordered hover className="custom-table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Produto</th>
                    <th>Quantidade consumida</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Osso para Cachorro</td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Coleira</td>
                    <td>45</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Bolinha</td>
                    <td>30</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Ração</td>
                    <td>25</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Shampoo para Cachorro</td>
                    <td>10</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ServicosMaisRequisitados = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className="col-12">
          <div className="card">
            <h4 className="card-title">Serviços mais requisitados</h4>
            <div className="card-body">
              <Table striped bordered hover className="custom-table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Serviço</th>
                    <th>Número de vezes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Banho</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Tosa</td>
                    <td>15</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Consulta Veterinária</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Hidratação para Pelagem</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Corte de Unhas</td>
                    <td>5</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
