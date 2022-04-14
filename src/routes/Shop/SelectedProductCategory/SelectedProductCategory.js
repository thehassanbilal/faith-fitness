/** @format */

import React, { useEffect, useState } from "react";
import CategoriesBlock from "../../../components/CategoriesBlock/CategoriesBlock";
import { Banner } from "../../../components/Layout/Banner/Banner";
import SwiperSlider from "../../../components/SwiperSliders/SwiperSlider";

import "./SelectedProductCategory.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getSelectedCategoryThunk,
  removeSelectedCategoryProduct,
} from "../../../features/productSlice";
import ProductCard from "../../../components/ProductCard/ProductCard";
import "../../../App.css";

const SelectedProductCategory = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const [cat,setcat]=useState([])

  const selectedCategory = useSelector(
    (state) => state.productSlice.selectedCategory
  );

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
          {selectedCategory?.data?.attributes?.name}
        </h1>

        <div className="SelectedProductCategory-products">
          {/* {Object.entries(selectedCategory)?.map((product) => {
            return (
              <ProductCard
                id={product[1]?.products?.data?.[0]?.id}
                // img={product?.data.attributes?.products?.data[0]?.}
                name={product[1]?.products?.data?.[0]?.attributes.name}
                price={product?.data?.attributes?.products?.data[0]?.attributes.price}
              />
            );

          })} */}
        </div>
      </div>

      <SwiperSlider heading={`Most Popular in ${selectedCategory.name}`} />
    </>
  );
};

export default SelectedProductCategory;
