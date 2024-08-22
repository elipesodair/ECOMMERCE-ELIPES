import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { useCart } from '../context/CartContext'; // Importe o hook do contexto do carrinho
import '../styles/Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart(); // Utilize o hook do carrinho para acessar os itens do carrinho

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Calcula a quantidade total de itens no carrinho
  const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

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
              {totalItemsInCart > 0 && <span className="cart-count">{totalItemsInCart}</span>} {/* Mostra a quantidade de itens */}
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
