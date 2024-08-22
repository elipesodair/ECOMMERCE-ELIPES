import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { useCart } from '../context/CartContext'; // Importa o hook do contexto do carrinho
import '../styles/Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar a abertura do menu
  const { cart } = useCart(); // Hook do carrinho para acessar itens do carrinho

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alterna o estado do menu
  };

  // Conta o total de itens no carrinho
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
          {isMenuOpen ? <FaTimes /> : <FaBars />} {/* Ícone para abrir/fechar o menu */}
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
              <FaSearch /> {/* Ícone de busca */}
            </button>
          </div>
          <div className="cart-login">
            <a href="/cart" className="cart-icon">
              <FaShoppingCart /> {/* Ícone do carrinho */}
              {totalItemsInCart > 0 && <span className="cart-count">{totalItemsInCart}</span>} {/* Mostra a quantidade de itens no carrinho */}
            </a>
            <a href="/login" className="login-icon">
              <FaUser /> {/* Ícone de login */}
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
