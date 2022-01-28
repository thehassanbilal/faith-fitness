import OurProgramsCard from "../../Cards/OurProgramsCard/OurProgramsCard";
import classes from "./OurPrograms.module.css";

const OurPrograms = () => {
  const programsData = [
    {
      logo: "🧍‍♂️",
      title: "Flex Muscle",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
    },
    {
      logo: "🚴🏻‍♀️",
      title: "Cardio Exercises",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
    },
    {
      logo: "🏃🏻‍♂️",
      title: "Body Weight",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
    },
    {
      logo: "🏋🏻‍♀️",
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
        {programsData.map((cardData, i) => {
          return (
            <OurProgramsCard
              keys={i}
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
