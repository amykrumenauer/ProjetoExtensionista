import React from 'react';
import './Sobre.css';
import fachada from '../assets/fachada.png';

const Sobre = () => {
  return (
    <section id="sobre" className="sobre">
      <h2 className="sobre-titulo">Sobre nós</h2>
      <p className="sobre-texto">
        A Peixaria e Empório do Vale é uma empresa familiar localizada em Curitiba – PR, que há três anos leva qualidade incomparável em pescados e produtos coloniais para sua mesa.
        <br />
        Oferecemos peixes frescos, frutos do mar, conservas, empanados e muito mais — tudo com aquele toque caseiro e atendimento de confiança. Atendemos tanto no varejo quanto no atacado, sempre com foco na excelência e no carinho com cada cliente.
      </p>
      <img src={fachada} alt="Fachada da Peixaria" className="sobre-img" />
    </section>
  );
};

export default Sobre;
