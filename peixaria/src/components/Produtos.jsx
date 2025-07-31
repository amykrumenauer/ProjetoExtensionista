import React from 'react';
import './Produtos.css';
import peixaria from '../assets/peixaria.png'; 
import cardapioPDF from '../assets/cardapio.pdf'; 

const Produtos = () => {
  return (
    <section id="produtos" className="produtos">
      <h2 className="produtos-titulo">Conheça nossos produtos</h2>
      <p className="produtos-descricao">
        Descubra a variedade de pescados, camarões, frutos do mar e produtos coloniais que a Peixaria & Empório do Vale oferece.
        Tudo com qualidade incomparável e aquele toque caseiro que você merece.
      </p>

      <img src={peixaria} alt="Imagem da Peixaria" className="produtos-img" />

      <a
        href={cardapioPDF}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-cardapio"
      >
        Ver Cardápio PDF
      </a>

      <p className="produtos-mensagem">
        Produtos com preços negociáveis para empresas e revendedores.
      </p>
    </section>
  );
};

export default Produtos;

