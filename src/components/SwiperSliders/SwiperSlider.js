// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { DUMMY_PRODUCTS } from '../../services/productData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import classes from './SwiperSlider.module.css';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper';
import ProductCard from '../ProductCard/ProductCard';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const SwiperSlider = (props) => {
  return (
    <>
      <h1 className={classes['SwiperSlider-Heading']}>{props.heading}</h1>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        slidesPerGroup={2}
        loop={false}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        className={classes['swiper']}
      >
        {DUMMY_PRODUCTS.map((product) => (
          <SwiperSlide className={classes['swiper-slide']}>
            <ProductCard
              img={product.img}
              name={product.name}
              price={product.price}
              rating={product.rating}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperSlider;
