import { configureStore } from "@reduxjs/toolkit";
import  productReducer  from "../features/productSlice/productSlice";

const store = configureStore({
  reducer: {
    getProduct: productReducer,
  },
});
export default store;
