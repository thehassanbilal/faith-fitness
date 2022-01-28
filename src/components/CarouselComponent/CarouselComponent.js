// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import imges for carousel
import { carouselImgs } from "../../services/productData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import classes from "./CarouselComponent.module.css";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation]);

const CarouselComponent = () => {
  return (
    <>
      <Swiper navigation={true} className={classes["Carousel-swiper"]}>
        {carouselImgs.map((carouselImg, i) => (
          <SwiperSlide key={i} className={classes["Carousel-swiper-slide"]}>
            <img src={carouselImg.img} alt="do dood" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CarouselComponent;
