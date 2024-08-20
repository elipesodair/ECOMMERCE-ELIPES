import React from 'react';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <>
      <div className="promo-banner">
        Ganhe 25% OFF no seu primeiro pedido.
      </div>
      <header className="header">
        <div className="logo">
          <img src="https://urotruzzi.com.br/images/hospitais/albert_einstein.png" alt="Ecommerce Logo" />
          <span>Ecommerce</span>
        </div>
        <nav className="nav-menu">
          <a href="/">Home</a>
          <a href="/category">Categorias</a>
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
    </>
  );
};

export default Header;
