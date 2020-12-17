import ProductCard from 'components/ProductCard';
import React, { useRef } from 'react';
import { FakeProducts, FakeCategorys } from './home/FakeData';
import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation } from 'swiper'; // For swiper navigation
import CategoryCard from 'components/CategoryCard';
import Button from 'components/Button';

// SwiperCore.use([Navigation]); // Active swiper navigation
const Home = () => {
  // const navigationPrev = useRef(null); // Swiper navigation prev button
  // const navigationNext = useRef(null); // Swiper navigation next button
  return (
    <>
      <div className="products_category_slider p-7 w-full flex relative">
        {/* Category card slider */}
        <Swiper
          spaceBetween={15}
          slidesPerView={2}
          // navigation={{
          //   prevEl: navigationPrev.current ? navigationPrev.current : undefined,
          //   nextEl: navigationNext.current ? navigationNext.current : undefined,
          // }}
          breakpoints={{
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 7,
            },
          }}
        >
          {FakeCategorys.length > 0 &&
            FakeCategorys.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <CategoryCard item={item} />
                </SwiperSlide>
              );
            })}
        </Swiper>
        {/* <button ref={navigationPrev} className="absolute inset-y-0.5 left-0 z-50">
          Prev
        </button>
        <button ref={navigationNext} className="absolute inset-y-0.5 right-0 z-50">
          Next
        </button> */}
      </div>

      {/* Products card */}
      <div className="products_cards_grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-7 pb-7">
        {FakeProducts.length > 0 && FakeProducts.map((item, index) => <ProductCard details={item} key={index} />)}
      </div>

      <div className="center pb-7">
        <Button size="sm" varient="outline" className="text-green-600 font-bold border-none">
          Load more
        </Button>
      </div>
    </>
  );
};

export default Home;
