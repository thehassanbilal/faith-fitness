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
            src={img}
          />
        </div>
        <div className={classes["productCard-content-box"]}>
          <Link to="/product/:id">
            <p className={classes["productCard-product-name"]}>{name}</p>
          </Link>
          <p className={classes["productCard-product-price"]}>RS {price}</p>
          <p className={classes["productCard-rating"]}>⭐⭐⭐⭐⭐</p>
          <a  className={classes["productCard-btn"]} onClick={addToCartHandler}>Buy Now</a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
