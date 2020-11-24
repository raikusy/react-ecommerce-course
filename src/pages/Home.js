import Button from 'components/Button';
import ProductCard from 'components/ProductCard';
import React from 'react';
import { BiCartAlt } from 'react-icons/bi';
import img from '../img/product_thumb.jpg';

const data = [
    {
        thumb: img,
        title: 'A title for testing',
        price: '$10',
        discount: '$2',
    },
];

const Home = () => {
    return (
        <>
            <div className="w-full bg-yellow-200 py-10">
                <Button className="m-2" size="sm">
                    Button
                </Button>
                <Button className="m-2" size="md">
                    Button
                </Button>
                <Button className="m-2" size="lg">
                    Button
                </Button>
                <Button className="m-2 inline-flex items-center" size="sm">
                    <BiCartAlt />
                    Button
                </Button>
                <Button className="px-4 py-4" varient="outline">
                    <BiCartAlt />
                </Button>
                <Button className="m-2" size="sm">
                    Button
                </Button>
            </div>
            <div className="products_cards_grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4">
                <ProductCard details={data[0]} />
                <ProductCard details={data[0]} />
                <ProductCard details={data[0]} />
                <ProductCard details={data[0]} />
                <ProductCard details={data[0]} />
            </div>
        </>
    );
};

export default Home;
