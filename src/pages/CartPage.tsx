import React from 'react';
import '../styles/CartPage.css';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  // Obtém as funções e dados do carrinho do contexto
  const { cart, removeFromCart, updateQuantity } = useCart();

  // Calcula o subtotal dos itens no carrinho
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  // Define valores fixos para o frete e calcula o imposto
  const shipping = 20; // Valor fixo de frete
  const tax = subtotal * 0.1; // 10% de imposto
  
  // Calcula o total
  const total = subtotal + shipping + tax;

  return (
    <div className="cart-page">
      <div className="cart-content">
        <h2>Seu Carrinho</h2>
        <hr />
        <div className="cart-items">
          {/* Verifica se o carrinho está vazio */}
          {cart.length === 0 ? (
            <p>Seu carrinho está vazio.</p>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-item">
                {/* Exibe a imagem do item */}
                <img src={item.image} alt={item.title} className="item-image" />
                {/* Exibe o título e o preço do item */}
                <span className="item-title">{item.title}</span>
                <span className="item-price">R$ {item.price.toFixed(2)}</span>
                <div className="item-controls">
                  {/* Botões para atualizar a quantidade do item */}
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                {/* Botão para remover o item do carrinho */}
                <button className="remove-button" onClick={() => removeFromCart(item.id)}>X</button>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="order-summary">
        <h3>Resumo do Pedido</h3>
        {/* Exibe o subtotal, frete, imposto e total */}
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
        {/* Botões para finalizar a compra ou continuar na loja */}
        <button className="checkout-button">Checkout</button>
        <a href="/" className="continue-shopping">Continuar na Loja</a>
      </div>
    </div>
  );
};

export default CartPage;
