import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination'; // Importe o componente de paginação
import { Product } from '../types/Product';
import CategoryFilter from '../components/CategoryFilter'; // Importe o CategoryFilter
import '../styles/HomePage.css'; // Adicione o CSS necessário

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setTotalPages(Math.ceil(data.length / 10)); // Exemplo de cálculo de totalPages
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    
    fetchProducts();
  }, []);
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Lógica para carregar produtos da página selecionada
  };

  return (
    <div className="home-page">
      <aside className="category-filter">
        <CategoryFilter />
      </aside>
      <main className="content">
        <div className="product-list">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={handlePageChange} 
        />
      </main>
    </div>
  );
};

export default HomePage;
