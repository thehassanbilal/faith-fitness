/** @format */

import React from "react";

import classes from "./ProductDetailComponent.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../features/cartSlice/cartSlice";
import img from "../../assets/products/DUMMY_PRODUCTS/1.jpg";

const ProductDetailComponent = ({ data }) => {
  const dispatch = useDispatch();

  const { id, name, price, description } = data;

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

  const { supplement_flavors, supplement_weights } = data;
  const productImg = `http://localhost:1337${data?.product_img?.[0]?.url}`;
  const nutritionImg = `http://localhost:1337${data?.nutrition_img?.[0]?.url}`;

  return (
    <div className={classes["ProductDetailPage-container"]}>
      <div className={classes["ProductDetailPage-imgSide"]}>
        <div className={classes["ProductDetailPage-img-container"]}>
          <img src={img} />
        </div>
        <div className={classes["ProductDetailPage-desc"]}>
          <h3 className={classes["desc"]}>Description:</h3>
          <p>{data?.description}</p>
        </div>
      </div>
      <div className={classes["ProductDetailPage-detailSide"]}>
        <p className={classes["ProductDetailPage-name"]}>Product Details</p>

        <div className={classes["ProductDetailPage-price-section"]}>
          <ul>
            <li className={classes["ProductDetailPage-price"]}>
              Rs {data?.price}
            </li>
            <li>Cash On Delivery</li>
            <li>2-3 days Delivery</li>
            <li>3 days return policy</li>
            <li>Flat Rate (All over pakistan)</li>
          </ul>
        </div>

        <div
          className={classes["ProductDetailPage-flavour-and-weight-container"]}
        >
          {/* ---------------------------------------------------- */}
          <select
            className={classes["ProductDetailPage-flavour-and-weight"]}
            name="flavor"
          >
            {supplement_flavors?.map((flavor) => (
              <option className={classes["option"]}>{flavor.name}</option>
            ))}
          </select>
          {/* -------------------------------------------------------------- */}
          <select
            className={classes["ProductDetailPage-flavour-and-weight"]}
            name="flavor"
          >
            {supplement_weights?.map((weight) => (
              <option className={classes["option"]}>{weight.weight}</option>
            ))}
          </select>
        </div>
        <div className={classes["ProductDetailPage-ctaBtn-container"]}>
          <button
            className={classes["ProductDetailPage-btn"]}
            onClick={addToCartHandler}
          >
            ADD TO CART
          </button>
        </div>
        {!nutritionImg && (
          <div className={classes["ProductDetailPage-nutritionImg"]}>
            <img src={nutritionImg} alt="⚠ Nutrition Image not Available!" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailComponent;
