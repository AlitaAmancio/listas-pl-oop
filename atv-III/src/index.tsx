import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Rotas } from './routes/rotas';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import BarraNavegacao from './components/barraNavegacao';
import Footer from './components/footer';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className='total'>
        <div className='superior'>
          <BarraNavegacao tema="#00ced1" />
          <Rotas />
        </div>
        <div className='footer'>
        <Footer />
        </div>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
