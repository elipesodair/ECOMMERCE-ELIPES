import React, { useState, useEffect } from 'react';
import { Product, ApiProduct } from '../types/Product';
import ProductCard from './ProductCard';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Função para buscar produtos da API
    const fetchProducts = async () => {
      try {
        // Fazendo requisição para a API
        const response = await fetch('https://fakestoreapi.com/products');
        const data: ApiProduct[] = await response.json();
        
        // Transformando dados da API para o formato esperado
        const productsWithStock: Product[] = data.map(product => ({
          ...product,
          inStock: true, // Define `inStock` para todos os produtos
        }));
        setProducts(productsWithStock);
      } catch (error) {
        console.error('Falha ao buscar produtos:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      {/* Mapeando e exibindo cada produto usando ProductCard */}
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
