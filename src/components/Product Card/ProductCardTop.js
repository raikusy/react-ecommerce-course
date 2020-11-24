import React, { useState } from 'react';
import Button from '../Button';
import { BiPlus, BiMinus } from 'react-icons/bi';

function ProductCardTop({ details, ...props }) {
    let { thumb } = details;
    // Add to Cart Product Counter state
    let [counter, setCounter] = useState(0);
    let increment = (prev) => setCounter(prev + 1);
    let decrement = (prev) => setCounter(prev - 1);

    return (
        <div className="product_card-top relative">
            <div className="discount bg-green-500 text-xs text-white py-1 px-2 font-normal rounded absolute top-2.5 left-2.5">
                10%
            </div>

            <div className="product-thumbnail h-52">
                <img src={thumb} alt="product thumbnail" className="w-full h-full object-contain object-center" />
            </div>

            <div className="counter_wrapper absolute top-2.5 right-2.5">
                {
                    // Conditional rendaring of add to cart button and counter increment, decrement
                    counter <= 0 ? (
                        <Button className="p-2" varient="outline" click={() => increment(counter)}>
                            <BiPlus />
                        </Button>
                    ) : (
                        <div className="couter_box flex items-center bg-green-500 rounded">
                            <Button className="p-2" click={() => increment(counter)}>
                                <BiPlus />
                            </Button>
                            <span className="font-sm text-white mx-1">{counter}</span>
                            <Button className="p-2" click={() => decrement(counter)}>
                                <BiMinus />
                            </Button>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default ProductCardTop;
