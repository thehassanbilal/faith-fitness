/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../../features/cartSlice/cartSlice";
import Fade from "react-reveal/Fade";

import classes from "./ProductCard.module.css";

function ProductCard(props) {
  const dispatch = useDispatch();


  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        // id,
        // name,
        // price,
      })
    );
  };

  console.log(props);

  return (
    <div className={classes["productCard-container"]}>
      <div className={classes["productCard-card"]}>
        <div className={classes["productCard-img-container"]}>
          <img
            className={classes["productCard-image"]}
            src={props?.img} alt="product image"
          />
        </div>
        <div className={classes["productCard-content-box"]}>
          <p className={classes["productCard-product-name"]}>{props.name}</p>
          <p className={classes["productCard-product-price"]}>{props.price}</p>
          <p className={classes["productCard-rating"]}>⭐⭐⭐⭐⭐</p>
          <a href="#" onClick={addToCartHandler}>Buy Now</a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
