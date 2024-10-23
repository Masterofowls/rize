import React from 'react';
import ProductCard from './ProductCard';
import '../styles/ProductList.css';

// Импортируем изображения напрямую
import image1 from '../images/1.png';
import image2 from '../images/3.png';
import image3 from '../images/4.png';

function ProductList() {
  const products = [
    { id: 1, name: 'Product 1', images: [image1, image2, image3] },
    { id: 2, name: 'Product 2', images: [image1, image2, image3] },
    { id: 3, name: 'Product 3', images: [image1, image2, image3] }, 
    { id: 4, name: 'Product 4', images: [image1, image2, image3] },
    { id: 5, name: 'Product 5', images: [image1, image2, image3] },
    { id: 6, name: 'Product 6', images: [image1, image2, image3] },
    { id: 7, name: 'Product 7', images: [image1, image2, image3] },
    { id: 8, name: 'Product 8', images: [image1, image2, image3] },
    { id: 9, name: 'Product 9', images: [image1, image2, image3] },
    { id: 10, name: 'Product 10', images: [image1, image2, image3] },
  ];

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} name={product.name} images={product.images} />
      ))}
    </div>
  );
}

export default ProductList;