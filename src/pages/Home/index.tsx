import React from 'react';

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import './styles.css';

import logoImg from '../../assets/images/logo.svg';
import homeImg from '../../assets/images/Saly-10.svg';

export default function Home() {
  return (
    <div className="wrapper">
      <Helmet>
        <title>Home | DevTask</title>
        <meta
          name="description"
          content="Bem-vindo à DevTask, sua plataforma para conectar desenvolvedores e empresas."
        />
      </Helmet>
      <header className="header">
        <div className="logo">
          <img src={logoImg} alt="DevTask" />
        </div>
        <nav className="nav">
          <ul className="navList">
            <li className="navItem">
              <Link to="/register" className="cta cta-border register">
                Cadastre-se
              </Link>
            </li>
            <li className="navItem">
              <Link to="/Login" className="cta">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main-home">
        <div className="container">
          <div className="subtitle">#2 top Best DEV PLATAFORM</div>
          <div className="title">Experiência alinhada ao conhecimento!</div>
          <div className="text">
            Anuncie seus trabalhos e encontre clientes de forma simples e
            rápida.
          </div>
          <div className="ctas">
            <Link to="/register" className="cta">
              Criar conta
            </Link>
            <Link to="/portfolio" className="cta cta-purple">
              Ver Projetos
            </Link>
          </div>
        </div>
        <div className="container-home-image">
          <img src={homeImg} alt="DevTask" className="home-img" />
          <div className="floor" />
        </div>
      </main>
    </div>
  );
}
