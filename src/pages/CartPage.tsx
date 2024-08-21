import React from 'react';
import '../styles/CartPage.css';

const CartPage: React.FC = () => {
  // Aqui você pode usar um estado para gerenciar os produtos no carrinho
  const cartItems = [
    { id: 1, title: 'Produto 1', price: 100, quantity: 1, image: 'link-da-imagem-1' },
    { id: 2, title: 'Produto 2', price: 200, quantity: 2, image: 'link-da-imagem-2' },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 20; // Exemplo de valor fixo de frete
  const tax = subtotal * 0.1; // Exemplo de 10% de imposto
  const total = subtotal + shipping + tax;

return (
  <div className="cart-page">
    <div className="cart-content">
      <h2>Seu Carrinho</h2>
      <hr />
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} className="item-image" />
            <span className="item-title">{item.title}</span>
            <span className="item-price">R$ {item.price.toFixed(2)}</span>
            <div className="item-controls">
              <button>-</button>
              <span>{item.quantity}</span>
              <button>+</button>
            </div>
            <button className="remove-button">X</button>
          </div>
        ))}
      </div>
    </div>

    <div className="order-summary">
      <h3>Order Summary</h3>
      <div className="summary-item">
        <span>Subtotal</span>
        <span>R$ {subtotal.toFixed(2)}</span>
      </div>
      <div className="summary-item">
        <span>Frete</span>
        <span>R$ {shipping.toFixed(2)}</span>
      </div>
      <div className="summary-item">
        <span>Tax</span>
        <span>R$ {tax.toFixed(2)}</span>
      </div>
      <hr />
      <div className="summary-total">
        <span>Total</span>
        <span>R$ {total.toFixed(2)}</span>
      </div>
      <button className="checkout-button">Checkout</button>
      <a href="/" className="continue-shopping">Continue na Loja</a>
    </div>
  </div>
);

};

export default CartPage;
