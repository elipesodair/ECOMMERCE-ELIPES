import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Certifique-se de que o módulo esteja instalado
import '../styles/ProductCard.css'; // Verifique se o caminho está correto
import { Product } from '../types/Product'; // Importar a interface correta

interface ProductCardProps {
  product: Product; // Use a interface Product aqui
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card-container">
      <div className="product-card">
        <div className="card-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="add-to-cart">
          <span>Add to Cart</span>
          <FaShoppingCart />
        </div>
      </div>
      <div className="product-title">{product.title}</div>
      <div className="product-details">
        <div className={`in-stock ${product.inStock ? 'in-stock-available' : 'in-stock-unavailable'}`}>
          {product.inStock ? 'IN STOCK' : 'OUT OF STOCK'}
        </div>
        <div className="price">R${product.price.toFixed(2).replace('.', ',')}</div>
      </div>
    </div>
  );
};

export default ProductCard;
