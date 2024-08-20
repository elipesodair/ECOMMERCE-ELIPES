// src/components/Header.tsx
import React from 'react';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import '../styles/Header.css'; // Adicione estilos conforme abaixo

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://urotruzzi.com.br/images/hospitais/albert_einstein.png" alt="Ecommerce Logo" />
        <span>Ecommerce</span>
      </div>
      <nav className="nav-menu">
        <a href="/">Home</a>
        <a href="/categories">Categorias</a>
        <a href="/about">Sobre</a>
        <a href="/contact">Contato</a>
      </nav>
      <div className="search-cart">
        <div className="search-bar">
          <input type="text" placeholder="Procure um produto" />
          <button className="search-button">
            <FaSearch />
          </button>
        </div>
        <div className="cart-login">
          <a href="/cart" className="cart-icon">
            <FaShoppingCart />
          </a>
          <a href="/login" className="login-icon">
            <FaUser />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
