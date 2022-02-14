import CategoriesBlock from '../../components/CategoriesBlock/CategoriesBlock';
import classes from './Shop.module.css';

import SwiperSlider from '../../components/SwiperSliders/SwiperSlider';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductCategoriesThunk } from '../../features/productSlice';

const Shop = () => {
  const dispatch = useDispatch();
  const productCategories = useSelector(
    (state) => state.productSlice.productCategories
  );
  console.log(productCategories);

  useEffect(async () => {
    dispatch(getProductCategoriesThunk());
  }, [dispatch]);

  return (
    <>
      <div>
        <CategoriesBlock data={productCategories} />
        <SwiperSlider heading={'FEATURED'} />
      </div>
    </>
  );
};

export default Shop;
