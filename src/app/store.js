import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../features/cartSlice/cartSlice';
import productSlice from '../features/productSlice';
import uiSlice from '../features/uiSlice/uiSlice';

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    productSlice: productSlice,
    cart: cartSlice.reducer,
  },
});
export default store;
