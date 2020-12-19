import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Switch } from 'react-router-dom' 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './componentes/seguranca/Login';
import AlunosList from './componentes/alunos/AlunosList';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <div className="top-bar">
    <div className="top-bar-left">
      <ul className="dropdown menu" data-dropdown-menu>
        <li className="menu-text">Alunos</li>
        <li>
          <ul className="dropdown menu" data-dropdown-menu>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/login">Autenticação</Link></li>
            <li><Link to="/alunos-list">Alunos</Link></li>
          </ul> 
        </li>
      </ul>
      </div>
      </div> 
      <hr />

      <Switch>
        <BrowserRouter exact path="/"><App /></BrowserRouter>
        <BrowserRouter exact path="/login"><Login /></BrowserRouter>
        <BrowserRouter exact path="/alunos-list"><AlunosList /></BrowserRouter>
      </Switch>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
