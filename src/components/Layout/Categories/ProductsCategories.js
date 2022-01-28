import { CtaButton } from '../Buttons/CtaButton';
import classes from './ProductsCategories.module.css';

export const ProductsCategories = (props) => {
  let textStyle = '';

  if (props.style !== 'imgRightSide') {
    textStyle = classes['products-categories-text-Rightside'];
  } else {
    textStyle = classes['products-categories-text-side'];
  }

  const textSideOfProductCategories = (
    <div className={textStyle}>
      <h3 className={classes['products-categories-heading']}>
        {props.heading}
      </h3>
      <p className={classes['products-categories-desc']}>{props.desc}</p>
      <CtaButton btnTxt={'SHOP NOW'} />
    </div>
  );

  const imgSideOfProductCategories = (
    <div className={classes['products-categories-img-side']}>
      <img src={props.img} />
    </div>
  );

  let rightSideOfDiv = '';
  let leftSideOfDiv = '';

  if (props.style === 'imgRightSide') {
    rightSideOfDiv = textSideOfProductCategories;
    leftSideOfDiv = imgSideOfProductCategories;
  } else {
    rightSideOfDiv = imgSideOfProductCategories;
    leftSideOfDiv = textSideOfProductCategories;
  }

  return (
    <section className={classes['products-categories-container']}>
      <div className={classes['products-categories-right-side']}>
        {rightSideOfDiv}
      </div>
      <div className={classes['products-categories-left-side']}>
        {leftSideOfDiv}
      </div>
    </section>
  );
};
