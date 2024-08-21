import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
        <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
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
