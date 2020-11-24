import React from 'react';

function ProductCardBottom({ details }) {
    let { price, discount, title } = details;
    return (
        <div className="product_card-bottom p-5">
            <div className="product-price mb-2.5">
                <span className="price font-semibold text-base">{price}</span>
                <span className="price_drop font-normal ml-2.5 text-sm line-through text-gray-500">{discount}</span>
            </div>
            <h2 className="product-title text-sm text-gray-500 font-poppins-reg">{title}</h2>
        </div>
    );
}

export default ProductCardBottom;
