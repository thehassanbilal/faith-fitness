import CategoriesBlock from '../../components/CategoriesBlock/CategoriesBlock';
import classes from './Shop.module.css';

import { shopProductCategories } from '../../services/productData';
import SwiperSlider from '../../components/SwiperSliders/SwiperSlider';

const Shop = () => {
  return (
    <>
      <div>
        <CategoriesBlock data={shopProductCategories} />
        <SwiperSlider heading={'FEATURED'} />
      </div>
    </>
  );
};

export default Shop;
