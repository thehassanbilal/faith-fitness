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

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const SwiperSlider = (props) => {
  console.log(DUMMY_PRODUCTS);
  return (
    <>
      <h1 className={classes['SwiperSlider-Heading']}>{props.heading}</h1>
      <Swiper
        slidesPerView={6}
        spaceBetween={10}
        slidesPerGroup={3}
        loop={false}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        className='swiper'
      >
        {DUMMY_PRODUCTS.map((product) => (
          <SwiperSlide className={classes['swiper-slide']}>
            <div className={classes['swiper-slider-card']}>
              <img src={product.img} />
              <div className={classes['swiper-slider-description-container']}>
                <h4 className={classes['swiper-slider-product-title']}>
                  John Doe
                </h4>
                <p className={classes['swiper-slider-product-desc']}>
                  Architect And Engineer
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperSlider;
