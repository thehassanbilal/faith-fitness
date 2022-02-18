/** @format */

import OurProgramsCard from "../../Cards/OurProgramsCard/OurProgramsCard";
import classes from "./Pricing.module.css";

import { pricingsData } from "../../../services/productData";
import PricingSlider from "./PricingSlider";

const Pricing = () => {
  return (
    <section className={classes["pricingSection-container"]}>
      <PricingSlider />
      <h1 className={classes["pricingSection-heading"]}>Pricing</h1>
      <div className={classes["pricingSection-title"]}>
        <p className={classes["pricingSection-title-firstHalf"]}>Our</p>
        <p className={classes["pricingSection-title-secondHalf"]}>
          Special Plans
        </p>
      </div>
      <div className={classes["pricingSection-cards"]}>
        {pricingsData.map((cardData) => {
          return (
            <OurProgramsCard
              logo={cardData.logo}
              title={cardData.title}
              desc={cardData.desc}
              cost={cardData.cost}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
