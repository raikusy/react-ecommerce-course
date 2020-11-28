import React from 'react';
import ProductCardBottom from './product-card/ProductCardBottom';
import ProductCardTop from './product-card/ProductCardTop';

function ProductCard({ details, ...props }) {
  return (
    <div className="overflow-hidden text-left transition duration-200 transform bg-white rounded product_card hover:shadow-sm hover:-translate-y-1">
      <ProductCardTop details={details} />

      <ProductCardBottom details={details} />
    </div>
  );
}

export default ProductCard;
