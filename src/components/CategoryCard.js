import React from 'react';

function CategoryCard({ item }) {
  const { thumb, title } = item;
  return (
    <div className="products_category_slider_card bg-white h-40 rounded-md cursor-pointer">
      {/* Thumbnail */}
      <div className="products_category_slider_card_image h-28 flex flex-row items-center justify-center mb-2.5 p-5">
        <img src={thumb} alt={title} />
      </div>
      {/* Title */}
      <span className="products_category_slider_card_title text-gray-800 text-center font-semibold">{title}</span>
    </div>
  );
}

export default CategoryCard;
