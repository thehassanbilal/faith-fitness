import WhyUsCard from '../../Cards/WhyUsCard/WhyUsCard';
import classes from './WhyUs.module.css';

const WhyUs = () => {
  const whyUsCardData = [
    {
      category: 'Total Members',
      Numbers: 230,
    },
    {
      category: 'Success',
      Numbers: '88%',
    },
    {
      category: 'programs',
      Numbers: '25+',
    },
    {
      category: 'Active Members',
      Numbers: '200+',
    },
  ];
  return (
    <>
      <section className={classes['whyUssection-container']}>
        <div className={classes['whyUssection-left-img']}></div>
        <div className={classes['whyUssection-right-whyUs']}>
          <h1 className={classes['whyUsSection-heading']}>Best Reasons</h1>
          <div className={classes['whyUsSection-title']}>
            <p className={classes['whyUsSection-title-firstHalf']}>WHY</p>
            <p className={classes['whyUsSection-title-secondHalf']}>
              CHOOSE US
            </p>
          </div>
          <p className={classes['whyUsSection-desc']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor.
          </p>

          <div className={classes['whyUsSection-mini-section-container']}>
            <div
              className={classes['whyUsSection-mini-section-container-rowOne']}
            >
              <div className={classes['whyUsSection-mini-section-one']}>
                <WhyUsCard
                  numbers={whyUsCardData[0].Numbers}
                  category={whyUsCardData[0].category}
                />
              </div>
              <div className={classes['whyUsSection-mini-section-two']}>
                <WhyUsCard
                  numbers={whyUsCardData[1].Numbers}
                  category={whyUsCardData[1].category}
                />
              </div>
            </div>
            <div
              className={classes['whyUsSection-mini-section-container-rowTwo']}
            >
              <div className={classes['whyUsSection-mini-section-three']}>
                <WhyUsCard
                  numbers={whyUsCardData[2].Numbers}
                  category={whyUsCardData[2].category}
                />
              </div>
              <div className={classes['whyUsSection-mini-section-four']}>
                <WhyUsCard
                  numbers={whyUsCardData[3].Numbers}
                  category={whyUsCardData[3].category}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
