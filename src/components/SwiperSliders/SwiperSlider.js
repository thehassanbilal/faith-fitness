// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import classes from "./SwiperSlider.module.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";
import { getProductThunk } from "../../features/productSlice/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
// install Swiper modules
SwiperCore.use([Pagination, Navigation]);
const SwiperSlider = ({ heading }) => {
  const [datas, setDatas] = useState([]);
  const data = useSelector((state) => state?.getProduct?.products);
  console.log(data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductThunk());
  }, [dispatch, datas]);
  return (
    <>
      <h1 className={classes["SwiperSlider-Heading"]}>{heading}</h1>
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
        className="swiper"
      >
        {data?.map((product, i) => (
          <SwiperSlide key={i} className={classes["swiper-slide"]}>
            <div className={classes["swiper-slider-card"]}>
              <img src={product?.image?.url} alt="missing" />
              <div className={classes["swiper-slider-description-container"]}>
                <h4 className={classes["swiper-slider-product-title"]}>
                  {product.name}
                </h4>
                <p className={classes["swiper-slider-product-desc"]}>
                  {product.description}
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
