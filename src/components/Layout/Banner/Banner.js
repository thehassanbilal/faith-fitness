/** @format */

import "../Banner/Banner.css";

export const Banner = (props) => {
  return (
    <div className="under-carousel-banner-container">
      <img src={props.img} />
    </div>
  );
};
