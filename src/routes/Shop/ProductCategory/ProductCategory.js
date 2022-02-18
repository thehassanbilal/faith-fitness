/** @format */

import React from "react";
import CategoriesBlock from "../../../components/CategoriesBlock/CategoriesBlock";
import SwiperSlider from "../../../components/SwiperSliders/SwiperSlider";

import { proteinCompaniesCategory } from "../../../services/productData";

const ProductCategory = () => {
  return (
    <div>
      <CategoriesBlock data={proteinCompaniesCategory} />
      <SwiperSlider />
    </div>
  );
};

export default ProductCategory;
