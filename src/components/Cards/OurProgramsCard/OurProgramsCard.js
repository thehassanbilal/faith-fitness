/** @format */

import './OurProgramsCard.css';
import Flip from 'react-reveal/Flip';

const OurProgramsCard = (props) => {
  return (
    <>
      <Flip left>
        <div className='ourProgramCard-card-container'>
          <div className='ourProgramCard-logo-container'>
            <span className='ourProgramCard-logo'>
              <div className='circle-wrapper'>
                <div className='success circle'></div>
                <div className='icon'>{props.logo}</div>
              </div>
            </span>
          </div>
          <div className='ourProgramCard-title'>{props.title}</div>
          <div className='ourProgramCard-cost'>{props.cost}</div>
          <p className='ourProgramCard-desc'>{props.desc}</p>
          <button className='subscribe-btn'>{props.btn_txt}</button>
        </div>
      </Flip>
    </>
  );
};

export default OurProgramsCard;
