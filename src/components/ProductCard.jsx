import React, { useState } from 'react';
import '../styles/ProductCard.css';


function ProductCard({ name, images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleMouseMove = (event) => {
    const { offsetX, target } = event.nativeEvent;
    const width = target.clientWidth;
    const newImageIndex = Math.floor((offsetX / width) * images.length);
    setCurrentImageIndex(newImageIndex % images.length);
  };

  const handleIndicatorClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="product-card">
      <img
        src={images[currentImageIndex]}
        alt={name}
        className="product-image"
        onMouseMove={handleMouseMove}
      />
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => handleIndicatorClick(index)}
          ></div>
        ))}
      </div>
      <p className="product-name">{name}</p>
    </div>
  );
}

export default ProductCard;