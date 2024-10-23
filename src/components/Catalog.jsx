import React from 'react';
import ProductList from './ProductList.jsx';

function Catalog() {
  return (
    <div className="catalog-section full-width">
      <h2>Our Catalog</h2>
      <ProductList />
    </div>
  );
}

export default Catalog;