/** @format */

import OurProgramsCard from "../../Cards/OurProgramsCard/OurProgramsCard";
import classes from "./OurPrograms.module.css";
import icons1 from "../../../assets/icons-1.png";
import icons2 from "../../../assets/icons-2.png";
import icons3 from "../../../assets/icons-3.png";
import icons4 from "../../../assets/icons-4.png";

const OurPrograms = () => {
  const programsData = [
    {
      logo: <img src={icons1} height="80" width="80" />,
      title: "Flex Muscle",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
    },
    {
      logo: <img src={icons4} height="80" width="80" />,
      title: "Cardio Exercises",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
    },
    {
      logo: <img src={icons2} height="80" width="80" />,
      title: "Body Weight",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
    },
    {
      logo: <img src={icons3} height="80" width="80" />,
      title: "Weight Lifting",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
    },
  ];
  return (
    <section className={classes["programSection-container"]}>
      <h1 className={classes["programSection-heading"]}>Our Program</h1>
      <div className={classes["programSection-title"]}>
        <p className={classes["programSection-title-firstHalf"]}>BUILD YOUR</p>
        <p className={classes["programSection-title-secondHalf"]}>BEST BODY</p>
      </div>
      <div className={classes["programSection-cards"]}>
        {programsData.map((cardData) => {
          return (
            <OurProgramsCard
              logo={cardData.logo}
              title={cardData.title}
              desc={cardData.desc}
            />
          );
        })}
      </div>
    </section>
  );
};

export default OurPrograms;
