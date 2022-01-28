import classes from "./OurProgramsCard.module.css";

const OurProgramsCard = (props) => {
  return (
    <>
      <div
        key={props.keys}
        className={classes["ourProgramCard-card-container"]}
      >
        <div className={classes["ourProgramCard-logo-container"]}>
          <span className={classes["ourProgramCard-logo"]}>{props.logo}</span>
        </div>
        <div className={classes["ourProgramCard-title"]}>{props.title}</div>
        <div className={classes["ourProgramCard-cost"]}>{props.cost}</div>
        <p className={classes["ourProgramCard-desc"]}>{props.desc}</p>
      </div>
    </>
  );
};

export default OurProgramsCard;
