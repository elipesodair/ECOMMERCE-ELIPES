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
import { CartProvider } from './context/CartContext'; 

const App: React.FC = () => {
  // Obtém a localização atual da URL
  const location = useLocation();

  // Define as rotas disponíveis e seus nomes
  const routes = [
    { name: 'Home', path: '/' },
    { name: 'Categorias', path: '/category' },
    { name: 'Sobre', path: '/about' },
    { name: 'Contato', path: '/contact' },
    { name: 'Carrinho', path: '/cart' },
    { name: 'Detalhes do Produto', path: '/product/:id' },
  ];

  // Encontra a rota atual com base no caminho da URL
  const currentRoute =
    routes.find(route => route.path === location.pathname) || {
      name: 'Not Found',
      path: location.pathname,
    };

  return (
    <CartProvider> {/* Fornece o contexto do carrinho para toda a aplicação */}
      <Header /> {/* Exibe o cabeçalho da aplicação */}
      <Breadcrumb currentRoute={currentRoute} /> {/* Exibe o breadcrumb com a rota atual */}
      <div className="content"> {/* Contém as rotas e suas respectivas páginas */}
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Página inicial */}
          <Route path="/category" element={<CategoryPage />} /> {/* Página de categorias */}
          <Route path="/about" element={<AboutPage />} /> {/* Página sobre */}
          <Route path="/contact" element={<ContactPage />} /> {/* Página de contato */}
          <Route path="/cart" element={<CartPage />} /> {/* Página do carrinho */}
          <Route path="/product/:id" element={<ProductDetail />} /> {/* Página de detalhes do produto */}
        </Routes>
      </div>
    </CartProvider>
  );
};

export default App;
