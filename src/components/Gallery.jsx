import React, { useState } from 'react';
import PropTypes from 'prop-types';
import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg';

function Gallery({
  className = '',
  width = '100%',
  radius = '0px',
  images = [],
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const containerWidth = typeof width === 'number' ? `${width}px` : width;

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className={`relative ${className}`} style={{ width: containerWidth }}>
      <div className="relative w-full">
        {images.length > 0 && (
          <img
            src={images[currentIndex].src}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-auto select-none object-cover"
            style={{ borderRadius: radius }}
            draggable={false}
          />
        )}

        {/* Seta esquerda */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full shadow-md transition-opacity ${
            currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 cursor-pointer'
          }`}
          style={{ marginLeft: '12px' }}
          aria-label="Imagem anterior"
          type="button"
        >
          <img src={arrowLeft} alt="Seta esquerda" className="w-6 h-6" />
        </button>

        {/* Seta direita */}
        <button
          onClick={handleNext}
          disabled={currentIndex === images.length - 1}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full shadow-md transition-opacity ${
            currentIndex === images.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 cursor-pointer'
          }`}
          style={{ marginRight: '12px' }}
          aria-label="Próxima imagem"
          type="button"
        >
          <img src={arrowRight} alt="Seta direita" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

Gallery.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  radius: PropTypes.string,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Gallery;
