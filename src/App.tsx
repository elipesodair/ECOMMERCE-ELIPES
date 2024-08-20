import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePages';
import CartPage from './pages/Cartpages';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;

