/** @format */

import { useState } from "react";

import CarouselComponent from "../../components/CarouselComponent/CarouselComponent";
import AboutCoach from "../../components/Layout/AboutCoach/AboutCoach";
import { ProductsCategoriesContainer } from "../../components/Layout/Categories/ProductsCategoriesContainer";
import ClientTestimonials from "../../components/Layout/ClientTestimonials/ClientTestimonials";
import OurPrograms from "../../components/Layout/OurPrograms/OurPrograms";
import { Banner } from "../../components/Layout/Banner/Banner";
import WhyUs from "../../components/Layout/WhyUs/WhyUs";
import SwiperSlider from "../../components/SwiperSliders/SwiperSlider";
import homePageBannerImg from "../../assets/banners/underCarouselBanner.jpg";
import Cart from "../../components/Layout/Cart/Cart";
import { useSelector } from "react-redux";
import "../../App.css";

export const HomePage = () => {
  return (
    <>
      <div className="app-container">
        <CarouselComponent />
        <Banner img={homePageBannerImg} />
        <div className="main-container">
          <SwiperSlider heading={"MOST POPULAR"} />
          <ProductsCategoriesContainer />
          <OurPrograms />
          <WhyUs />
        </div>
        {/* <AboutCoach />
        <ClientTestimonials /> */}
      </div>
    </>
  );
};
