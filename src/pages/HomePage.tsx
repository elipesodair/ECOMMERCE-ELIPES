// src/pages/HomePage.tsx
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Product } from '../types/Product';
import '../styles/HomePage.css'; // Adicione o CSS necessário

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    
    fetchProducts();
  }, []);
  
  return (
    <div className="home-page">
      <h1>Product List</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
