import ProductCard from 'components/ProductCard';
import React from 'react';
import { FakeProducts, FakeCategorys } from './home/FakeData';
import { Swiper, SwiperSlide } from 'swiper/react';

const Home = () => {
  console.log(FakeCategorys[0].thumb.default);
  return (
    <>
      <div className="products_category_slider p-7 w-full flex">
        {/* Category card slider */}
        <Swiper spaceBetween={15} slidesPerView={7}>
          {FakeCategorys.length > 0 &&
            FakeCategorys.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="products_category_slider_card bg-white h-40 rounded-md cursor-pointer">
                    {/* Thumbnail */}
                    <div className="products_category_slider_card_image h-28 flex flex-row items-center justify-center mb-2.5 p-5">
                      <img src={item.thumb} alt={item.title} />
                    </div>
                    {/* Title */}
                    <span className="products_category_slider_card_title text-gray-800 text-center font-semibold">
                      {item.title}
                    </span>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>

      {/* Products card */}
      <div className="products_cards_grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-7 pb-7">
        {FakeProducts.length > 0 && FakeProducts.map((item, index) => <ProductCard details={item} key={index} />)}
      </div>
    </>
  );
};

export default Home;
