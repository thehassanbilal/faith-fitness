import classes from './Banner.module.css';

export const Banner = (props) => {
  return (
    <div className={classes['under-carousel-banner-container']}>
      <img src={props.img} />
    </div>
  );
};
