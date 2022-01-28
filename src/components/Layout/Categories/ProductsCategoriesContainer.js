import { ProductsCategories } from './ProductsCategories';

import classes from './ProductsCategoriesContainer.module.css';
import { productsCategoriesData } from '../../../services/productData';

export const ProductsCategoriesContainer = () => {
  return (
    <div className={classes['product-categories-container']}>
      <h2 className={classes['product-categories-heading']}>Categories</h2>
      {productsCategoriesData.map((category, i) => (
        <ProductsCategories
          heading={category.heading}
          desc={category.desc}
          img={category.img}
          style={category.style}
        />
      ))}
    </div>
  );
};
