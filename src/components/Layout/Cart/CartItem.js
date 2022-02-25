import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../features/cartSlice/cartSlice';

import classes from './CartItem.module.css';

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { id, name, quantity, totalPrice, price, img } = props.item;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
        img,
        totalPrice,
      })
    );
  };

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>Rs {price.toFixed(2)}</span>
          <span className={classes.amount}>x {quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button
          className={classes['actions-button-minus']}
          onClick={removeItemHandler}
        >
          −
        </button>
        <button
          className={classes['actions-button-add']}
          onClick={addItemHandler}
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
