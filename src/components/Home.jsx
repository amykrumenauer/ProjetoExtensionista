import React from 'react';
import './Home.css';
import tilapia from '../assets/tilapia.png'; 

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-left">
        <h1 className="title">Nossos peixes, seu sorriso. Qualidade incomparável!</h1>
        <p className="subtitle">Eleita a melhor Tilápia fresca da região!</p>
        <a
          href="https://wa.me/5541991064083" 
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          Faça seu pedido
        </a>
      </div>
      <div className="home-right">
        <img src={tilapia} alt="Tilápia Fresca" className="tilapia-img" />
      </div>
    </section>
  );
};

export default Home;