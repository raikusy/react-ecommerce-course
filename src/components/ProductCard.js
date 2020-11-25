import React from 'react';
import ProductCardBottom from './Product Card/ProductCardBottom';
import ProductCardTop from './Product Card/ProductCardTop';

function ProductCard({ details, ...props }) {
  return (
    <div className="product_card bg-white text-left rounded overflow-hidden hover:shadow-sm transition duration-200 transform hover:-translate-y-1">
      <ProductCardTop details={details} />

      <ProductCardBottom details={details} />
    </div>
  );
}

export default ProductCard;
