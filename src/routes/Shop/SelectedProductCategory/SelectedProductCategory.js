/** @format */

import React, { useEffect } from "react";
import CategoriesBlock from "../../../components/CategoriesBlock/CategoriesBlock";
import { Banner } from "../../../components/Layout/Banner/Banner";
import SwiperSlider from "../../../components/SwiperSliders/SwiperSlider";

import { proteinCompaniesCategory } from "../../../services/productData";
import "./SelectedProductCategory.css";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCompaniesThunk,
  getSelectedCategoryThunk,
  removeSelectedCategoryProduct,
} from "../../../features/productSlice";
import ProductCard from "../../../components/ProductCard/ProductCard";
import "../../../App.css";

const SelectedProductCategory = () => {
  let { id } = useParams();

  const selectedCategory = useSelector(
    (state) => state.productSlice.selectedCategory
  );

  const dispatch = useDispatch();

  useEffect(() => {
    "useEffect is running";
    dispatch(getSelectedCategoryThunk(id));
  }, [dispatch, id]);

  return (
    <>
      <div className="SelectedProductCategory-container">
        <div className="SelectedProductCategory-bannerDiv">
          {/* <Banner img={bannerURL} /> */}
        </div>
        <p className="SelectedProductCategory-param"></p>
        <h1 className="pricingSection-heading line-divider">
          {selectedCategory.name}
        </h1>

        <div className="SelectedProductCategory-products">
          {selectedCategory?.map((product, i) => {
            return (
              <ProductCard
                id={product._id}
                img={product?.images?.Product_img}
                name={product.name}
                price={product.price}
              />
            );
          })}
        </div>
      </div>

      <SwiperSlider heading={`Most Popular in ${selectedCategory.name}`} />
    </>
  );
};

export default SelectedProductCategory;
