// src/components/ProductCard.tsx
import React from 'react';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { useCart } from '../context/CartContext'; 
import { Product } from '../types/Product';
import '../styles/ProductCard.css';

interface ProductCardProps {
  product: Product; // Define o tipo do produto
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart(); // Hook para adicionar produtos ao carrinho

  // Função para adicionar o produto ao carrinho
  const handleAddToCart = () => {
    if (product.inStock) { // Verifica se o produto está em estoque
      addToCart({ ...product, quantity: 1 });
    }
  };

  return (
    <div className="product-card-container">
      <div className="product-card">
        <div className="card-image">
          <img src={product.image} alt={product.title} /> {/* Imagem do produto */}
        </div>
        <div className="favorite-icon">
          <FaHeart /> {/* Ícone de favorito */}
        </div>
        <div className="add-to-cart" onClick={handleAddToCart}>
          <span>Add to Cart</span> {/* Texto para adicionar ao carrinho */}
          <FaShoppingCart /> {/* Ícone do carrinho de compras */}
        </div>
      </div>
      <div className="product-title">{product.title}</div> {/* Título do produto */}
      <div className="product-details">
        <div className={`in-stock ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
          {product.inStock ? 'In Stock' : 'Out of Stock'} {/* Disponibilidade do produto */}
        </div>
        <div className="price">R$ {product.price.toFixed(2)}</div> {/* Preço do produto */}
      </div>
    </div>
  );
};

export default ProductCard;
