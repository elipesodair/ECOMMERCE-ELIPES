import React from 'react';

const Breadcrumb: React.FC = () => {
  return (
    <div className="breadcrumb">
      <p>Ecommerce &gt; Home</p> {/* Use &gt; para evitar problemas de sintaxe */}
    </div>
  );
};

export default Breadcrumb;
