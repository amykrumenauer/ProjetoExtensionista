import React from 'react';
import './Contato.css';
import whatsappIcon from '../assets/whatsapp.png';
import instagramIcon from '../assets/instagram.png';
import facebookIcon from '../assets/facebook.png';

const Contato = () => {
  return (
    <section id="contato" className="contato">
      <h2 className="contato-titulo">Entre em contato</h2>
      <p className="contato-texto">
        Na Peixaria e Empório do Vale, nossa jornada é guiada pelos pilares da tradição e da qualidade. Localizados no coração da Fazendinha, nossa missão é levar o sabor e a frescura do mar diretamente para você. 
        <br />
        Venha nos visitar ou envie uma mensagem para descobrir ofertas exclusivas que preparamos especialmente para você! 
      </p>

      <div className="contato-conteudo">
        <div className="contato-icones">
          <a href="https://wa.me/5541991064083" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="WhatsApp" className="icone-img" />
          </a>
          <a href="https://instagram.com/peixariaeemporiodovale/" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="icone-img" />
          </a>
          <a href="https://facebook.com/peixariaemporiodovale/" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" className="icone-img" />
          </a>
        </div>

        <div className="contato-mapa">
          <iframe
            title="Localização da Peixaria"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d900.4496833405726!2d-49.32758447150677!3d-25.478395221392972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce3f65b4831cf%3A0x35a3fa648ce7bb35!2sPeixaria%20e%20Emp%C3%B3rio%20do%20Vale!5e0!3m2!1spt-BR!2sbr!4v1753890782816!5m2!1spt-BR!2sbr"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: '10px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default Contato;
