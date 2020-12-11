import ProductCard from 'components/ProductCard';
import React from 'react';
import { FakeProducts, FakeCategorys } from './home/FakeData';
import { Swiper, SwiperSlide } from 'swiper/react';
import CategoryCard from 'components/CategoryCard';

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
                  <CategoryCard item={item} />
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
