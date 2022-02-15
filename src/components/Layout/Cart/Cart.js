import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../../features/uiSlice/uiSlice';
import { Modal } from '../Modal/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = (props) => {
  const [isCheckout, setisCheckout] = useState(false);
  const dispatch = useDispatch();

  const cartData = useSelector((state) => state.cart.items);

  const closeButtonHandler = () => {
    dispatch(uiActions.toggle());
  };

  const orderHandler = () => {
    setisCheckout(true);
  };

  return (
    <Modal>
      <ul className={classes['cart-items']}>
        <h1>Cart Items</h1>
        {cartData?.map((item, i) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              name: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>

      <div className={classes.actions}>
        <button onClick={closeButtonHandler} className={classes['button--alt']}>
          Close
        </button>
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      </div>
      {isCheckout && <Checkout onCancel={closeButtonHandler} />}
    </Modal>
  );
};

export default Cart;
