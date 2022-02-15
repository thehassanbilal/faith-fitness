import React, { useEffect } from 'react';
import CategoriesBlock from '../../../components/CategoriesBlock/CategoriesBlock';
import { Banner } from '../../../components/Layout/Banner/Banner';
import SwiperSlider from '../../../components/SwiperSliders/SwiperSlider';

import { proteinCompaniesCategory } from '../../../services/productData';
import classes from './SelectedProductCategory.module.css';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCompaniesThunk,
  getSelectedCategoryThunk,
  removeSelectedCategoryProduct,
} from '../../../features/productSlice';
import ProductCard from '../../../components/ProductCard/ProductCard';

const SelectedProductCategory = () => {
  let { id } = useParams();

  const selectedCategory = useSelector(
    (state) => state.productSlice.selectedCategory
  );

  const companiesList = useSelector((state) => state.productSlice.companies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSelectedCategoryThunk(id));
    dispatch(getCompaniesThunk());

    // return () => {
    //   return dispatch(removeSelectedCategoryProduct());
    // };
  }, [dispatch, id]);

  const bannerURL = `http://localhost:1337${selectedCategory?.banner?.[0]?.url}`;

  return (
    <>
      <div className={classes['SelectedProductCategory-container']}>
        <div className={classes['SelectedProductCategory-bannerDiv']}>
          <Banner img={bannerURL} />
        </div>
        <p className={classes['SelectedProductCategory-param']}></p>
        <h1
          className={classes['SelectedProductCategory-selectCompany-heading']}
        >
          Products:
        </h1>

        <div className={classes['SelectedProductCategory-products']}>
          {selectedCategory?.products?.map((product, i) => {
            return (
              <ProductCard
                id={product.id}
                img={`http://localhost:1337${product?.product_img?.[0]?.url}`}
                name={product.name}
                price={product.price}
              />
            );
          })}
        </div>
      </div>
      <SwiperSlider heading={'Here Are PROTEIN Products'} />
    </>
  );
};

export default SelectedProductCategory;
