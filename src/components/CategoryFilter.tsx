import React, { useState } from 'react';
import { FaFilter } from 'react-icons/fa'; 
import '../styles/CategoryFilter.css'; 

const CategoryFilter: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false); // Gerencia o estado de expansão do filtro

  const toggleExpand = () => {
    setIsExpanded(!isExpanded); // Alterna entre expandido e recolhido
  };

  return (
    <div className={`category-card ${isExpanded ? 'expanded' : ''}`}>
      <h3 onClick={toggleExpand}>
        Categories
        <FaFilter className="filter-icon" /> {/* Ícone de filtro */}
      </h3>
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
        {/* Mais categorias podem ser adicionadas aqui */}
      </ul>
    </div>
  );
};

export default CategoryFilter;
