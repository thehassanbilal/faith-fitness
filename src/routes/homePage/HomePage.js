import CarouselComponent from "../../components/CarouselComponent/CarouselComponent";
import AboutCoach from "../../components/Layout/AboutCoach/AboutCoach";
import { ProductsCategoriesContainer } from "../../components/Layout/Categories/ProductsCategoriesContainer";
import ClientTestimonials from "../../components/Layout/ClientTestimonials/ClientTestimonials";
import OurPrograms from "../../components/Layout/OurPrograms/OurPrograms";
import Pricing from "../../components/Layout/Pricing/Pricing";
import { UnderCarouselBanner } from "../../components/Layout/UnderCarouselBanner/UnderCarouselBanner";
import WhyUs from "../../components/Layout/WhyUs/WhyUs";
import SwiperSlider from "../../components/SwiperSliders/SwiperSlider";

export const HomePage = ({ product }) => {
  return (
    <>
      <div className="app-container">
        <CarouselComponent />
        <UnderCarouselBanner />
        <SwiperSlider heading={"MOST POPULAR"} product={product} />
        <ProductsCategoriesContainer />
        <OurPrograms />
        <WhyUs />
        <Pricing />
        <AboutCoach />
        <ClientTestimonials />
      </div>
    </>
  );
};
