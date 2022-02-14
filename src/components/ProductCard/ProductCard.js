import React from 'react';

import classes from './ProductCard.module.css';

function ProductCard(props) {
  return (
    <div>
      <div className={classes['ProductCard-container']}>
        <img src={props.img} alt='Product Image' />
        <div className={classes['ProductCard-detailPart']}>
          <p className={classes['ProductCard-name']}>{props.name}</p>
          <p className={classes['ProductCard-price']}>RS{props.price}</p>
          <div className={classes['ProductCard-rating']}>
            {props.rating}⭐⭐⭐⭐⭐
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
