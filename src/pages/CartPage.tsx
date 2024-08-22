// src/pages/CartPage.tsx
import React, { useContext } from 'react';
import '../styles/CartPage.css';
import { useCart } from '../context/CartContext'; // Verifique se o caminho está correto

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useCart(); // Use o hook useCart

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 20; // Exemplo de valor fixo de frete
  const tax = subtotal * 0.1; // Exemplo de 10% de imposto
  const total = subtotal + shipping + tax;

  return (
    <div className="cart-page">
      <div className="cart-content">
        <h2>Seu Carrinho</h2>
        <hr />
        <div className="cart-items">
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="item-image" />
              <span className="item-title">{item.title}</span>
              <span className="item-price">R$ {item.price.toFixed(2)}</span>
              <div className="item-controls">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <button className="remove-button" onClick={() => removeFromCart(item.id)}>X</button>
            </div>
          ))}
        </div>
      </div>

      <div className="order-summary">
        <h3>Resumo do Pedido</h3>
        <div className="summary-item">
          <span>Subtotal</span>
          <span>R$ {subtotal.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <span>Frete</span>
          <span>R$ {shipping.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <span>Imposto</span>
          <span>R$ {tax.toFixed(2)}</span>
        </div>
        <hr />
        <div className="summary-total">
          <span>Total</span>
          <span>R$ {total.toFixed(2)}</span>
        </div>
        <button className="checkout-button">Checkout</button>
        <a href="/" className="continue-shopping">Continuar na Loja</a>
      </div>
    </div>
  );
};

export default CartPage;
