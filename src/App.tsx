import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePages'; // Verifique se esses arquivos existem
import CartPage from './pages/CartPages';
import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';

function App() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
