import React from 'react';
import './Sobre.css';
import fachada from '../assets/fachada.jpg';

const Sobre = () => {
  return (
    <section id="sobre" className="sobre">
      <h2 className="sobre-titulo">Sobre nós</h2>
      <p className="sobre-texto">
        A Peixaria e Empório do Vale é uma empresa familiar localizada em Curitiba – PR, que há três anos leva qualidade incomparável em pescados e produtos coloniais para sua mesa.
        <br />
        Oferecemos o melhor em peixes e frutos do mar, com variedade, atendimento personalizado e produtos selecionados para garantir refeições deliciosas e saudáveis.
      </p>
      <img src={fachada} alt="Fachada da Peixaria" className="sobre-img" />
    </section>
  );
};

export default Sobre;
