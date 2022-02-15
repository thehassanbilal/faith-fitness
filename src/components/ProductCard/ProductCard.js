import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartActions } from '../../features/cartSlice/cartSlice';

import classes from './ProductCard.module.css';

function ProductCard(props) {
  const dispatch = useDispatch();

  const { id, price, name, description } = props;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
        description,
      })
    );
  };

  return (
    <div className={classes['ProductCard-container']}>
      <Link to={`/store/products/${id}`}>
        <img src={props.img} alt='Product Image' />
        <div className={classes['ProductCard-detailPart']}>
          <p className={classes['ProductCard-name']}>{props.name}</p>
          <p className={classes['ProductCard-price']}>RS{props.price}</p>
          <div className={classes['ProductCard-rating']}>
            {props.rating}⭐⭐⭐⭐⭐
          </div>
        </div>
      </Link>
      <button onClick={addToCartHandler}>🛒</button>
    </div>
  );
}

export default ProductCard;
