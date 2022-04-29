import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSelectedProductThunk,
  removeSelectedProduct,
} from "../../features/productSlice";
import { useParams } from "react-router-dom";

import ProductDetailComponent from "../../components/ProductDetailComponent/ProductDetailComponent";

const ProductDetailPage = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();

  const product = useSelector(
    (state) => state.productSlice.selectedProduct
  );

  useEffect(() => {
    console.log("use effect envoked!");
    dispatch(getSelectedProductThunk(id));
  }, [dispatch, id]);

  console.log(product);

  return (
    <div>
      <ProductDetailComponent data={product} />
    </div>
  );
};

export default ProductDetailPage;
