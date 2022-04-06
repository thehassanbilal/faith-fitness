/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../../features/cartSlice/cartSlice";
import Fade from "react-reveal/Fade";

import classes from "./ProductCard.module.css";

function ProductCard({id, name, price, img}) {
  const dispatch = useDispatch();


  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
      })
    );
  };

  return (
    <div className={classes["productCard-container"]}>
      <div className={classes["productCard-card"]}>
        <div className={classes["productCard-img-container"]}>
          <img
            className={classes["productCard-image"]}
<<<<<<< HEAD
            src={img}
=======
            src={props?.img} alt="product image"
>>>>>>> f915ae96380da9f8a6f5b4ef306348e0d0a808f3
          />
        </div>
        <div className={classes["productCard-content-box"]}>
          <p className={classes["productCard-product-name"]}>{name}</p>
          <p className={classes["productCard-product-price"]}>RS {price}</p>
          <p className={classes["productCard-rating"]}>⭐⭐⭐⭐⭐</p>
          <a onClick={addToCartHandler}>Buy Now</a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
