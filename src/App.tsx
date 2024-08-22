// src/App.tsx
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CatalogPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import ProductDetail from './components/ProductDetail';
import { CartProvider } from './context/CartContext'; // Importe o CartProvider

const App: React.FC = () => {
  const location = useLocation();

  const routes = [
    { name: 'Home', path: '/' },
    { name: 'Categorias', path: '/category' },
    { name: 'Sobre', path: '/about' },
    { name: 'Contato', path: '/contact' },
    { name: 'Carrinho', path: '/cart' },
    { name: 'Detalhes do Produto', path: '/product/:id' },
  ];

  const currentRoute =
    routes.find(route => route.path === location.pathname) || {
      name: 'Not Found',
      path: location.pathname,
    };

  return (
    <CartProvider> {/* Envolva todo o conteúdo com CartProvider */}
      <Header />
      <Breadcrumb currentRoute={currentRoute} />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </CartProvider>
  );
};

export default App;
