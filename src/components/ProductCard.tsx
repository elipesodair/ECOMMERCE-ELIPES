import React from 'react';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import '../styles/ProductCard.css';

interface ProductCardProps {
  product: {
    image: string;
    title: string;
    price: number;
    inStock: boolean;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card-container">
      <div className="product-card">
        <div className="card-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="favorite-icon">
          <FaHeart />
        </div>
        <div className="add-to-cart">
          <span>Add to Cart</span>
          <FaShoppingCart />
        </div>
      </div>
      <div className="product-title">{product.title}</div>
      <div className="product-details">
        <div className="in-stock">{product.inStock ? 'In Stock' : 'Out of Stock'}</div>
        <div className="price">R$ {product.price.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
