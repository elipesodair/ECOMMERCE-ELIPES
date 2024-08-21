import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CatalogPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage'; // Importe o CartPage

const App: React.FC = () => {
  const location = useLocation();

  const routes = [
    { name: 'Home', path: '/' },
    { name: 'Categorias', path: '/category' },
    { name: 'Sobre', path: '/about' },
    { name: 'Contato', path: '/contact' },
    { name: 'Carrinho', path: '/cart' }, // Adicione a rota do carrinho
  ];

  const currentRoute =
    routes.find(route => route.path === location.pathname) || {
      name: 'Not Found',
      path: location.pathname,
    };

  return (
    <>
      <Header />
      <Breadcrumb currentRoute={currentRoute} />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} /> {/* Rota do carrinho */}
        </Routes>
      </div>
    </>
  );
};

export default App;
