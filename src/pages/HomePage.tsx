import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter'; // Importa o componente CategoryFilter
import '../styles/HomePage.css'; // Importa o CSS para estilizar a página

// Define a interface para os produtos
interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  inStock: boolean;
}

const HomePage: React.FC = () => {
  // Estado para armazenar a lista de produtos
  const [products, setProducts] = useState<Product[]>([]);

  // Hook para buscar produtos quando o componente é montado
  useEffect(() => {
    fetch('https://fakestoreapi.com/products') // Faz a requisição para a API
      .then(res => res.json()) // Converte a resposta para JSON
      .then(data => setProducts(data)) // Atualiza o estado com os produtos
      .catch(error => console.error('Error fetching products:', error)); // Trata erros
  }, []); // Dependência vazia significa que o efeito só roda na montagem

  return (
    <div className="home-page">
      <CategoryFilter /> {/* Substitui o <h1> pelo componente CategoryFilter */}
      <div className="product-list">
        {/* Mapeia a lista de produtos e renderiza um ProductCard para cada um */}
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
