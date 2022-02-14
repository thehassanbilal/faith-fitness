import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../features/productSlice';
import uiSlice from '../features/uiSlice/uiSlice';

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    productSlice: productSlice,
  },
});
export default store;
