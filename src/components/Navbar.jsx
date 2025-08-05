import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Peixaria & Empório do Vale</div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#produtos">Produtos</a></li>
        <li><a href="#sobre">Sobre nós</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
