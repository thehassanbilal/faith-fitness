/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../../features/cartSlice/cartSlice";
import Fade from "react-reveal/Fade";

import "./ProductCard.css";

function ProductCard({ id, name, price }) {
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
    <div className="ProductCard-container container">
      <Fade left>
        <Link to={`/product/${id}`}>
          <img src={"i"} alt="Product " />
          <div className="ProductCard-detailPart">
            <p className="ProductCard-name">{name}</p>
            <p className="ProductCard-price">RS {price}</p>
            <div className="ProductCard-rating">{}⭐⭐⭐⭐⭐</div>
          </div>
        </Link>
        <button onClick={addToCartHandler}>
          <i className="fa fa-shopping-cart" style={{ color: "white" }}></i>
        </button>
      </Fade>
    </div>
  );
}

export default ProductCard;
