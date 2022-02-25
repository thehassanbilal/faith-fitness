/** @format */

import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartActions } from '../../features/cartSlice/cartSlice';
import Fade from 'react-reveal/Fade';

import './ProductCard.css';

function ProductCard(props) {
  const dispatch = useDispatch();

  const { id, name, quantity, totalPrice, price, img } = props;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
        quantity,
        img,
        totalPrice,
      })
    );
  };

  return (
    <div className='ProductCard-container container'>
      <Fade left>
        <Link to={`/store/products/${id}`}>
          <img src={props.img} alt='Product Image' />
          <div className='ProductCard-detailPart'>
            <p className='ProductCard-name'>{props.name}</p>
            <p className='ProductCard-price'>RS {props.price}</p>
            <div className='ProductCard-rating'>{props.rating}⭐⭐⭐⭐⭐</div>
          </div>
        </Link>
        <button onClick={addToCartHandler}>
          <i className='fa fa-shopping-cart' style={{ color: 'white' }}></i>
        </button>
      </Fade>
    </div>
  );
}

export default ProductCard;
