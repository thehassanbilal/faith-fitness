import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getSelectedProductThunk,
  removeSelectedProduct,
} from '../../features/productSlice';
import { useParams } from 'react-router-dom';

import ProductDetailComponent from '../../components/ProductDetailComponent/ProductDetailComponent';

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const productData = useSelector(
    (state) => state.productSlice.selectedProduct
  );

  useEffect(() => {
    dispatch(getSelectedProductThunk(id));
    return () => dispatch(removeSelectedProduct());
  }, [dispatch, id]);

  return (
    <div>
      <ProductDetailComponent data={productData} />
    </div>
  );
};

export default ProductDetailPage;
