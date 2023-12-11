import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome, FaUsers, FaShoppingCart, FaAddressCard, FaChartBar, FaShoppingBasket, FaFacebook, FaInstagram } from 'react-icons/fa';
import './footer.css';

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h5>Início</h5>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/home">
                <FaHome /> Início
              </Nav.Link>
            </Nav>
          </div>
          <div className="col">
            <h5>Clientes</h5>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/cadastro-cliente">
                <FaUsers /> Cadastro de clientes
              </Nav.Link>
              <Nav.Link as={Link} to="/lista-clientes">
                <FaUsers /> Listar todos os clientes
              </Nav.Link>
            </Nav>
          </div>
          <div className="col">
            <h5>Produtos</h5>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/cadastro-produto">
                <FaShoppingCart /> Cadastro de produtos
              </Nav.Link>
              <Nav.Link as={Link} to="/lista-produtos">
                <FaShoppingCart /> Listar todos os produtos
              </Nav.Link>
            </Nav>
          </div>
          <div className="col">
            <h5>Serviços</h5>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/cadastro-servico">
                <FaShoppingBasket /> Cadastro de serviços
              </Nav.Link>
              <Nav.Link as={Link} to="/lista-servicos">
                <FaShoppingBasket /> Listar todos os serviços
              </Nav.Link>
            </Nav>
          </div>
          <div className="col">
            <h5>Cadastros adicionais</h5>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/cadastrar-rg">
                <FaAddressCard /> Cadastrar um RG
              </Nav.Link>
              <Nav.Link as={Link} to="/cadastrar-telefone">
                <FaAddressCard /> Cadastrar um telefone
              </Nav.Link>
              <Nav.Link as={Link} to="/cadastrar-pet">
                <FaAddressCard /> Cadastrar um Pet
              </Nav.Link>
            </Nav>
          </div>
          <div className="col">
            <h5>Dashboard</h5>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/dashboard">
                <FaChartBar /> Dashboard
              </Nav.Link>
            </Nav>
          </div>
        </div>
        <hr className="w-100" />
        <div className="row mt-4">
          <div className="col">
            <h5>Contato</h5>
            <p>Endereço: Rua Fictícia, 123</p>
            <p>Email: contato@petlovers.com</p>
            <p>Telefone: (12) 3456-7890</p>
          </div>
          <div className="col">
            <h5>Redes Sociais</h5>
            <p>
              <FaFacebook />
              petlovers
            </p>
            <p>
              <FaInstagram />
              petlovers_oficial
            </p>
          </div>
          <div className="col">
            <h5>Sobre Nós</h5>
            <p>Empresa dedicada ao bem-estar dos animais de estimação. Nosso compromisso é proporcionar serviços de alta qualidade e produtos excepcionais para clientes e seus animais.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
