/** @format */
import React, { useRef, useState } from 'react';
import '../Cart/CheckoutItems.css';

import { useSelector } from 'react-redux';

function CheckoutItems() {
  const cartData = useSelector((state) => state.cart.items);
  console.log(cartData);

  //-------------------------Validations---------------------------------------------------
  const isEmpty = (value) => value.trim() === '';
  const isFiveChars = (value) => value.trim().length === 5;

  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    email: true,
    contact: true,
    postalCode: true,
    address: true,
  });

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const contactInputRef = useRef();
  const postalCodeInputRef = useRef();
  const addressInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredContact = contactInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredEmailIsValid = !isEmpty(enteredEmail);
    const enteredContactIsValid = !isEmpty(enteredContact);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);
    const enteredAddressIsValid = !isEmpty(enteredAddress);

    setFormInputsValidity({
      name: enteredNameIsValid,
      email: enteredEmailIsValid,
      contact: enteredContactIsValid,
      postalCode: enteredPostalCodeIsValid,
      address: enteredAddressIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredEmailIsValid &&
      enteredContactIsValid &&
      enteredPostalCodeIsValid &&
      enteredAddressIsValid;
    if (!formIsValid) {
      return;
    }
  };

  // const nameControlClasses = `${classes.control} ${
  //   formInputsValidity.name ? '' : classes.invalid
  // }`;
  // const contactControlClasses = `${classes.control} ${
  //   formInputsValidity.name ? '' : classes.invalid
  // }`;
  // const addressControlClasses = `${classes.control} ${
  //   formInputsValidity.address ? '' : classes.invalid
  // }`;
  // const postalCodeControlClasses = `${classes.control} ${
  //   formInputsValidity.postalCode ? '' : classes.invalid
  // }`;
  // const emailControlClasses = `${classes.control} ${
  //   formInputsValidity.email ? '' : classes.invalid
  // }`;

  // -------------------------Total items-------------------------------------------------

  var allProductsQuantity = [];
  cartData.forEach((item) => allProductsQuantity.push(item.quantity));
  var TotalItems = allProductsQuantity.reduce((a, b) => a + b);

  //-------------------------Sub Total ---------------------------------------------------

  var allProductsTotals = [];
  cartData.forEach((item) => allProductsTotals.push(item.totalPrice));
  var subTotal = allProductsTotals.reduce(function (a, b) {
    return a + b;
  }, 0);

  //--------------------------------------------------------------------------------------

  const deliveryCharges = 100;

  const totalToPay = subTotal + deliveryCharges;

  return (
    <div className='cart-top'>
      <div class='card'>
        <div class='card-body pt-5'>
          <div class='row'>
            <div class='col-md-7'>
              <div class='left border'>
                <div class='row'>
                  <span class='header'>Fill Information</span>
                </div>
                <form>
                  <div class='row'>
                    <div class='col-6'>
                      <span>Full Name:</span>
                      <input placeholder='Name...' ref={nameInputRef} />
                      {!formInputsValidity.name && (
                        <p>Please enter a valid name!</p>
                      )}
                    </div>
                    <div class='col-6'>
                      <span>Email Address:</span>
                      <input
                        id='email'
                        placeholder='email...'
                        ref={emailInputRef}
                      />
                      {!formInputsValidity.email && (
                        <p>Please enter a valid email!</p>
                      )}
                    </div>
                    <div class='col-6'>
                      <span>Contact Number:</span>
                      <input
                        id='contact'
                        placeholder='Contact...'
                        ref={contactInputRef}
                      />
                      {!formInputsValidity.contact && (
                        <p>Please enter a valid contact!</p>
                      )}
                    </div>
                    <div class='col-6'>
                      <span>Postal Code:</span>

                      <input
                        id='Postal Code'
                        placeholder='Postal Code...'
                        ref={postalCodeInputRef}
                      />
                      {!formInputsValidity.postalCode && (
                        <p>
                          Please enter a valid postal code (5 characters long)!
                        </p>
                      )}
                    </div>
                    <div class='col-12'>
                      <span>Address:</span>
                      <textarea
                        id='address'
                        placeholder='Complete address...'
                        className='address-info'
                        ref={addressInputRef}
                      ></textarea>{' '}
                      {!formInputsValidity.address && (
                        <p>Please enter a valid address!</p>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class='col-md-5'>
              <div class='right border'>
                <div class='header'>Order Summary</div>
                <p>Total Items : {TotalItems}</p>

                {/* -----------------------CART ITEMS-------------------------- */}
                {cartData.map((cartItem) => {
                  return (
                    <div class='row item'>
                      <div class='col-4 align-self-center'>
                        <img
                          class='img-fluid'
                          src={cartItem.img}
                          alt='product Image'
                        />
                      </div>
                      <div class='col-8'>
                        <div class='row'>
                          <b className='handle-padding'>RS {cartItem.price}</b>
                        </div>
                        <div class='row text-muted'>{cartItem.name}</div>
                        <div class='row'>Quantity: x{cartItem.quantity}</div>
                      </div>
                    </div>
                  );
                })}

                {/* ---------------------------------------------- */}

                <hr />
                <div class='row lower'>
                  <div class='col text-left'>Subtotal</div>
                  <div class='col text-right'>
                    RS {subTotal.toLocaleString()}
                  </div>
                </div>
                <div class='row lower'>
                  <div class='col text-left'>Delivery</div>
                  <div class='col text-right'>RS {deliveryCharges}</div>
                </div>
                <div class='row lower'>
                  <div class='col text-left'>
                    <b>Total to pay</b>
                  </div>
                  <div class='col text-right'>
                    <b>RS {totalToPay.toLocaleString()}</b>
                  </div>
                </div>

                <button
                  class='btn'
                  data-toggle='modal'
                  data-target='#exampleModal'
                  onClick={confirmHandler}
                >
                  Place order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* // popup model code */}
      <div
        class='modal fade'
        id='exampleModal'
        tabindex='-1'
        role='dialog'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog' role='document'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title' id='exampleModalLabel'>
                User Confermation
              </h5>
              <button
                type='button'
                class='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div class='modal-body'>
              Thank You for using our services, As the name suggests, this email
              contains a buyer’s order confirmation details, including what they
              bought, the purchase total, and the estimated delivery date.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutItems;
