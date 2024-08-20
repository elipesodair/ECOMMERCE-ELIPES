import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  const location = useLocation();

  // Define as rotas que serão usadas para determinar a rota atual
  const routes = [
    { name: 'Home', path: '/' },
    { name: 'Categorias', path: '/category' },
    { name: 'Sobre', path: '/about' },
    { name: 'Contato', path: '/contact' },
  ];

  // Encontra a rota atual
  const currentRoute = routes.find(route => route.path === location.pathname) || { name: 'Not Found', path: location.pathname };

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
        </Routes>
      </div>
    </>
  );
};

export default App;
