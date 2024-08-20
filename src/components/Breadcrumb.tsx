import React from 'react';
import '../styles/Breadcrumb.css';

interface BreadcrumbProps {
  currentRoute: { name: string; path: string };
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ currentRoute }) => {
  return (
    <div className="breadcrumb">
      <span>Ecommerce</span> &gt; <span className="current">{currentRoute.name}</span>
    </div>
  );
};

export default Breadcrumb;
