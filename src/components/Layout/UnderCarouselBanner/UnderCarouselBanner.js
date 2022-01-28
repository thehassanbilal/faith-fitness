import UnderCarouselBannerImg from "../../../assets/banners/underCarouselBanner.jpg";
import classes from "./UnderCarouselBanner.module.css";
export const UnderCarouselBanner = () => {
  return (
    <div className={classes["under-carousel-banner-container"]}>
      <img src={UnderCarouselBannerImg} alt="" />
    </div>
  );
};
