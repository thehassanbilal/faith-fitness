/** @format */

import OurProgramsCard from "../../Cards/OurProgramsCard/OurProgramsCard";
import classes from "./OurPrograms.module.css";
import icons1 from "../../../assets/icons-1.png";
import icons2 from "../../../assets/icons-2.png";
import icons3 from "../../../assets/icons-3.png";
import icons4 from "../../../assets/icons-4.png";
import "../../../App.css";

const OurPrograms = () => {
  const learnMore = "Learn More..";
  const programsData = [
    {
      logo: <img src={icons1} height="80" width="80" />,
      title: "Flex Muscle",
      desc: "Lacking motivation to get back into the gym? Back in the gym already but feel stagnated? Or maybe you’re just looking for new inspiration for a the new year. Whatever your situation, reading words of wisdom from successful people can be super-inspiring.",
    },
    {
      logo: <img src={icons4} height="80" width="80" />,
      title: "Cardio Exercises",
      desc: "Lacking motivation to get back into the gym? Back in the gym already but feel stagnated? Or maybe you’re just looking for new inspiration for a the new year. Whatever your situation, reading words of wisdom from successful people can be super-inspiring.",
    },
    {
      logo: <img src={icons2} height="80" width="80" />,
      title: "Body Weight",
      desc: "Lacking motivation to get back into the gym? Back in the gym already but feel stagnated? Or maybe you’re just looking for new inspiration for a the new year. Whatever your situation, reading words of wisdom from successful people can be super-inspiring.",
    },
    {
      logo: <img src={icons3} height="80" width="80" />,
      title: "Weight Lifting",
      desc: "Lacking motivation to get back into the gym? Back in the gym already but feel stagnated? Or maybe you’re just looking for new inspiration for a the new year. Whatever your situation, reading words of wisdom from successful people can be super-inspiring.",
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
              btn_txt={learnMore}
            />
          );
        })}
      </div>
    </section>
  );
};

export default OurPrograms;
