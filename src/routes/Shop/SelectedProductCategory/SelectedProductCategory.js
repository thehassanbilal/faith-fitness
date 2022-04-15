/** @format */

import React, { useEffect } from "react";
import CategoriesBlock from "../../../components/CategoriesBlock/CategoriesBlock";
import { Banner } from "../../../components/Layout/Banner/Banner";
import SwiperSlider from "../../../components/SwiperSliders/SwiperSlider";
import axios from "axios";
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
  let { name } = useParams();

  const selectedCategory = useSelector(
    (state) => state.productSlice.selectedCategory
  );

  useEffect(async () => {
    console.log("i am in useEffect");
    // console.log("useEffect is running")
    // dispatch(getSelectedCategoryThunk(name));
    try {
      const response = await fetch(`http://localhost:5000/api/products`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        mode: "no-cors",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

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
          {Object.entries(selectedCategory)?.map((product) => {
            return (
              <ProductCard
                id={product[1]?.products?.data?.[0]?.id}
                img={product?.data.attributes?.products?.data[0]}
                name={product[1]?.products?.data?.[0]?.attributes.name}
                price={
                  product?.data?.attributes?.products?.data[0]?.attributes.price
                }
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
