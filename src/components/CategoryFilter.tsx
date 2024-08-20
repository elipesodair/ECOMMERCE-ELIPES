import React from 'react';
import '../styles/CategoryFilter.css';

const CategoryFilter: React.FC = () => {
  return (
    <div className="category-card">
      <h3>Categories</h3>
      <ul>
        <li>
          <input type="checkbox" id="perfumes" name="perfumes" />
          <label htmlFor="perfumes">Perfumes</label>
        </li>
        <li>
          <input type="checkbox" id="camisetas" name="camisetas" />
          <label htmlFor="camisetas">Camisetas</label>
        </li>
        <li>
          <input type="checkbox" id="joias" name="joias" />
          <label htmlFor="joias">Joias</label>
        </li>
      </ul>
    </div>
  );
};

export default CategoryFilter;
