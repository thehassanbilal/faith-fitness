/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../../features/cartSlice/cartSlice";
import Fade from "react-reveal/Fade";

import "./ProductCard.css";

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
    <div className="ProductCard-container">
      <Fade left>
        <Link to={`/store/products/${id}`}>
          <img src={props.img} alt="Product Image" />
          <div className="ProductCard-detailPart">
            <p className="ProductCard-name">{props.name}</p>
            <p className="ProductCard-price">$29.0</p>
            {/* <div className="ProductCard-rating">{props.rating}⭐⭐⭐⭐⭐</div> */}
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
