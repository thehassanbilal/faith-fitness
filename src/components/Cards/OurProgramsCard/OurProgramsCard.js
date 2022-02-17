/** @format */

import "./OurProgramsCard.css";
import Flip from "react-reveal/Flip";

const OurProgramsCard = (props) => {
  return (
    <>
      <Flip left>
        <div className="ourProgramCard-card-container">
          <div className="ourProgramCard-logo-container">
            <span className="ourProgramCard-logo">
              <div class="circle-wrapper">
                <div class="success circle"></div>
                <div class="icon">{props.logo}</div>
              </div>
            </span>
          </div>
          <div className="ourProgramCard-title">{props.title}</div>
          <div className="ourProgramCard-cost">{props.cost}</div>
          <p className="ourProgramCard-desc">{props.desc}</p>
        </div>
      </Flip>
    </>
  );
};

export default OurProgramsCard;
