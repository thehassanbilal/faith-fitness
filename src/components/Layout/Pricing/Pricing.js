import OurProgramsCard from "../../Cards/OurProgramsCard/OurProgramsCard";
import classes from "./Pricing.module.css";

import { pricingsData } from "../../../services/productData";

const Pricing = () => {
  return (
    <section className={classes["pricingSection-container"]}>
      <h1 className={classes["pricingSection-heading"]}>Pricing</h1>
      <div className={classes["pricingSection-title"]}>
        <p className={classes["pricingSection-title-firstHalf"]}>Our</p>
        <p className={classes["pricingSection-title-secondHalf"]}>
          Special Plans
        </p>
      </div>
      <div className={classes["pricingSection-cards"]}>
        {pricingsData.map((cardData, i) => {
          return (
            <OurProgramsCard
              key={i}
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
